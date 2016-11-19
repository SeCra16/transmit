# This is the primary identifying table
CREATE TABLE `fileshare_system`.`file_statistics` (
  `upload_id` INT NOT NULL AUTO_INCREMENT,
  `timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`upload_id`),
  UNIQUE INDEX `uploadnumber_UNIQUE` (`upload_id` ASC));


# real path
CREATE TABLE `fileshare_system`.`true_directory` (
  `real_path` VARCHAR(45) NOT NULL,
  `upload_id` INT NOT NULL,
  UNIQUE INDEX `real_path_UNIQUE` (`real_path` ASC),
  INDEX `upload_id_idx` (`upload_id` ASC),
  CONSTRAINT `upload_id`
    FOREIGN KEY (`upload_id`)
    REFERENCES `fileshare_system`.`file_statistics` (`upload_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


# fake path
CREATE TABLE `fileshare_system`.`false_directory` (
  `id` INT(11) NOT NULL,
  `fake_path` VARCHAR(45) NOT NULL,
  INDEX `upload_id_idx` (`upload_id` ASC),
  UNIQUE INDEX `fake_path_UNIQUE` (`fake_path` ASC),
  CONSTRAINT `upload_id_fake`
    FOREIGN KEY (`upload_id`)
    REFERENCES `fileshare_system`.`file_statistics` (`upload_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

# not sure last line here is necessary, but when generating MySQL included it for
# this script and not previous, when both use the same ENGINE.


# File Description
CREATE TABLE `fileshare_system`.`file_description` (
  `upload_id` INT NOT NULL,
  `file_descriptioncol` VARCHAR(200) NULL,
  INDEX `id_descriptor_idx` (`upload_id` ASC),
  CONSTRAINT `id_descriptor`
    FOREIGN KEY (`upload_id`)
    REFERENCES `fileshare_system`.`file_statistics` (`upload_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


# Expiration Date
CREATE TABLE `fileshare_system`.`expiration_date` (
  `upload_id` INT NOT NULL,
  `expiration_date` DATETIME NULL,
  INDEX `expiration_id_idx` (`upload_id` ASC),
  CONSTRAINT `expiration_id`
    FOREIGN KEY (`upload_id`)
    REFERENCES `fileshare_system`.`file_statistics` (`upload_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
# Tried to get it to automatically load a date 30 minutes later, but it looks like we will
# have to do that VIA node


