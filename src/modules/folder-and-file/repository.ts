import { sql } from "bun";
import { folderAndFileModel, FolderAndFileModel } from "./model";
import SchemaHelper from "../../utils/schema-helper";

abstract class FolderAndFileRepository {
  static async findAllByFolderId(parentFolderId: number): Promise<Array<FolderAndFileModel>> {
    const data = await sql`
      SELECT * FROM folder_and_file 
      WHERE parent_folder_id = ${parentFolderId}
      ORDER BY created_at asc
    `
    return SchemaHelper.parseAsArray(folderAndFileModel, data)
  }

}

export default FolderAndFileRepository