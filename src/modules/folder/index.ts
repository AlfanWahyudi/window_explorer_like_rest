import Elysia, { t } from "elysia";
import { Folder, folderModel } from "./model";
import FolderService from "./service";
import { errorResponse, successResponse } from "../../models/response-message.model";

export const folder = new Elysia({ prefix: '/folder' })
  .post(
    '/', 
    async ({ body, status }) => {
      const asRoot = body.as_root ?? false
      const parentFolderId = body.parent_folder_id ?? 0

      if (asRoot && parentFolderId > 0) 
        return status(400, {
          success: false,
          error: 'Property parent_folder_id harus lebih dari 1, jika as_root sama dengan true',
        }) 

      if (!asRoot && parentFolderId <= 0)
        return status(400, {
          success: false,
          error: 'Property parent_folder_id tidak boleh digunakan, jika as_root sama dengan false',
        })

      const data = await FolderService.save(body.name, asRoot, parentFolderId)

      return {
        success: true,
        message: 'Folder berhasil ditambahkan',
        data: data
      }
    },
    {
      body: folderModel,
      response: {
        400: errorResponse,
        200: successResponse
      }
    },
  )
  .delete(
    '/:id', 
    async ({ params: { id }, status}) => {
      const isSuccess = await FolderService.remove(id)

      if (!isSuccess)
        return status(500, {
          success: false,
          error: `Gagal menghapus folder, id: ${id}`,
        })

      return {
        success: true,
        message: `Berhasil menghapus folder, id: ${id}`,
        data: null
      }
    },
    {
      params: t.Object({
        id: t.Number()
      }),
      response: {
        500: errorResponse,
        200: successResponse
      }
    }
  )
  .get('/list/root', () => {})
  .get('/list/subs-and-files', () => {})
  .get('/list/as-tree', () => {})
  .put('/:id/rename', ({ params: { id }, body: { name }}) => {})
