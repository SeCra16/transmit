SET FOREIGN_KEY_CHECKS = 0; -- disable a foreign keys check
SET AUTOCOMMIT = 0; -- disable autocommit
START TRANSACTION; -- begin transaction

DELETE FROM expiration_date;
ALTER TABLE expiration_date AUTO_INCREMENT = 1;

DELETE FROM false_directory;
ALTER TABLE false_directory AUTO_INCREMENT = 1;

DELETE FROM file_metadata;
ALTER TABLE file_metadata AUTO_INCREMENT = 1;

DELETE FROM timestamp;
ALTER TABLE timestamp AUTO_INCREMENT = 1;

DELETE FROM true_directory;
ALTER TABLE true_directory AUTO_INCREMENT = 1;

SET FOREIGN_KEY_CHECKS = 1; -- enable a foreign keys check
COMMIT;  -- make a commit
SET AUTOCOMMIT = 1 ;