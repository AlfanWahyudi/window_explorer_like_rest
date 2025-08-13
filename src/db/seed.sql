/* 
  ---- DELETE ALL DATA FROM ENTIRE TABLES ------
*/
DELETE FROM folders;
DELETE FROM parent_folders;
DELETE FROM child_folders;
DELETE FROM files;


-- folders table ---
ALTER SEQUENCE folders_id_seq RESTART WITH 1;

INSERT INTO folders (name) VALUES ('Documents');
INSERT INTO folders (name) VALUES ('Pictures');
INSERT INTO folders (name) VALUES ('Music');
INSERT INTO folders (name) VALUES ('Videos');
INSERT INTO folders (name) VALUES ('School');
INSERT INTO folders (name) VALUES ('Middle School');
INSERT INTO folders (name) VALUES ('High School');
INSERT INTO folders (name) VALUES ('Files');
INSERT INTO folders (name) VALUES ('Holiday');
INSERT INTO folders (name) VALUES ('Study');
INSERT INTO folders (name) VALUES ('Jazz');
INSERT INTO folders (name) VALUES ('Rock');


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
