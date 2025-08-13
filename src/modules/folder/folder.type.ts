import { File } from "../file/file.type";

export interface Folder {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  asChild?: boolean;
  asParent?: boolean;
  parentFolderId?: number;
  asRoot?: boolean;  
  files?: Array<File>;
}
