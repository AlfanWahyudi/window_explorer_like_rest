import { t } from "elysia";

const fileModel = t.Object({
  id: t.Optional(t.Number()),
  folder_id: t.Number(),
  name: t.String(),
  path: t.String(),
  extension: t.String(),
  size_kilobyte: t.Number(),
  created_at: t.Optional(t.Date()),
  updated_at: t.Optional(t.Date()),
})

type FileModel = typeof fileModel.static

export {
  fileModel,
  FileModel
}