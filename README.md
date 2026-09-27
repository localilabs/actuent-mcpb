# Actuent for Claude Desktop

Search the web as structured data. Actuent returns any website as LAWP (Locali AI Web Protocol): clean JSON with the site's pages summarised in plain English and the actions a visitor can take. No raw HTML.

## Install

1. Download `actuent.mcpb`.
2. Double-click it, or drag it into **Claude Desktop → Settings → Extensions**.
3. Optional: paste an Actuent Pro API key from [actuent.ai](https://actuent.ai). Leave it empty to use the free tier.

## Try it

- "Find me a barber in Amsterdam and tell me their prices"
- "What can I do on nike.com?"
- "Compare adidas.com and puma.com"

## Tools

| Tool | Plan |
|---|---|
| `actuent_search`: search by topic or domain (3 results on free, all on Pro) | Free |
| `actuent_summarise`, `actuent_get_actions`, `actuent_get_page`, `actuent_compare`, `actuent_trending`, `actuent_news`, `actuent_nearby` | Free |
| `actuent_history`: your past searches | Pro |
| `actuent_execute_action`: perform a site action on sites with [LAWP action endpoints](https://docs.actuent.ai/#actions) | Pro |

Free usage is limited to 20 requests per minute and Pro to 60.

## How it works

The extension is a small local server that forwards Claude's requests to Actuent's hosted MCP server at `https://agents.actuent.ai/api/mcp`, adding your API key if you set one. It has no dependencies and stores nothing on your computer.

## Privacy Policy

Actuent receives the tool arguments Claude sends, such as your search query, a domain, or a location for nearby places. It does not receive your conversation. It logs searches, and IP addresses are kept for about 10 minutes for rate limiting. Pro searches are linked to your API key to provide history and analytics. Data is processed by Vercel, Supabase, Groq, Jina AI, Google Maps Platform (nearby tool only) and Stripe (payments). We do not sell data or use it to train AI models.

Full policy: https://docs.actuent.ai/privacy

## Support

Docs: https://docs.actuent.ai
