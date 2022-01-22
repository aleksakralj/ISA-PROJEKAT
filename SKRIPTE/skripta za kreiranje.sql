-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema isa2021_database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema isa2021_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `isa2021_database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `isa2021_database` ;

-- -----------------------------------------------------
-- Table `isa2021_database`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`admins` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventure`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventure` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `max_people` INT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `rules_of_conduct` VARCHAR(255) NULL DEFAULT NULL,
  `terms_of_reservation` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventure_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventure_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventure_free_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventure_free_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventure_history_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventure_history_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 90
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventure_quick_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventure_quick_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventure_subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventure_subscription` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventures` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `max_people` INT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `rules_of_conduct` VARCHAR(255) NULL DEFAULT NULL,
  `terms_of_reservation` VARCHAR(255) NULL DEFAULT NULL,
  `aditional_services` VARCHAR(255) NULL DEFAULT NULL,
  `fishing_equipment` VARCHAR(255) NULL DEFAULT NULL,
  `prices` VARCHAR(255) NULL DEFAULT NULL,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventures_additional_equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventures_additional_equipment` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `does_it_contain` BIT(1) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`adventures_free_terms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`adventures_free_terms` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `end_time` DATETIME NULL DEFAULT NULL,
  `start_time` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`appointment` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `end_date` DATE NULL DEFAULT NULL,
  `number_of_people` INT NULL DEFAULT NULL,
  `price` FLOAT NULL DEFAULT NULL,
  `start_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`client_adventures_complaints`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`client_adventures_complaints` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`client_cottage_complaints`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`client_cottage_complaints` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `client_id` BIGINT NULL DEFAULT NULL,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`client_penalties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`client_penalties` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `penalty_date` DATETIME NULL DEFAULT NULL,
  `user_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`client_points`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`client_points` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `points` INT NULL DEFAULT NULL,
  `user_category` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`client_reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`client_reviews` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email_of_receiver` VARCHAR(255) NULL DEFAULT NULL,
  `email_of_sender` VARCHAR(255) NULL DEFAULT NULL,
  `id_of_receiver` VARCHAR(255) NULL DEFAULT NULL,
  `id_of_sender` VARCHAR(255) NULL DEFAULT NULL,
  `review_message` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`client_ship_complaints`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`client_ship_complaints` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `client_id` BIGINT NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`clients` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `addres` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATETIME NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `passwrod` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `enabled` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`complaints`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`complaints` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `complaint_message` VARCHAR(255) NULL DEFAULT NULL,
  `email_of_complaint_recipient` VARCHAR(255) NULL DEFAULT NULL,
  `email_of_complaint_sender` VARCHAR(255) NULL DEFAULT NULL,
  `on_what` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_additional_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_additional_services` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `air_conditioner_information` VARCHAR(255) NULL DEFAULT NULL,
  `air_conditioner_price` DOUBLE NULL DEFAULT NULL,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `parking_information` VARCHAR(255) NULL DEFAULT NULL,
  `parking_price` DOUBLE NULL DEFAULT NULL,
  `pet_bed_information` VARCHAR(255) NULL DEFAULT NULL,
  `pet_bed_price` DOUBLE NULL DEFAULT NULL,
  `wifi_information` VARCHAR(255) NULL DEFAULT NULL,
  `wifi_price` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_free_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_free_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_history_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_history_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_owners` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_quick_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_quick_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_rooms` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `is_free` BIT(1) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `number_of_beds` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottage_subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottage_subscription` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`cottages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`cottages` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `number_of_rooms` INT NULL DEFAULT NULL,
  `price_list` VARCHAR(255) NULL DEFAULT NULL,
  `rating` DOUBLE NULL DEFAULT NULL,
  `rules_of_conduct` VARCHAR(255) NULL DEFAULT NULL,
  `owner_id` BIGINT NULL DEFAULT NULL,
  `rules` VARCHAR(255) NULL DEFAULT NULL,
  `photos` VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 31
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`fishing_equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`fishing_equipment` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`fishing_instructors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`fishing_instructors` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`grade_requests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`grade_requests` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `grade` VARCHAR(255) NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `type_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`grades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`grades` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `grade` VARCHAR(255) NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `type_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`images` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `id_of_type` BIGINT NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `image64` LONGTEXT NULL DEFAULT NULL,
  `image1` LONGTEXT NULL DEFAULT NULL,
  `image2` LONGTEXT NULL DEFAULT NULL,
  `image3` LONGTEXT NULL DEFAULT NULL,
  `image4` LONGTEXT NULL DEFAULT NULL,
  `image5` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`income`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`income` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `income_from_reservations` FLOAT NULL DEFAULT NULL,
  `percentage_of_reservations` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`instructor_subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`instructor_subscription` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` BIGINT NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`main_admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`main_admins` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`price_list_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`price_list_items` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `adventure_id` BIGINT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `price` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`profile_deletion_requests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`profile_deletion_requests` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` BIGINT NULL DEFAULT NULL,
  `user_email` VARCHAR(255) NULL DEFAULT NULL,
  `user_type` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`registration_reguest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`registration_reguest` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 31
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`role` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`rooms` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `cottage_id` BIGINT NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `number` VARCHAR(255) NULL DEFAULT NULL,
  `number_of_beds` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ship_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ship_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ship_free_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ship_free_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ship_history_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ship_history_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `client_id` BIGINT NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 57
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ship_owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ship_owners` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ship_quick_appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ship_quick_appointments` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additional_services` VARCHAR(255) NULL DEFAULT NULL,
  `ending_date` DATE NULL DEFAULT NULL,
  `numer_of_people` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  `starting_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ship_subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ship_subscription` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ships`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ships` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `owner_id` BIGINT NULL DEFAULT NULL,
  `rating` DOUBLE NULL DEFAULT NULL,
  `rules_of_conduct` VARCHAR(255) NULL DEFAULT NULL,
  `terms_of_reservation` VARCHAR(255) NULL DEFAULT NULL,
  `capacity` INT NULL DEFAULT NULL,
  `fishing_equipment` VARCHAR(255) NULL DEFAULT NULL,
  `hp` FLOAT NULL DEFAULT NULL,
  `length` FLOAT NULL DEFAULT NULL,
  `navigation` VARCHAR(255) NULL DEFAULT NULL,
  `number_of_engines` INT NULL DEFAULT NULL,
  `rules` VARCHAR(255) NULL DEFAULT NULL,
  `top_speed` FLOAT NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ships_additional_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ships_additional_services` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `does_it_contain` BIT(1) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ships_busy_terms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ships_busy_terms` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `end_time` DATETIME NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  `start_time` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ships_configuration`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ships_configuration` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `capacity` INT NULL DEFAULT NULL,
  `engines_power` INT NULL DEFAULT NULL,
  `lenght` INT NULL DEFAULT NULL,
  `max_speed` INT NULL DEFAULT NULL,
  `number_of_engines` INT NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`ships_pricelist_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`ships_pricelist_items` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `price` BIGINT NULL DEFAULT NULL,
  `ship_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `enabled` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `isa2021_database`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isa2021_database`.`user_role` (
  `user_id` BIGINT NOT NULL,
  `role_id` BIGINT NOT NULL,
  INDEX `FKa68196081fvovjhkek5m97n3y` (`role_id` ASC) VISIBLE,
  INDEX `FK859n2jvi8ivhui0rl0esws6o` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK859n2jvi8ivhui0rl0esws6o`
    FOREIGN KEY (`user_id`)
    REFERENCES `isa2021_database`.`user` (`id`),
  CONSTRAINT `FKa68196081fvovjhkek5m97n3y`
    FOREIGN KEY (`role_id`)
    REFERENCES `isa2021_database`.`role` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
