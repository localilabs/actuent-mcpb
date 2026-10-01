<p align="center"><img src="https://api.actuent.ai/assets/lawpy/lawpy-dance.gif" width="108" height="72" alt="Lawpy, the Actuent mascot, dancing"></p>

# Actuent for Claude Desktop

Give Claude the live internet. Ask what's open near you right now, what's on in New York this weekend or what something costs today, and Claude actually knows, with links to the source. Under the hood, every site is structured as LAWP, an open format for what a site is and what an AI can do there.

## Install

1. Download `actuent.mcpb`.
2. Double-click it, or drag it into **Claude Desktop → Settings → Extensions**.
3. Optional: paste an Actuent Pro API key from [actuent.ai](https://actuent.ai). Leave it empty to use the free tier.

## Try it

- "Find me a barber in Amsterdam and tell me their prices"
- "What can I do on nike.com?"
- "Compare adidas.com and puma.com"

## Tools

| Tool | What it does | Plan |
|---|---|---|
| `actuent_search` | Search Actuent for any topic, keyword, domain or page, in any language. | Free |
| `actuent_history` | Get the search history for this API key — every query made through Actuent. | Pro |
| `actuent_summarise` | Get a single plain English paragraph summarising any website. | Free |
| `actuent_get_actions` | Get all available actions for a specific site. | Free |
| `actuent_get_page` | Get the LAWP for a specific URL path. | Free |
| `actuent_execute_action` | Perform one of a site's LAWP actions (e.g. | Pro |
| `actuent_accounts` | The user's site accounts connected to Actuent (for actions like 'reorder my last order'). | Pro |
| `actuent_action_status` | Check a long-running action that returned pending, using its status_url. | Pro |
| `actuent_compare` | Compare two or more sites side by side using their LAWP data, or two or more products (URLs from actuent_search products): price, stock, price history and cheaper shops. | Free |
| `actuent_trending` | Get the top 10 most searched sites and queries on Actuent right now. | Free |
| `actuent_news` | Get the latest news articles on a topic: headlines, sources, links and publish dates. | Free |
| `actuent_nearby` | Find physical places near the user relevant to their query, with opening hours and open-now. | Free |
| `actuent_plan` | Plan a timed outing near a place: e.g. | Free |
| `actuent_cart` | Put products (URLs from actuent_search products) in a basket: returns one link per shop that opens the shop's checkout with the items in it, so the user just reviews and pays. | Free |
| `actuent_trip` | Plan a 1–4 day city trip: where to stay, and a timed plan for each day (coffee, sights, lunch, dinner, drinks) with places open when you'd arrive and close together, plus events. | Free |
| `actuent_find_service` | Find a specific service or menu item with its price at local businesses, from what they publish on their own websites: e.g. | Free |
| `actuent_ask_site` | Answer a question from one website's own pages (e.g. | Free |
| `actuent_events` | Upcoming events (concerts, classes, workshops, festivals) that websites publish, by city, date range and topic. | Free |
| `actuent_watch_price` | Watch a product (from actuent_search products) and get an email, and optionally a webhook, when its price drops or when it's back in stock. | Pro |

## How it works

The extension is a small local server that forwards Claude's requests to Actuent's hosted MCP server at `https://agents.actuent.ai/api/mcp`, adding your API key if you set one. It has no dependencies and stores nothing on your computer.

## Privacy Policy

Actuent receives the tool arguments Claude sends, such as your search query, a domain, or a location for nearby places. It does not receive your conversation. It logs searches, and IP addresses are kept for about 10 minutes for rate limiting. Pro searches are linked to your API key to provide history and analytics. Data is processed by Vercel, Supabase, Groq, Jina AI, Google Maps Platform (nearby tool only) and Stripe (payments). We do not sell data or use it to train AI models.

Full policy: https://docs.actuent.ai/privacy

## Support

Docs: https://docs.actuent.ai
