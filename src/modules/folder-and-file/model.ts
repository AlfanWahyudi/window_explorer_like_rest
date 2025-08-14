import { t } from "elysia";

const folderAndFileModel = t.Object({
  id: t.Number(),
  parent_folder_id: t.Number(),
  name: t.String(),
  source_table: t.String(),
  created_at: t.Date(),
  updated_at: t.Date(),
  path: t.Optional(t.Any()),
  extension: t.Optional(t.Any()),
  size_kilobyte: t.Optional(t.Any()),
})

type FolderAndFileModel = typeof folderAndFileModel.static

export {
  folderAndFileModel,
  FolderAndFileModel
}