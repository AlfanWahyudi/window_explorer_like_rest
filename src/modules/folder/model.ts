import { t } from "elysia";

const folderModel = t.Object({
  name: t.String(),
  id: t.Optional(t.Number()),
  created_at: t.Optional(t.Date()),
  updated_at: t.Optional(t.Date()),
  as_child: t.Optional(t.Boolean()),
  as_parent: t.Optional(t.Boolean()),
  parent_folder_id: t.Optional(t.Number()),
  as_root: t.Optional(t.Boolean()),
  files: t.Optional(t.Array(t.String())),
})

const renameFolderModel = t.Object({
  newName: t.String(),
})

type Folder = typeof folderModel.static
type RenameFolder = typeof renameFolderModel.static

export {
  folderModel,
  renameFolderModel,
  Folder,
  RenameFolder
}
