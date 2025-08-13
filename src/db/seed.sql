/* 
  ---- DELETE ALL DATA FROM ENTIRE TABLES ------
*/
DELETE FROM folders;
DELETE FROM parent_folders;
DELETE FROM child_folders;
DELETE FROM files;
DELETE FROM folder_and_file;


-- folders table ---
ALTER SEQUENCE folders_id_seq RESTART WITH 1;

INSERT INTO folders (name) VALUES ('Root Folder 1'); -- 1 
INSERT INTO folders (name) VALUES ('Root Folder 2'); -- 2
INSERT INTO folders (name) VALUES ('Root Folder 3'); -- 3
INSERT INTO folders (name) VALUES ('Root Folder 4'); -- 4
INSERT INTO folders (name) VALUES ('Folder (1.1)'); -- 5
INSERT INTO folders (name) VALUES ('Folder (1.2)'); -- 6
INSERT INTO folders (name) VALUES ('Folder (2.1)'); -- 7
INSERT INTO folders (name) VALUES ('Folder (2.1.1)'); -- 8
INSERT INTO folders (name) VALUES ('Folder (3.1)'); -- 9
INSERT INTO folders (name) VALUES ('Folder (4.1)'); -- 10
INSERT INTO folders (name) VALUES ('Folder (4.2)'); -- 11
INSERT INTO folders (name) VALUES ('Folder (4.2.1)'); -- 12


--- folder_and_file table ---
INSERT INTO folder_and_file (id, name, created_at, updated_at, source_table)
SELECT id, name, created_at, updated_at, 'folders_table'
FROM folders;

-- parent_folders table ---
INSERT INTO parent_folders (id, as_root) VALUES (1, true);
INSERT INTO parent_folders (id, as_root) VALUES (2, true);
INSERT INTO parent_folders (id, as_root) VALUES (3, true);
INSERT INTO parent_folders (id, as_root) VALUES (4, true);
INSERT INTO parent_folders (id, as_root) VALUES (7, false);
INSERT INTO parent_folders (id, as_root) VALUES (11, true);


-- child_folders table ---
INSERT INTO child_folders (id, parent_folder_id) VALUES (5, 1);
INSERT INTO child_folders (id, parent_folder_id) VALUES (6, 1);
INSERT INTO child_folders (id, parent_folder_id) VALUES (7, 2);
INSERT INTO child_folders (id, parent_folder_id) VALUES (8, 7);
INSERT INTO child_folders (id, parent_folder_id) VALUES (9, 3);
INSERT INTO child_folders (id, parent_folder_id) VALUES (10, 4);
INSERT INTO child_folders (id, parent_folder_id) VALUES (11, 4);
INSERT INTO child_folders (id, parent_folder_id) VALUES (12, 11);
