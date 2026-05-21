# ${{ values.name }}

${{ values.description }}

A Model Context Protocol (MCP) server scaffolded from the `mcp-server-typescript` Backstage template.

## Develop

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build
yarn start
```

## Wire into a client

Point your MCP client at the built binary. Example for Claude Code:

```json
{
  "mcpServers": {
    "${{ values.name }}": {
      "command": "node",
      "args": ["./dist/index.js"]
    }
  }
}
```

## Add a tool

Tools are registered in `src/index.ts` via `server.registerTool(name, schema, handler)`. Input schemas use Zod.
