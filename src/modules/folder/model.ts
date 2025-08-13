import { t } from "elysia";

const createFolderBody = t.Object({
  name: t.String(),
  asRoot: t.Boolean(),
  parentFolderId: t.Number(),
})

const renameFolderBody = t.Object({
  newName: t.String(),
})

export {
  createFolderBody,
  renameFolderBody
}