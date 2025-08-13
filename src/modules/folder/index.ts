import Elysia, { t } from "elysia";
import { Folder, folderModel } from "./model";
import FolderService from "./service";

export const folder = new Elysia({ prefix: '/folder' })
  .post(
    '/', 
    async ({ body, status }) => {
      const asRoot = body.as_root ?? false
      const parentFolderId = body.parent_folder_id ?? 0

      if (asRoot && parentFolderId > 0) 
        return status(400) 

      if (!asRoot && parentFolderId <= 0)
        return status(400)

      const data = await FolderService.save(body.name, asRoot, parentFolderId)

      return data
    },
    {
      body: folderModel
    },
  )
  .delete('/:id', ({ params: { id }}) => {})
  .get('/list/root', () => {})
  .get('/list/subs-and-files', () => {})
  .get('/list/as-tree', () => {})
  .put('/:id/rename', ({ params: { id }, body: { name }}) => {})
