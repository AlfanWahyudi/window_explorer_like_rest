DROP DATABASE "window-explorer";

CREATE DATABASE "window-explorer";
DROP TABLE IF EXISTS folders;
CREATE TABLE  folders
(
  id serial,
  name varchar(255) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key (id)
);

DROP TABLE IF EXISTS parent_folders;
CREATE TABLE  parent_folders
(
  id int references folders(id) on delete cascade,
  as_root boolean not null default false,
  primary key (id)
);

DROP TABLE IF EXISTS child_folders;
CREATE TABLE  child_folders
(
  id int references folders(id) on delete cascade,
  parent_folder_id int references parent_folders (id) on delete cascade,
  primary key (id)
);

DROP TABLE IF EXISTS files;
CREATE TABLE files
(
  id serial,
  folder_id int references folders (id) on delete cascade,
  name text not null,
  path text not null,
  extension varchar(15) not null,
  size_kilobyte bigint not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key (id)
);

DROP TABLE IF EXISTS folder_and_file;
CREATE TABLE  folder_and_file 
(
  id int not null,
  name text,
  path text,
  extension varchar(15),
  size_kilobyte bigint,
  created_at TIMESTAMP not null,
  updated_at TIMESTAMP not null,
  source_table text
);
CREATE INDEX idx_folder_and_file_id ON folder_and_file (id);
CREATE INDEX idx_folder_and_file_created_at ON folder_and_file (created_at);
CREATE INDEX idx_folder_and_file_updated_at ON folder_and_file (updated_at);
