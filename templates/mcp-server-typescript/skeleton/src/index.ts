#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: '${{ values.name }}',
  version: '0.1.0',
});

server.registerTool(
  'ping',
  {
    title: 'Ping',
    description: 'Replies with pong and the message you sent.',
    inputSchema: {
      message: z.string().describe('Message to echo back'),
    },
  },
  async ({ message }) => ({
    content: [{ type: 'text', text: `pong: ${message}` }],
  }),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
