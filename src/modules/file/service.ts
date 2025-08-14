import FolderTreeUtil from "../../utils/foler-tree.util";
import FolderService from "../folder/service";
import { FileModel } from "./model";
import FileRepository from "./repository";

abstract class FileService {

  static async save(file: File, folderId: number): Promise<FileModel> {
    const folderTree = await FolderService.getAllFoldersAsTree()
    const folderPath = FolderTreeUtil.getPathFolderId(folderTree, folderId)

    return await FileRepository.create(file, folderPath, folderId)
  }

  static remove(id: number) {
    //TODO
  }

  static update(id: number, file: any) {
    //TODO
  }

  static rename(id: number, newName: string) {
    //TODO
  }

  static getAllByFolderId(folderId: number) {
    //TODO
  }
}

export default FileService