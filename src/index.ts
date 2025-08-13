import { Elysia } from "elysia";
import { file } from "./modules/file";
import { folder } from "./modules/folder";
import { ErrorResponse } from "./models/response-message.model";

const app = new Elysia({ prefix: '/api' })
  .onError(({ error, code }) => {
    const response: ErrorResponse = {
      success: false,
      error: error.toString(),
    }

    return response
  })
  .use(folder)
  .use(file)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
