import Elysia, { t } from "elysia";
import { createFolderBody } from "./model";

export const folder = new Elysia({ prefix: '/folder' })
  .post(
    '/', 
    ({ body, status }) => {
      if (body.asRoot && body.parentFolderId > 0) 
        return status(404, {
          message: `property parentFolderId tidak boleh lebih dari 0 jika asRoot true`
        })

      if (!body.asRoot && body.parentFolderId <= 0) 
        return status(404, {
          message: `property parentFolderId tidak boleh kurang dari sama dengan 0 jika as_root false`
        })

      // save data with services

      return body
    },
    {
      body: createFolderBody
    },
  )
  .delete('/:id', ({ params: { id }}) => {})
  .get('/list/root', () => {})
  .get('/list/subs-and-files', () => {})
  .get('/list/as-tree', () => {})
  .put('/:id/rename', ({ params: { id }, body: { name }}) => {})
