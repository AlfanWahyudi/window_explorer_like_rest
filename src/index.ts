import { Elysia } from "elysia";
import { file } from "./modules/file";
import { folder } from "./modules/folder";
import { ErrorResponse } from "./models/response-message.model";

const app = new Elysia({ prefix: '/api' })
  .onError(({ error, code }) => {
    console.error(error)
    
    //TODO: handle error message for each code or type
    /* 
      -- bad error message --
      - validation
      {
        "success": false,
        "error": "Error: {\n  \"type\": \"validation\",\n  \"on\": \"body\",\n  \"summary\": \"Expected property 'name' to be string but found: 65\",\n  \"property\": \"/name\",\n  \"message\": \"Expected string\",\n  \"expected\": {\n    \"name\": \"\"\n  },\n  \"found\": {\n    \"name\": 65\n  },\n  \"errors\": [\n    {\n      \"type\": 54,\n      \"schema\": {\n        \"type\": \"string\"\n      },\n      \"path\": \"/name\",\n      \"value\": 65,\n      \"message\": \"Expected string\",\n      \"errors\": [],\n      \"summary\": \"Expected property 'name' to be string but found: 65\"\n    }\n  ]\n}"
      }
    */
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
