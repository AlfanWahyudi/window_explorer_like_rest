/* 

import { sql } from "bun";
import { Folder, folderModel } from "./model";
import SchemaHelper from "../../utils/schema-helper";

abstract class FolderRepository {
  static async create(folder: Folder): Promise<Folder> {
    const [data] = await sql`
      INSERT INTO folders (name)
      VALUES (${folder.name})
      RETURNING *
    `
    return SchemaHelper.parse(folderModel, data)
  }

  static async get(id: number): Promise<Folder> {
    const [data] = await sql`SELECT * FROM folders where id = ${id}`
    return SchemaHelper.parse(folderModel, data)
  }

  // static async update(id:number, folder: Folder): Promise<Folder> {
  //   return null
  // }

  static async delete(id: number): Promise<boolean> {
    await sql`delete from folders where id = ${id}`
    return true
  }
    
}

export default FolderRepository

*/

