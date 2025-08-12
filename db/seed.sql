/* 
  ---- DELETE ALL DATA FROM ENTIRE TABLES ------
*/
DELETE FROM folders;
DELETE FROM parent_folders;
DELETE FROM child_folders;
DELETE FROM files;


-- folders table ---
ALTER SEQUENCE folders_id_seq RESTART WITH 1;

INSERT INTO folders (name, created_at, updated_at) VALUES ('Documents', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Pictures', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Music', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Videos', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('School', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Middle School', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('High School', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Files', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Holiday', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Study', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Jazz', '2025-08-01 15:50:01', '2025-08-01 15:50:01');
INSERT INTO folders (name, created_at, updated_at) VALUES ('Rock', '2025-08-01 15:50:01', '2025-08-01 15:50:01');


-- parent_folders table ---
INSERT INTO parent_folders (id, as_root) VALUES (1, true);
INSERT INTO parent_folders (id, as_root) VALUES (2, true);
INSERT INTO parent_folders (id, as_root) VALUES (3, true);
INSERT INTO parent_folders (id, as_root) VALUES (4, true);
INSERT INTO parent_folders (id, as_root) VALUES (5, true);


-- child_folders table ---
INSERT INTO child_folders (id, parent_folder_id) VALUES (5, 1);
INSERT INTO child_folders (id, parent_folder_id) VALUES (6, 5);
INSERT INTO child_folders (id, parent_folder_id) VALUES (7, 5);
INSERT INTO child_folders (id, parent_folder_id) VALUES (8, 1);
INSERT INTO child_folders (id, parent_folder_id) VALUES (9, 2);
INSERT INTO child_folders (id, parent_folder_id) VALUES (10, 2);
INSERT INTO child_folders (id, parent_folder_id) VALUES (11, 3);
INSERT INTO child_folders (id, parent_folder_id) VALUES (12, 3);
