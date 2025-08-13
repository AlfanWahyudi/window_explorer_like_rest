DROP DATABASE "window-explorer";

CREATE DATABASE "window-explorer";

CREATE TABLE IF NOT EXISTS folders
(
  id serial,
  name varchar(255) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key (id)
);

CREATE TABLE IF NOT EXISTS parent_folders
(
  id int references folders(id) on delete cascade,
  as_root boolean not null default false,
  primary key (id)
);

CREATE TABLE IF NOT EXISTS child_folders
(
  id int references folders(id) on delete cascade,
  parent_folder_id int references parent_folders (id) on delete cascade,
  primary key (id)
);

CREATE TABLE IF NOT EXISTS files
(
  id serial,
  folder_id int references folders (id) on delete cascade,
  name varchar(255) not null,
  extension varchar(15) not null,
  size_kilobyte bigint not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key (id)
);

