CREATE TABLE `expiration_date` (
  `id` int(11) NOT NULL,
  `expiration_date` datetime DEFAULT NULL,
  KEY `expiration_id_idx` (`id`),
  CONSTRAINT `expiration_id` FOREIGN KEY (`id`) REFERENCES `timestamp` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `false_directory` (
  `id` int(11) NOT NULL,
  `fake_path` varchar(45) NOT NULL,
  UNIQUE KEY `fake_path_UNIQUE` (`fake_path`),
  KEY `upload_id_idx` (`id`),
  CONSTRAINT `upload_id_fake` FOREIGN KEY (`id`) REFERENCES `timestamp` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `file_metadata` (
  `id` int(11) NOT NULL,
  `file_type` varchar(10) DEFAULT NULL,
  `file_size` int(255) DEFAULT NULL,
  KEY `id_descriptor_idx` (`id`),
  CONSTRAINT `id_descriptor` FOREIGN KEY (`id`) REFERENCES `timestamp` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `timestamp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hour` int(11) DEFAULT NULL,
  `minute` int(11) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `second` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uploadnumber_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE `true_directory` (
  `real_path` varchar(45) NOT NULL,
  `id` int(11) NOT NULL,
  UNIQUE KEY `real_path_UNIQUE` (`real_path`),
  KEY `upload_id_idx` (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `timestamp` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;