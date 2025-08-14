import Elysia, { t } from "elysia";
import { errorResponse, successResponse } from "../../models/response-message.model";
import FolderRepository from "../folder/repository";
import FolderTreeUtil from "../../utils/foler-tree.util";
import FolderService from "../folder/service";
import FileService from "./service";

export const file = new Elysia({ prefix: 'file' })
//TODO
	.post(
    '/upload', 
    async ({ body, query, status }) => {
      if (!body.file || !(body.file instanceof File)) {
        return status(400, {
          success: false,
          error: 'No file uploaded'
        })
      }

      const data = await FileService.save(body.file, query.folder_id)
      return {
        success: true,
        message: 'On Progress',
        data
      }
    }, 
    {
      query: t.Object({
        folder_id: t.Number()
      }),
      body: t.Object({
        file: t.File()
      }),
      response: {
        400: errorResponse,
        200: successResponse
      }
	  },
  )
