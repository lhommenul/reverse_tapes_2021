DROP DATABASE IF EXISTS `reversetapes`;

CREATE DATABASE IF NOT EXISTS `reversetapes` CHARACTER SET 'utf8';

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
    INT `id` PRIMARY KEY NOT NULL AUTO_INCREMENT,
    VARCHAR(30) `name` NOT NULL,
    VARCHAR(25) `first_name` NOT NULL,
    VARCHAR(45) `email` NOT NULL
) ENGINE = 'InnoDB';


DROP TABLE IF EXISTS `picture`; 
CREATE TABLE IF NOT EXISTS `picture` (
    INT `id` PRIMARY KEY NOT NULL AUTO_INCREMENT,
    VARCHAR(45) `path` NOT NULL
    VARCHAR(30) `file_name` NOT NULL,
    INT `date_id` NOT NULL,
    FOREIGN KEY (`date_id`) REFERENCES `date`(`id`)
) ENGINE = 'InnoDB';

DROP TABLE IF EXISTS `artist`; 
CREATE TABLE IF NOT EXISTS `artist` (
    INT `user_id` PRIMARY KEY NOT NULL,
    VARCHAR(25) `first_name` NULL,
    VARCHAR(30) `name` NULL,
    TEXT `description` NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
) ENGINE = 'InnoDB';    

DROP TABLE IF EXISTS `date`; 
CREATE TABLE IF NOT EXISTS `date` (
    INT `id` PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TIMESTAMP `creation_date` NOT NULL AUTO_INCREMENT CURRENT_TIMESTAMP(),
    TIMESTAMP `last_time_updated` NOT NULL
) ENGINE = 'InnoDB';    

DROP TABLE IF EXISTS `product`; 
CREATE TABLE IF NOT EXISTS `product` (
    INT `id` PRIMARY KEY NOT NULL AUTO_INCREMENT,
    VARCHAR(25) `type` NOT NULL,
    VARCHAR(30) `name` NOT NULL,
    TEXT `description` NULL,
    INT `date_id` NOT NULL,
    VARCHAR(20) `color` NOT NULL,
    INT(2) `size` NOT NULL,
    BOOLEAN `come_to_get_it` NOT NULL DEFAULT false,
    FLOAT `price_ttc` NOT NULL,
    FLOAT `price_ht` NOT NULL,
    BOOLEAN `visible` NOT NULL DEFAULT false,
    INT `quantity` NOT NULL,
    FOREIGN KEY (`date_id`) REFERENCES `date`(`id`)
) ENGINE = 'InnoDB';    