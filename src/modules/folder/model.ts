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

const folderAsTreeModel = t.Object({
  id: t.Optional(t.Number()),
  name: t.String(),
  created_at: t.Optional(t.Date()),
  updated_at: t.Optional(t.Date()),
  child: t.Array(t.Any()),
})

type Folder = typeof folderModel.static
type FolderAsTreeModel = typeof folderAsTreeModel.static

export {
  folderModel,
  Folder,
  folderAsTreeModel,
  FolderAsTreeModel
}
