import { NotFoundError } from "elysia"
import { Folder } from "./model"
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

  static getAllFoldersAsTree() {
    /*
      -- alur code

      - query to get all folder data

      - mapping data

      [
        {
          id: 1,
          name: 'folder 1',
          created_at: '2025-08-01 15:50:01.000',
          updated_at: '2025-08-01 15:50:01.000',
          child: [
            {
              id: 2,
              name: 'folder 2',
              created_at: '2025-08-01 15:50:01.000',
              updated_at: '2025-08-01 15:50:01.000',
            },
            {
              name: 'folder 3'
            },
            {
              name: 'folder 4'
            }
          ]
        },
        {
          name: 'folder 5'
        },
        {
          id: 6,
          name: 'folder 6',
          created_at: '2025-08-01 15:50:01.000',
          updated_at: '2025-08-01 15:50:01.000',
        }
      ]

      - return folder_data 200
    */
  }

  static rename(folderId: number, newName: string) {
    /*

      -- alur code

      - check if folderId is exist 
      - if id not found return NotFound 404

      - query update folder name by id

      - return folder_data 200
    */
  }

  static movePath() {
    //TODO
  }

  static searchFoldersAndFiles() {
    //TODO
  }
}

export default FolderService