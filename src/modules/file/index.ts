import Elysia from "elysia";

export const file = new Elysia({ prefix: 'file' })
  .get('', () => {})