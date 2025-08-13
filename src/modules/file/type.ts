import { Folder } from "../folder/type";

export interface File {
  id: number;
  folder?: Folder;
  name: string;
  extension: string;
  sizeKilobyte: number;
  createdAt: Date;
  updatedAt: Date;
}