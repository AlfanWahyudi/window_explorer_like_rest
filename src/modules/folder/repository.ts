import { sql } from "bun";
import { Folder, folderModel } from "./model";
import SchemaHelper from "../../utils/schema-helper";

abstract class FolderRepository {
  static async create(folder: Folder) {
    try {
      const result = await sql.begin(async tx => {
        const folderObj: Folder = {
          name: folder.name,
          as_root: false,
          parent_folder_id: folder.parent_folder_id,
          as_parent: false,
          as_child: false
        }

        const [data] = await tx`
          INSERT INTO folders (name)
          VALUES (${folder.name})
          RETURNING *
        `
        folderObj.id = data.id
        folderObj.created_at = data.created_at
        folderObj.updated_at = data.updated_at
  
        if (folder?.as_root && folder?.parent_folder_id !== undefined && folder.parent_folder_id > 0) {
          await tx`
            INSERT INTO parent_folders (id, as_root) 
            VALUES (${data.id}, ${folder.as_root})
          `
          folderObj.as_parent = true
          folderObj.as_root = true
        } 
        
        if (!folder?.as_root && folder?.parent_folder_id !== undefined && folder.parent_folder_id > 0) {  
          folderObj.as_child = true

          const parentFolder = await tx`
            SELECT * from parent_folders 
            WHERE id = ${folder.parent_folder_id}
          `.values()

          if (parentFolder.length === 0) {
            await tx`INSERT INTO parent_folders (id, as_root) VALUES (${folder.parent_folder_id}, false)`
          }

          const childFolder = await tx`
            select * from child_folders cf 
            join folders f on cf.id = f.id
            where cf.parent_folder_id = ${folder.parent_folder_id} and f.name = ${folder.name}
          `.values()

          if (childFolder.length > 0) {
            throw new Error("Duplicate folder name is not allowed on the same parent.")
          }

          await tx`
            INSERT INTO child_folders (id, parent_folder_id)
            VALUES (${data.id}, ${folder.parent_folder_id})
          `
        }

        return folderObj
      })

      return result

    } catch (error) {
      throw error
    }

  }

  static async findById(id: number): Promise<Folder | null> {
    const [data] = await sql`SELECT * FROM folders where id = ${id}`

    return data !== undefined
      ? SchemaHelper.parse(folderModel, data)
      : null
  }

  // static async update(id:number, folder: Folder): Promise<Folder> {
  //   return null
  // }

  static async findRootAll(): Promise<Array<Folder>> {
    const data = await sql`
      select 
        f.id,
        f.name,
        pf.as_root,
        f.created_at,
        f.updated_at 
      from folders f 
      join parent_folders pf on f.id = pf.id 
      where pf.as_root = true
    `
    return SchemaHelper.parseAsArray(folderModel, data)
  }

  static async delete(id: number): Promise<boolean> {
    await sql`delete from folders where id = ${id}`
    
    return true
  }
}

export default FolderRepository