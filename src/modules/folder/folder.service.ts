
abstract class FolderService {
  static save(name: string, asRoot: boolean, parentFolderId: number) {
    /*
      -- alur code

      - start transaction
      - query insert to folders table first, returned data
      - if asRoot then query insert folder data to parent_folder table
      - if not 
        - query insert data to child_folder
        - if folder_id is not in parent_folders then
          - query insert that folder_id with as_root false
      - end transaction

      - return folder_data status 201
    */
  }

  static remove(folderId: number) {
    /*
      -- alur code

      - check id on folders table
      - if id not found return NotFound 404
      - delete query folder data by id

      - return folder_data 200
    */
  }

  static getRootFolders() {
    /*

      -- alur code

      - query select all from parent_folders by as_root true

      - return root_folders_data 200
    */
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