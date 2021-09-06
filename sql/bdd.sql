DROP DATABASE IF EXISTS `reversetapes`;

CREATE DATABASE IF NOT EXISTS `reversetapes` CHARACTER SET 'utf8';

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `first_name` VARCHAR(25) NOT NULL,
    `email` TEXT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = 'InnoDB';

DROP TABLE IF EXISTS `picture`; 
CREATE TABLE IF NOT EXISTS `picture` (
  `picture_path` TEXT NOT NULL,
    `file_name` VARCHAR(30) NOT NULL,
    `date_id` INT NOT NULL,
    FOREIGN KEY (`date_id`) REFERENCES `date`(`id`),
    PRIMARY KEY(`date_id`)
)ENGINE = InnoDB;

DROP TABLE IF EXISTS `artist`; 
CREATE TABLE IF NOT EXISTS `artist` (
    `user_id` INT NOT NULL,
    `first_name` VARCHAR(25) NULL,
    `name` VARCHAR(30) NULL,
    `description` TEXT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
    PRIMARY KEY(`user_id`)
) ENGINE = 'InnoDB';    

DROP TABLE IF EXISTS `date`; 
CREATE TABLE IF NOT EXISTS `date` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    `last_time_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`)
) ENGINE = 'InnoDB';    

DROP TABLE IF EXISTS `product`; 
CREATE TABLE IF NOT EXISTS `product` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `type` INT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `description` TEXT NULL,
    `date_id` INT NOT NULL,
    `color` VARCHAR(20) NOT NULL,
    `size` INT(2) NOT NULL,
    `come_to_get_it` BOOLEAN NOT NULL DEFAULT false,
    `price_ttc` FLOAT NOT NULL,
    `price_ht` FLOAT NOT NULL,
    `visible` BOOLEAN NOT NULL DEFAULT false,
    `quantity` INT NOT NULL,
    FOREIGN KEY (`date_id`) REFERENCES `date`(`id`),
    PRIMARY KEY(`id`)
) ENGINE = 'InnoDB';    



-- PROCEDURE
-- path
-- file_name
-- date_id


DROP PROCEDURE IF EXISTS `add_picture`;
DELIMITER $$
CREATE PROCEDURE `add_picture`(
    IN picture_path TEXT,
    IN file_name VARCHAR(30)
) 
    BEGIN
        INSERT INTO `date` VALUES();
        SELECT @date_id := MAX(`id`) FROM `date`;
        INSERT INTO `picture`  (`picture_path`,`file_name`,`date_id`) VALUES (picture_path,file_name,@date_id);
    END $$
DELIMITER ;

CALL `picture`(2,5,0);