import { FolderAsTreeModel } from "../modules/folder/model"

abstract class FolderTreeUtil {
  static getPathFolderId(data: Array<FolderAsTreeModel>, folderId: number): string {
    let folderPath = ''

    for(const folder of data) {
      const currPath = `/${folder.id}`

      if (folder.id === folderId) {
        return currPath
      } else {
        const child = [...folder.child]
        if (child.length > 0) {
          const nextPath = this.getPathFolderId(child, folderId)
          
          if (nextPath !== '') {
            folderPath += `${currPath}${nextPath}`
          }
        }
      }
    }

    return folderPath
  }
}

export default FolderTreeUtil