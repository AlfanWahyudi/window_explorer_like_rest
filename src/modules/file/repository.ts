import { sql } from "bun";
import { fileModel, FileModel } from "./model";
import SchemaHelper from "../../utils/schema-helper";

import path from "path";
import fs from "fs/promises";

abstract class FileRepository {
  //TODO
  static async create(file: File, folderPath: string, folderId: number): Promise<FileModel> {
    try {
      const result = await sql.begin(async tx => {
        const data: FileModel = {
          folder_id: folderId,
          name: file.name,
          path: folderPath,
          extension: file.type,
          size_kilobyte: file.size / 1024,
        }

        // await tx`
        //   INSERT INTO files (folder_id, name, path, extension, size_kilobyte, created_at, updated_at)
        //   VALUES (${data.folder_id}, ${data.name}, ${data.path}, ${data.extension}, ${data.size_kilobyte}, NOW(), NOW())
        // `

        // const filePath = path.join('', data.name)
        // const buffer = Buffer.from(await file.arrayBuffer())
        // await fs.writeFile(filePath, buffer)

        return data
      })

      return SchemaHelper.parse(fileModel, result)

    } catch (error) {
      throw error
    }
  }
}

export default FileRepository