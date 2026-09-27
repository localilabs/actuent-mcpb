#!/usr/bin/env node
// Actuent for Claude Desktop: a stdio MCP server that forwards every message to the
// hosted Actuent MCP server (https://agents.actuent.ai/api/mcp). No dependencies.

const ENDPOINT = process.env.ACTUENT_MCP_URL || "https://agents.actuent.ai/api/mcp"
const API_KEY = (process.env.ACTUENT_API_KEY || "").trim()

function write(message) {
  process.stdout.write(JSON.stringify(message) + "\n")
}

async function forward(message) {
  const isRequest = message.id !== undefined && message.id !== null
  try {
    const headers = { "Content-Type": "application/json", "Accept": "application/json" }
    // Claude Desktop substitutes an empty or unexpanded value when no key is set.
    if (API_KEY && !API_KEY.startsWith("${")) headers["Authorization"] = `Bearer ${API_KEY}`
    const res = await fetch(ENDPOINT, { method: "POST", headers, body: JSON.stringify(message) })
    if (!isRequest) return
    const text = await res.text()
    if (!text) throw new Error(`Empty response (HTTP ${res.status})`)
    let body
    try { body = JSON.parse(text) } catch { throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`) }
    if (body.jsonrpc) {
      write(body)
    } else {
      // e.g. 429 rate limit bodies, which aren't JSON-RPC
      write({ jsonrpc: "2.0", id: message.id, error: { code: -32000, message: body.message || body.error || `HTTP ${res.status}` } })
    }
  } catch (e) {
    console.error(`actuent: ${e}`)
    if (isRequest) write({ jsonrpc: "2.0", id: message.id, error: { code: -32000, message: `Actuent is unreachable: ${e.message || e}` } })
  }
}

let buffer = ""
process.stdin.setEncoding("utf8")
process.stdin.on("data", chunk => {
  buffer += chunk
  let newline
  while ((newline = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, newline).trim()
    buffer = buffer.slice(newline + 1)
    if (!line) continue
    let message
    try { message = JSON.parse(line) } catch {
      write({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } })
      continue
    }
    forward(message)
  }
})
process.stdin.on("end", () => process.exit(0))
