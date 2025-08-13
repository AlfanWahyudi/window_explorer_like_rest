import { NotFoundError } from "elysia"
import { Folder, FolderAsTreeModel } from "./model"
import FolderRepository from "./repository"

abstract class FolderService {
  static async save(name: string, asRoot: boolean, parentFolderId: number): Promise<Folder> {
    const folder: Folder = {
      name,
      as_root: asRoot,
      parent_folder_id: parentFolderId
    }

    return await FolderRepository.create(folder)
  }

  static async remove(id: number): Promise<Boolean> {
    const data = await FolderRepository.findById(id)

    if (!data) throw new NotFoundError('Folder id tidak ditemukan')

    return await FolderRepository.delete(id)
  }

  static async getRootFolders() {
    return await FolderRepository.findRootAll()
  }

  static getSubFoldersAndFiles(parentFolderId: number) {
    /*

      -- alur code

      - query select all child_folders by parentFolderId
      - query select all files by parentFolderId

      - merging data into one list
      - result = []



      - return {
        folders: [{ id: 1, name: 'folder 1', created_at: '2025-08-01 15:50:01.000', updated_at: '2025-08-01 15:50:01.000' }],
        files: [{ id: 1, file_name: 'folder_1', extension: 'png', size_kilobyte: 1000 created_at: '2025-08-01 15:50:01.000', updated_at: '2025-08-01 15:50:01.000' }]
      } 200
    */

  }

  private static async collectSubFolders(parentFolderId: number, data: Array<Folder>): Promise<Array<FolderAsTreeModel>> {
    let result: FolderAsTreeModel[] = []

    const children = data.filter(folder => !folder.as_root && folder.parent_folder_id == parentFolderId)
    for (const child of children) {
      const childSubFolder: FolderAsTreeModel = {
        id: child.id,
        name: child.name,
        created_at: child.created_at,
        updated_at: child.updated_at,
        child: []
      }

      if (child.as_parent) {
        const subFolder = await this.collectSubFolders(child.id ?? 0, data)
        childSubFolder.child = [...subFolder]
      }

      result = [...result, childSubFolder]
    }

    return result
  }

  static async getAllFoldersAsTree(): Promise<Array<FolderAsTreeModel>> {
    const result: Array<FolderAsTreeModel> = []
    const data = await FolderRepository.findAllAsTreeFormat()
    
    const rootFolders = await FolderRepository.findRootAll();
    for (let root of rootFolders) {
      const found = data.find((folder) => folder.id === root.id)

      if (found) {
        const rootFolderTree: FolderAsTreeModel = {
          id: found.id,
          name: found.name,
          created_at: found.created_at,
          updated_at: found.updated_at,
          child: []
        }

        const subFolder = await this.collectSubFolders(rootFolderTree.id ?? 0, data) 
        if (subFolder.length > 0) {
          rootFolderTree.child.push(...subFolder)
        }

        result.push(rootFolderTree)
      }
    }

    return result
  }

  static async rename(id: number, name: string): Promise<Folder> {
    const data = await FolderRepository.findById(id)

    if (!data) throw new NotFoundError('Folder id tidak ditemukan')

    return await FolderRepository.rename(id, name)
  }

  static movePath() {
    //TODO
  }

  static searchFoldersAndFiles() {
    //TODO
  }
}

export default FolderService