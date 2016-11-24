CREATE TABLE fileshare_system.timestamp (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  timestamp DATETIME NOT NULL,
  hour INT NOT NULL,
  minute INT NOT NULL,
  second INT NOT NULL,
  month INT NOT NULL,
  day INT NOT NULL,
  year INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX `timestamp_UNIQUE` (id ASC));

CREATE TABLE fileshare_system.true_directory (
  real_path VARCHAR(45) NOT NULL,
  id INT NOT NULL,
  UNIQUE INDEX realpath_UNIQUE (real_path ASC),
  INDEX true_directory_id_idx (id, ASC),
  CONSTRAINT true_directory_id
    FOREIGN KEY (id)
    REFERENCES fileshare_system.timestamp(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE fileshare_system.false_directory (
  id INT NOT NULL,
  fake_path VARCHAR(10) NOT NULL,
  INDEX `false_directory_id_idx` (id ASC),
  CONSTRAINT false_directory_id_fake
    FOREIGN KEY (id)
    REFERENCES fileshare_system.timestamp (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE fileshare_system.file_metadata (
  id INT NOT NULL,
  file_type VARCHAR(10) NOT NULL,
  file_size INT NOT NULL,
  INDEX file_metadata_id_idx (id ASC),
  CONSTRAINT file_metadata_id
    FOREIGN KEY (id)
    REFERENCES fileshare_system.timestamp (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE );

CREATE TABLE fileshare_system.expiration_date (
  id INT NOT NULL,
  expiration_date DATETIME NOT NULL,
  INDEX expiration_date_idx (id ASC),
  CONSTRAINT expiration_date_id
    FOREIGN KEY (id)
    REFERENCES fileshare_system.timestamp (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

