import { Elysia } from "elysia";
import { file } from "./modules/file";
import { folder } from "./modules/folder";
import { describe, expect, it } from "bun:test";

const app = new Elysia({ prefix: '/api' })
  .onError(({ error, code }) => {
    if (code === 'NOT_FOUND') return 'Not Found'

    console.error(error)
  })
  .use(folder)
  .use(file)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);