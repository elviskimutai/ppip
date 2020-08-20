-- MySQL dump 10.13  Distrib 5.7.29, for Win64 (x86_64)
--
-- Host: localhost    Database: _ppip
-- ------------------------------------------------------
-- Server version	5.7.29-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_audittrails`
--

DROP TABLE IF EXISTS `_audittrails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_audittrails` (
  `AuditID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `Username` varchar(50) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `IpAddress` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AuditID`),
  KEY `Username` (`Username`),
  CONSTRAINT `_audittrails_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `_users` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_audittrails`
--

LOCK TABLES `_audittrails` WRITE;
/*!40000 ALTER TABLE `_audittrails` DISABLE KEYS */;
INSERT INTO `_audittrails` VALUES (1,'2020-08-13 10:47:09','Admin','Added new usergroup with name: Procuring Entity','Add','0'),(2,'2020-08-13 10:49:21','Admin','Added new usergroup with name: 1111','Add','0'),(3,'2020-08-13 10:57:26','Admin','Updated  usergroup with id: 11114','Update','0'),(4,'2020-08-13 11:01:19','Admin','Updated  usergroup with id: 3','Update','0'),(5,'2020-08-13 11:09:28','Admin','Updated  usergroup with id: 1','Update','0'),(6,'2020-08-13 11:10:22','Admin','Updated  usergroup with id: 1','Update','0'),(7,'2020-08-13 11:47:52','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(8,'2020-08-13 11:48:30','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(9,'2020-08-13 11:52:07','Admin','Added new role to group: 2','Create','0'),(10,'2020-08-13 12:21:11','Admin','Updated  usergroup with id: 1','Update','0'),(11,'2020-08-13 12:22:38','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(12,'2020-08-13 15:44:48','Admin','Update user details for user with username:Admin','Add','0'),(13,'2020-08-13 15:45:27','Admin','Update user details for user with username:Admin2','Add','0'),(14,'2020-08-13 16:03:37','Admin','Deleted user with username:Admin2','Delete','0'),(15,'2020-08-17 10:58:40','Admin','Update user details for user with username:Admin','Add','0'),(16,'2020-08-17 12:17:06','Admin','Updated  useraccess for user: Admin','Update','0'),(17,'2020-08-17 12:17:16','Admin','Updated  useraccess for user: Admin','Update','0'),(18,'2020-08-17 12:21:09','Admin','Update user details for user with username:Admin','Add','0'),(19,'2020-08-17 12:26:52','Admin','Update user details for user with username:Admin','Add','0'),(20,'2020-08-17 13:41:02','Admin','Update user details for user with username:Admin','Add','0'),(21,'2020-08-17 14:18:00','Admin','Update user details for user with username:Admin','Add','0'),(22,'2020-08-17 14:22:21','Admin','Update user details for user with username:Admin','Add','0'),(23,'2020-08-17 14:29:31','Admin','Update user details for user with username:Admin','Add','0'),(24,'2020-08-17 14:33:44','Admin','Deleted user with username:Admin','Delete','0'),(25,'2020-08-17 16:32:54','Admin','Update user details for user with username:Admin','Add','0'),(26,'2020-08-20 14:25:22','Admin','Added new SupplierCategory with name: Computer Software ','Add','0'),(27,'2020-08-20 14:31:10','Admin','Updated  SupplierCategory with id: 1','Update','0'),(28,'2020-08-20 14:43:26','Admin','Deleted  SupplierCategory with id: 1','Delete','0'),(29,'2020-08-20 15:02:47','Admin','Updated  useraccess for user: Admin','Update','0'),(30,'2020-08-20 15:02:57','Admin','Added new role to group: 1','Create','0'),(31,'2020-08-20 15:03:00','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(32,'2020-08-20 15:03:07','Admin','Added new useraccess for user: Admin','Add','0'),(33,'2020-08-20 15:27:24','Admin','Added new role to group: 1','Create','0'),(34,'2020-08-20 15:27:26','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(35,'2020-08-20 15:27:27','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(36,'2020-08-20 15:27:29','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(37,'2020-08-20 15:27:31','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(38,'2020-08-20 15:27:41','Admin','Added new role to group: 1','Create','0'),(39,'2020-08-20 15:27:46','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(40,'2020-08-20 15:27:48','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(41,'2020-08-20 15:27:50','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(42,'2020-08-20 15:27:51','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(43,'2020-08-20 15:28:08','Admin','Added new useraccess for user: Admin','Add','0'),(44,'2020-08-20 15:28:10','Admin','Updated  useraccess for user: Admin','Update','0'),(45,'2020-08-20 15:28:13','Admin','Updated  useraccess for user: Admin','Update','0'),(46,'2020-08-20 15:28:14','Admin','Updated  useraccess for user: Admin','Update','0'),(47,'2020-08-20 15:28:17','Admin','Updated  useraccess for user: Admin','Update','0'),(48,'2020-08-20 15:54:32','Admin','Added new role to group: 1','Create','0'),(49,'2020-08-20 15:54:34','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(50,'2020-08-20 15:54:35','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(51,'2020-08-20 15:54:37','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(52,'2020-08-20 15:54:39','Admin','Updated groupaccess role for userGroup: 1','Update','0'),(53,'2020-08-20 15:54:47','Admin','Added new useraccess for user: Admin','Add','0'),(54,'2020-08-20 15:54:49','Admin','Updated  useraccess for user: Admin','Update','0'),(55,'2020-08-20 15:54:50','Admin','Updated  useraccess for user: Admin','Update','0'),(56,'2020-08-20 15:54:52','Admin','Updated  useraccess for user: Admin','Update','0'),(57,'2020-08-20 15:54:54','Admin','Updated  useraccess for user: Admin','Update','0');
/*!40000 ALTER TABLE `_audittrails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_counties`
--

DROP TABLE IF EXISTS `_counties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_counties` (
  `id_counties` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(45) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id_counties`),
  KEY `fkcreatedby_idx` (`createdby`),
  CONSTRAINT `fkcreatedby` FOREIGN KEY (`createdby`) REFERENCES `_users` (`Username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_counties`
--

LOCK TABLES `_counties` WRITE;
/*!40000 ALTER TABLE `_counties` DISABLE KEYS */;
INSERT INTO `_counties` VALUES (1,'Nairobi',NULL,'Nairobi','Admin','2020-08-20 15:15:57',0),(2,'Kitui',NULL,'Kitui','Admin','2020-08-20 15:15:57',0),(3,'Machakos',NULL,'Machakos','Admin','2020-08-20 15:15:57',0),(4,'Makueni',NULL,'Wote','Admin','2020-08-20 15:15:57',0),(5,'Kiambu',NULL,'Kiambu','Admin','2020-08-20 15:15:57',0),(6,'Kajiado',NULL,'Kajiado','Admin','2020-08-20 15:15:57',0),(7,'Kilifi',NULL,'Kilifi','Admin','2020-08-20 15:15:57',0),(8,'Tana River',NULL,'Hola','Admin','2020-08-20 15:15:57',0),(9,'Lamu',NULL,'Lamu','Admin','2020-08-20 15:15:57',0),(10,'Garissa',NULL,'Garissa','Admin','2020-08-20 15:15:57',0),(11,'Wajir',NULL,'Wajir','Admin','2020-08-20 15:15:57',0),(12,'Mandera',NULL,'Mandera','Admin','2020-08-20 15:15:57',0),(13,'Mombasa',NULL,'Mombasa','Admin','2020-08-20 15:15:57',0),(14,'Kwale',NULL,'Kwale','Admin','2020-08-20 15:15:57',0),(15,'Taita-Taveta',NULL,'Voi','Admin','2020-08-20 15:15:57',0),(16,'Kakamega',NULL,'Kakamega','Admin','2020-08-20 15:15:57',0),(17,'Vihiga',NULL,'Vihiga','Admin','2020-08-20 15:15:57',0),(18,'Bungoma',NULL,'Bungoma','Admin','2020-08-20 15:15:57',0),(19,'Busia',NULL,'Busia','Admin','2020-08-20 15:15:57',0),(20,'Siaya',NULL,'Siaya','Admin','2020-08-20 15:15:57',0),(21,'Kisumu',NULL,'Kisumu','Admin','2020-08-20 15:15:57',0),(22,'Homa Bay',NULL,'Homa Bay','Admin','2020-08-20 15:15:57',0),(23,'Migori',NULL,'Migori','Admin','2020-08-20 15:15:57',0),(24,'Kisii',NULL,'Kisii','Admin','2020-08-20 15:15:57',0),(25,'Nyamira',NULL,'Nyamira','Admin','2020-08-20 15:15:57',0),(26,'Turkana',NULL,'Lodwar','Admin','2020-08-20 15:15:57',0),(27,'West Pokot',NULL,'Kapenguria','Admin','2020-08-20 15:15:57',0),(28,'Trans Nzoia',NULL,'Kitale','Admin','2020-08-20 15:15:57',0),(29,'Uasin Gishu',NULL,'Eldoret','Admin','2020-08-20 15:15:57',0),(30,'Elgeyo-Marakwet',NULL,'Iten','Admin','2020-08-20 15:15:57',0),(31,'Nandi',NULL,'Nandi','Admin','2020-08-20 15:15:57',0),(32,'Nyandarua',NULL,'Ol Kalou','Admin','2020-08-20 15:15:57',0),(33,'Samburu',NULL,'Maralal','Admin','2020-08-20 15:15:57',0),(34,'Baringo',NULL,'Kabarnet','Admin','2020-08-20 15:15:57',0),(35,'Nakuru',NULL,'Nakuru','Admin','2020-08-20 15:15:57',0),(36,'Narok',NULL,'Narok','Admin','2020-08-20 15:15:57',0),(37,'Kericho',NULL,'Kericho','Admin','2020-08-20 15:15:57',0),(38,'Bomet',NULL,'Bomet','Admin','2020-08-20 15:15:57',0),(39,'Marsabit',NULL,'Marsabit','Admin','2020-08-20 15:15:57',0),(40,'Isiolo',NULL,'Isiolo','Admin','2020-08-20 15:15:57',0),(41,'Meru',NULL,'Meru','Admin','2020-08-20 15:15:57',0),(42,'Tharaka-Nithi',NULL,'Kathwana','Admin','2020-08-20 15:15:57',0),(43,'Embu',NULL,'Embu','Admin','2020-08-20 15:15:57',0),(44,'Nyeri',NULL,'Nyeri','Admin','2020-08-20 15:15:57',0),(45,'Kirinyaga',NULL,'Kerugoya / Kutus','Admin','2020-08-20 15:15:57',0),(46,'Muranga',NULL,'Muranga','Admin','2020-08-20 15:15:57',0),(47,'Laikipia',NULL,'Rumuruti','Admin','2020-08-20 15:15:57',0);
/*!40000 ALTER TABLE `_counties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_countries`
--

DROP TABLE IF EXISTS `_countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_countries` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdat` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedat` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `countries_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_countries`
--

LOCK TABLES `_countries` WRITE;
/*!40000 ALTER TABLE `_countries` DISABLE KEYS */;
INSERT INTO `_countries` VALUES (1,'United Kingdom',NULL,'2017-07-21 09:16:11','2017-07-21 09:16:11'),(2,'Kenya',NULL,'2017-07-21 09:16:11','2017-07-21 09:16:11'),(3,'Afghanistan',NULL,'2017-07-21 09:16:11','2017-07-21 09:16:11'),(4,'Albania',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(5,'Algeria',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(6,'American Samoa',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(7,'Andorra',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(8,'Angola',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(9,'Anguilla',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(10,'Antarctica',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(11,'Antigua and Barbuda',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(12,'Argentina',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(13,'Armenia',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(14,'Aruba',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(15,'Australia',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(16,'Austria',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(17,'Azerbaijan',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(18,'Bahamas',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(19,'Bahrain',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(20,'Bangladesh',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(21,'Barbados',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(22,'Belarus',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(23,'Belgium',NULL,'2017-07-21 09:16:12','2017-07-21 09:16:12'),(24,'Belize',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(25,'Benin',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(26,'Bermuda',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(27,'Bhutan',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(28,'Bolivia',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(29,'Bosnia and Herzegowina',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(30,'Botswana',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(31,'Bouvet Island',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(32,'Brazil',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(33,'British Indian Ocean Territory',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(34,'Brunei Darussalam',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(35,'Bulgaria',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(36,'Burkina Faso',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(37,'Burundi',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(38,'Cambodia',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(39,'Cameroon',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(40,'Canada',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(41,'Cape Verde',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(42,'Cayman Islands',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(43,'Central African Republic',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(44,'Chad',NULL,'2017-07-21 09:16:13','2017-07-21 09:16:13'),(45,'Chile',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(46,'China',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(47,'Christmas Island',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(48,'Cocos (Keeling) Islands',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(49,'Colombia',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(50,'Comoros',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(51,'Congo',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(52,'Congo, the Democratic Republic of the',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(53,'Cook Islands',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(54,'Costa Rica',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(55,'Cote d\'Ivoire',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(56,'Croatia (Hrvatska)',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(57,'Cuba',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(58,'Cyprus',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(59,'Czech Republic',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(60,'Denmark',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(61,'Djibouti',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(62,'Dominica',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(63,'Dominican Republic',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(64,'East Timor',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(65,'Ecuador',NULL,'2017-07-21 09:16:14','2017-07-21 09:16:14'),(66,'Egypt',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(67,'El Salvador',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(68,'Equatorial Guinea',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(69,'Eritrea',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(70,'Estonia',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(71,'Ethiopia',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(72,'Falkland Islands (Malvinas)',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(73,'Faroe Islands',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(74,'Fiji',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(75,'Finland',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(76,'France',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(77,'France Metropolitan',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(78,'French Guiana',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(79,'French Polynesia',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(80,'French Southern Territories',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(81,'Gabon',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(82,'Gambia',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(83,'Georgia',NULL,'2017-07-21 09:16:15','2017-07-21 09:16:15'),(84,'Germany',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(85,'Ghana',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(86,'Gibraltar',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(87,'Greece',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(88,'Greenland',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(89,'Grenada',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(90,'Guadeloupe',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(91,'Guam',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(92,'Guatemala',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(93,'Guinea',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(94,'Guinea-Bissau',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(95,'Guyana',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(96,'Haiti',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(97,'Heard and Mc Donald Islands',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(98,'Holy See (Vatican City State)',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(99,'Honduras',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(100,'Hong Kong',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(101,'Hungary',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(102,'Iceland',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(103,'India',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(104,'Indonesia',NULL,'2017-07-21 09:16:16','2017-07-21 09:16:16'),(105,'Iran (Islamic Republic of)',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(106,'Iraq',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(107,'Ireland',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(108,'Israel',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(109,'Italy',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(110,'Jamaica',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(111,'Japan',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(112,'Jordan',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(113,'Kazakhstan',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(114,'Kiribati',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(115,'Korea, Democratic People\'s Republic of',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(116,'Korea, Republic of',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(117,'Kuwait',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(118,'Kyrgyzstan',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(119,'Lao, People\'s Democratic Republic',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(120,'Latvia',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(121,'Lebanon',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(122,'Lesotho',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(123,'Liberia',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(124,'Libyan Arab Jamahiriya',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(125,'Liechtenstein',NULL,'2017-07-21 09:16:17','2017-07-21 09:16:17'),(126,'Lithuania',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(127,'Luxembourg',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(128,'Macau',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(129,'Macedonia, The Former Yugoslav Republic of',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(130,'Madagascar',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(131,'Malawi',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(132,'Malaysia',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(133,'Maldives',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(134,'Mali',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(135,'Malta',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(136,'Marshall Islands',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(137,'Martinique',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(138,'Mauritania',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(139,'Mauritius',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(140,'Mayotte',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(141,'Mexico',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(142,'Micronesia, Federated States of',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(143,'Moldova, Republic of',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(144,'Monaco',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(145,'Mongolia',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(146,'Montserrat',NULL,'2017-07-21 09:16:18','2017-07-21 09:16:18'),(147,'Morocco',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(148,'Mozambique',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(149,'Myanmar',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(150,'Namibia',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(151,'Nauru',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(152,'Nepal',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(153,'Netherlands',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(154,'Netherlands Antilles',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(155,'New Caledonia',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(156,'New Zealand',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(157,'Nicaragua',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(158,'Niger',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(159,'Nigeria',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(160,'Niue',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(161,'Norfolk Island',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(162,'Northern Mariana Islands',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(163,'Norway',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(164,'Oman',NULL,'2017-07-21 09:16:19','2017-07-21 09:16:19'),(165,'Pakistan',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(166,'Palau',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(167,'Panama',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(168,'Papua New Guinea',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(169,'Paraguay',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(170,'Peru',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(171,'Philippines',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(172,'Pitcairn',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(173,'Poland',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(174,'Portugal',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(175,'Puerto Rico',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(176,'Qatar',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(177,'Reunion',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(178,'Romania',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(179,'Russian Federation',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(180,'Rwanda',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(181,'Saint Kitts and Nevis',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(182,'Saint Lucia',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(183,'Saint Vincent and the Grenadines',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(184,'Samoa',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(185,'San Marino',NULL,'2017-07-21 09:16:20','2017-07-21 09:16:20'),(186,'Sao Tome and Principe',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(187,'Saudi Arabia',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(188,'Senegal',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(189,'Seychelles',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(190,'Sierra Leone',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(191,'Singapore',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(192,'Slovakia (Slovak Republic)',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(193,'Slovenia',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(194,'Solomon Islands',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(195,'Somalia',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(196,'South Africa',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(197,'South Georgia and the South Sandwich Islands',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(198,'Spain',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(199,'Sri Lanka',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(200,'St. Helena',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(201,'St. Pierre and Miquelon',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(202,'Sudan',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(203,'Suriname',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(204,'Svalbard and Jan Mayen Islands',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(205,'Swaziland',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(206,'Sweden',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(207,'Switzerland',NULL,'2017-07-21 09:16:21','2017-07-21 09:16:21'),(208,'Syrian Arab Republic',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(209,'Taiwan, Province of China',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(210,'Tajikistan',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(211,'Tanzania',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(212,'Thailand',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(213,'Togo',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(214,'Tokelau',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(215,'Tonga',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(216,'Trinidad and Tobago',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(217,'Tunisia',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(218,'Turkey',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(219,'Turkmenistan',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(220,'Turks and Caicos Islands',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(221,'Tuvalu',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(222,'Uganda',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(223,'Ukraine',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(224,'United Arab Emirates',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(225,'United States',NULL,'2017-07-21 09:16:22','2017-07-21 09:16:22'),(226,'United States Minor Outlying Islands',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(227,'Uruguay',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(228,'Uzbekistan',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(229,'Vanuatu',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(230,'Venezuela',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(231,'Vietnam',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(232,'Virgin Islands (British)',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(233,'Virgin Islands (U.S.)',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(234,'Wallis and Futuna Islands',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(235,'Western Sahara',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(236,'Yemen',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(237,'Yugoslavia',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(238,'Zambia',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23'),(239,'Zimbabwe',NULL,'2017-07-21 09:16:23','2017-07-21 09:16:23');
/*!40000 ALTER TABLE `_countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_groupaccess`
--

DROP TABLE IF EXISTS `_groupaccess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_groupaccess` (
  `UserGroupID` bigint(20) NOT NULL,
  `RoleID` bigint(20) NOT NULL,
  `Edit` tinyint(1) NOT NULL,
  `Remove` tinyint(1) NOT NULL,
  `AddNew` tinyint(1) NOT NULL,
  `View` tinyint(1) NOT NULL,
  `Export` tinyint(1) NOT NULL,
  `CreateBy` varchar(50) NOT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`UserGroupID`,`RoleID`),
  KEY `RoleID` (`RoleID`),
  KEY `CreateBy` (`CreateBy`),
  CONSTRAINT `_groupaccess_ibfk_1` FOREIGN KEY (`UserGroupID`) REFERENCES `_usergroups` (`UserGroupID`),
  CONSTRAINT `_groupaccess_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `_roles` (`RoleID`),
  CONSTRAINT `_groupaccess_ibfk_3` FOREIGN KEY (`CreateBy`) REFERENCES `_users` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_groupaccess`
--

LOCK TABLES `_groupaccess` WRITE;
/*!40000 ALTER TABLE `_groupaccess` DISABLE KEYS */;
INSERT INTO `_groupaccess` VALUES (1,1,1,1,1,1,0,'Admin','2020-08-12 13:57:15'),(1,2,1,0,1,1,1,'Admin','2020-08-12 13:57:15'),(1,3,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),(1,4,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),(1,5,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),(1,6,1,1,0,1,1,'Admin','2020-08-12 13:57:15'),(1,7,1,1,1,1,1,'Admin','2020-08-20 15:27:24'),(1,8,0,0,1,1,0,'Admin','2020-08-20 15:02:57'),(1,9,1,1,1,1,1,'Admin','2020-08-20 15:27:41'),(1,10,1,1,1,1,1,'Admin','2020-08-20 15:54:32'),(2,3,0,0,1,0,0,'Admin','2020-08-13 11:52:07');
/*!40000 ALTER TABLE `_groupaccess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_roles`
--

DROP TABLE IF EXISTS `_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_roles` (
  `RoleID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(128) NOT NULL,
  `RoleDescription` varchar(128) NOT NULL,
  `CreateBy` varchar(50) NOT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` datetime DEFAULT NULL,
  `Deleted` tinyint(1) NOT NULL,
  `Category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RoleID`),
  KEY `CreateBy` (`CreateBy`),
  CONSTRAINT `_roles_ibfk_1` FOREIGN KEY (`CreateBy`) REFERENCES `_users` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_roles`
--

LOCK TABLES `_roles` WRITE;
/*!40000 ALTER TABLE `_roles` DISABLE KEYS */;
INSERT INTO `_roles` VALUES (1,'System Users','System Users','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'User Management'),(2,'Security Groups','Security Groups','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'User Management'),(3,'User Management','User Management','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'Menus'),(4,'Supplier Categories','Supplier Categories','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'User Management'),(5,'Roles','Roles','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'User Management'),(6,'Assign Group Access','Assign Group Access','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'User Management'),(7,'Assign User Access','Assign User Access','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'User Management'),(8,'Configurations','Configurations','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'Menus'),(9,'Counties','Counties','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'Configurations'),(10,'Countries','Countries','Admin','2020-08-11 16:25:24','2020-08-11 16:25:24',0,'Configurations');
/*!40000 ALTER TABLE `_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_smsdetails`
--

DROP TABLE IF EXISTS `_smsdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_smsdetails` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SenderID` varchar(100) DEFAULT NULL,
  `UserName` varchar(100) DEFAULT NULL,
  `URL` varchar(200) DEFAULT NULL,
  `Key` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_smsdetails`
--

LOCK TABLES `_smsdetails` WRITE;
/*!40000 ALTER TABLE `_smsdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `_smsdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_smtpdetails`
--

DROP TABLE IF EXISTS `_smtpdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_smtpdetails` (
  `Host` varchar(100) DEFAULT NULL,
  `Port` int(255) DEFAULT NULL,
  `Sender` varchar(128) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_smtpdetails`
--

LOCK TABLES `_smtpdetails` WRITE;
/*!40000 ALTER TABLE `_smtpdetails` DISABLE KEYS */;
INSERT INTO `_smtpdetails` VALUES ('smtp.gmail.com',465,'arcmdevelopment@gmail.com','Arcm1234');
/*!40000 ALTER TABLE `_smtpdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_suppliercategories`
--

DROP TABLE IF EXISTS `_suppliercategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_suppliercategories` (
  `id_suppliercategories` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_suppliercategories`),
  KEY `created_by_idx` (`createdby`),
  CONSTRAINT `created_by` FOREIGN KEY (`createdby`) REFERENCES `_users` (`Username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_suppliercategories`
--

LOCK TABLES `_suppliercategories` WRITE;
/*!40000 ALTER TABLE `_suppliercategories` DISABLE KEYS */;
INSERT INTO `_suppliercategories` VALUES (1,'Computer Software ','Computer Software','Admin','2020-08-20 14:25:22',0);
/*!40000 ALTER TABLE `_suppliercategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_useraccess`
--

DROP TABLE IF EXISTS `_useraccess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_useraccess` (
  `Username` varchar(50) NOT NULL,
  `RoleID` bigint(20) NOT NULL,
  `Edit` tinyint(1) NOT NULL,
  `Remove` tinyint(1) NOT NULL,
  `AddNew` tinyint(1) NOT NULL,
  `View` tinyint(1) NOT NULL,
  `Export` tinyint(1) NOT NULL,
  `CreateBy` varchar(50) NOT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Username`,`RoleID`),
  KEY `RoleID` (`RoleID`),
  KEY `CreateBy` (`CreateBy`),
  CONSTRAINT `_useraccess_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `_roles` (`RoleID`),
  CONSTRAINT `_useraccess_ibfk_2` FOREIGN KEY (`Username`) REFERENCES `_users` (`Username`),
  CONSTRAINT `_useraccess_ibfk_3` FOREIGN KEY (`CreateBy`) REFERENCES `_users` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_useraccess`
--

LOCK TABLES `_useraccess` WRITE;
/*!40000 ALTER TABLE `_useraccess` DISABLE KEYS */;
INSERT INTO `_useraccess` VALUES ('Admin',1,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),('Admin',2,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),('Admin',3,1,1,1,1,0,'Admin','2020-08-12 13:57:15'),('Admin',4,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),('Admin',5,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),('Admin',6,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),('Admin',7,1,1,1,1,1,'Admin','2020-08-12 13:57:15'),('Admin',8,0,0,0,1,0,'Admin','2020-08-20 15:03:07'),('Admin',9,1,1,1,1,1,'Admin','2020-08-20 15:28:08'),('Admin',10,1,1,1,1,1,'Admin','2020-08-20 15:54:47');
/*!40000 ALTER TABLE `_useraccess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_usergroups`
--

DROP TABLE IF EXISTS `_usergroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_usergroups` (
  `UserGroupID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(128) NOT NULL,
  `Description` varchar(128) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `Deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`UserGroupID`),
  UNIQUE KEY `Name` (`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_usergroups`
--

LOCK TABLES `_usergroups` WRITE;
/*!40000 ALTER TABLE `_usergroups` DISABLE KEYS */;
INSERT INTO `_usergroups` VALUES (1,'System Admininstrator','System Admininstrator','2020-08-11 14:55:12','2020-08-13 12:21:10',0),(2,'Procuring Entity','Procuring Entity','2020-08-13 10:47:09','2020-08-13 10:47:09',0),(3,'1111d','1111e','2020-08-13 10:49:21','2020-08-13 11:01:19',0);
/*!40000 ALTER TABLE `_usergroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_users`
--

DROP TABLE IF EXISTS `_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_users` (
  `Name` varchar(120) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Email` varchar(128) NOT NULL,
  `Password` varchar(128) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Create_at` datetime NOT NULL,
  `Update_at` datetime DEFAULT NULL,
  `Deleted` tinyint(1) NOT NULL,
  `IsActive` tinyint(1) DEFAULT NULL,
  `IsEmailverified` tinyint(1) DEFAULT NULL,
  `ActivationCode` varchar(50) DEFAULT NULL,
  `UserGroupID` bigint(20) NOT NULL,
  `Photo` varchar(100) DEFAULT NULL,
  `IDnumber` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Username`),
  UNIQUE KEY `Username` (`Username`),
  KEY `UserGroupID` (`UserGroupID`),
  CONSTRAINT `_users_ibfk_1` FOREIGN KEY (`UserGroupID`) REFERENCES `_usergroups` (`UserGroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_users`
--

LOCK TABLES `_users` WRITE;
/*!40000 ALTER TABLE `_users` DISABLE KEYS */;
INSERT INTO `_users` VALUES ('Elvis Kimutai','Admin','elvis@wilcom.co.ke','$2a$10$khG5cR7gwarxtOY54ixuy.wfIuD.67oWW1ba.FJ.NqsGLp1cwQBKm','0705555285','2020-08-11 14:56:20','2020-08-11 14:56:20',0,1,1,'111',1,'1597663768714-p.jpg',NULL,'Male'),('Another User 11','Admin2','admin2@gmail.com','$2a$10$heem5nHBYMrgllbEr4pgCe6n58Ni9Q/YAJsWB5frl0TKJNYWYsa06','123456711','2020-08-13 15:01:43',NULL,1,1,0,'ELh8l',1,'default.png',NULL,NULL);
/*!40000 ALTER TABLE `_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolesbuffer`
--

DROP TABLE IF EXISTS `rolesbuffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rolesbuffer` (
  `Username` varchar(50) DEFAULT NULL,
  `RoleID` bigint(20) NOT NULL,
  `Edit` tinyint(1) DEFAULT NULL,
  `Remove` tinyint(1) DEFAULT NULL,
  `AddNew` tinyint(1) DEFAULT NULL,
  `View` tinyint(1) DEFAULT NULL,
  `Export` tinyint(1) DEFAULT NULL
) ENGINE=MEMORY DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolesbuffer`
--

LOCK TABLES `rolesbuffer` WRITE;
/*!40000 ALTER TABLE `rolesbuffer` DISABLE KEYS */;
/*!40000 ALTER TABLE `rolesbuffer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database '_ppip'
--
/*!50003 DROP PROCEDURE IF EXISTS `DeleteSupplierCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteSupplierCategory`(IN _ID int, IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Deleted  SupplierCategory with id: ',_ID); 
Update `_suppliercategories` set deleted=1 where id_suppliercategories=_ID;
call SaveAuditTrail(_userID,lSaleDesc,'Delete','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteUser`( IN _Username VARCHAR(50),IN _userID VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Deleted user with username:',_Username); 
Update `_users` set Deleted=1 Where Username=_Username;
call SaveAuditTrail(_userID,lSaleDesc,'Delete','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteUserGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteUserGroup`(IN _UserGroupID bigint(20), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Deleted  usergroup with id: ',_UserGroupID); 
Update `_usergroups`set Deleted=1 where UserGroupID=_UserGroupID;
call SaveAuditTrail(_userID,lSaleDesc,'Delete','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAuditrails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAuditrails`()
    NO SQL
SELECT `AuditID`, `Date`, `Username`, `Description`, `Category`, `IpAddress` 
FROM `_audittrails` order by AuditID desc ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getcounties` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getcounties`()
    NO SQL
BEGIN
SELECT * 
FROM _counties WHERE  deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getcountries` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getcountries`()
BEGIN

SELECT `id`,
    `name`,
   `code`,
   `createdat`,
   `updatedat`
FROM `_countries` ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetGroupRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetGroupRoles`(IN `_UserGroupID` BIGINT)
    NO SQL
SELECT _roles.RoleID, RoleName,`Edit`, `Remove`, `AddNew`, `View`, `Export`,Category 
FROM _roles LEFT JOIN  _groupaccess
    ON  _roles.RoleID =_groupaccess.RoleID  AND _groupaccess.UserGroupID=_UserGroupID ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getOnecountry` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getOnecountry`(IN _ID int)
BEGIN
SELECT `id`,
    `name`,
   `code`,
   `createdat`,
   `updatedat`
FROM `_countries` where id=_ID;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getOnecounty` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getOnecounty`(IN _Code varchar(50))
    NO SQL
BEGIN
SELECT * 
FROM _counties WHERE  code =_Code and deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetOneRole` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOneRole`(IN _RoleID bigint(20))
    NO SQL
BEGIN
Select RoleID,RoleName,RoleDescription, CreateBy,CreatedAt,UpdatedAt,Category from _roles where RoleID=_RoleID ;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoles`()
    NO SQL
BEGIN
Select RoleID,RoleName,RoleDescription, CreateBy,CreatedAt,UpdatedAt,Category from _roles where Deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSMTPDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSMTPDetails`()
    NO SQL
BEGIN
SELECT Host,Port,Sender,Password from _smtpdetails;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSupplierCategories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSupplierCategories`()
    NO SQL
BEGIN
Select * from _suppliercategories where deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSupplierCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSupplierCategory`(IN _ID int)
    NO SQL
BEGIN
Select * from _suppliercategories where id_suppliercategories = _ID and deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUser`(IN _Username varchar(50))
    NO SQL
BEGIN
SELECT u.Name,u.Username,u.Email,u.Password,u.Phone,u.Create_at,u.Update_at,u.IsActive,u.IsEmailverified,u.ActivationCode,u.UserGroupID,u.Photo,u.IDnumber,u.Gender,g.Name as Usergroup
from _users u inner join _usergroups g on u.UserGroupID = g.UserGroupID where u.Username=_Username and u.Deleted=0 and u.IsActive=1;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetuserAccess` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetuserAccess`(IN `_Username` VARCHAR(50))
    NO SQL
BEGIN

CREATE TABLE IF NOT EXISTS Rolesbuffer (
Username varchar(50),
RoleID Bigint NOT NULL
,Edit boolean default false
,Remove boolean default false
,AddNew boolean default false
,View boolean default false
,Export boolean default false
)ENGINE=MEMORY;

insert into Rolesbuffer select _Username,RoleID,Edit,Remove,AddNew,View,Export from _useraccess where Username=_Username;
insert into Rolesbuffer (Username,RoleID) select _Username,RoleID from _groupaccess
 where UserGroupID in (Select UserGroupID from _users where Username=_Username) 
 and RoleID not IN(select RoleID from _useraccess where Username=_Username);

SELECT Username,Rolesbuffer.RoleID,RoleName,Edit,Remove,AddNew,View,Export,Category from Rolesbuffer 
inner join _roles on Rolesbuffer.RoleID=_roles.RoleID where Username=_Username;

Delete from  Rolesbuffer where Username=_Username; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUsergroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsergroup`(IN _UserGroupID bigint(20))
    NO SQL
BEGIN
Select * from _usergroups where  UserGroupID=_UserGroupID;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUsergroups` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsergroups`()
    NO SQL
BEGIN
Select * from _usergroups where Deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserRoles`(IN `_Username` VARCHAR(100))
    NO SQL
BEGIN
SELECT `Username`, _useraccess.RoleID,RoleName, _useraccess.Edit, _useraccess.Remove, _useraccess.AddNew, _useraccess.View, _useraccess.Export FROM `_useraccess`
inner join _roles on _roles.RoleID=_useraccess.RoleID where Username= _Username;  

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsers`()
    NO SQL
BEGIN
SELECT u.Name,u.Username,u.Email,u.Password,u.Phone,u.Create_at,u.Update_at,u.IsActive,u.IsEmailverified,u.ActivationCode,u.UserGroupID,u.Photo,u.IDnumber,u.Gender,g.Name as Usergroup
from _users u inner join _usergroups g on u.UserGroupID = g.UserGroupID where u.Deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Resetpassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Resetpassword`(IN `_Email` VARCHAR(128), IN `_Password` VARCHAR(128))
    NO SQL
BEGIN

if(SELECT count(*)  from _users  where Email=_Email)>0 THEN
BEGIN
Update _users set `Password`=_Password  Where Email=_Email;
Select 'Password changed' as msg;
END;
ELSE
BEGIN
select 'User Not Found' as msg;
END;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SaveAuditTrail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SaveAuditTrail`(IN `_Username` VARCHAR(50), IN `_Description` VARCHAR(128), IN `_Category` VARCHAR(50), IN `_IpAddress` VARCHAR(50))
    NO SQL
BEGIN
INSERT INTO `_audittrails`(`Date`, `Username`, `Description`, `Category`, `IpAddress`) 
VALUES (now(),_Username,_Description,_Category,_IpAddress);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SaveGroupRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SaveGroupRoles`(IN `_UserGroupID` BIGINT, IN `_RoleID` BIGINT, IN `_Status` BOOLEAN, IN `_Desc` VARCHAR(50), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
if(SELECT count(*)  from _groupaccess where UserGroupID=_UserGroupID and  RoleID=_RoleID)>0 THEN
BEGIN

set lSaleDesc= CONCAT('Updated groupaccess role for userGroup: ', _UserGroupID ); 
call SaveAuditTrail(_userID,lSaleDesc,'Update','0' );

if(_Desc ='Create')THEN
Begin
Update _groupaccess set 
AddNew = _Status where UserGroupID = _UserGroupID and  RoleID=_RoleID;
END;
END IF;

if(_Desc='View')THEN
Begin
Update _groupaccess set
View=_Status
where UserGroupID = _UserGroupID and  RoleID = _RoleID;
END;
END IF;

if(_Desc='Delete')THEN
Begin
Update _groupaccess set 
Remove = _Status where  UserGroupID =_UserGroupID and  RoleID = _RoleID;
END;
END IF;

if(_Desc='Update')THEN
Begin
Update _groupaccess set 
Edit = _Status where UserGroupID = _UserGroupID and  RoleID = _RoleID;
END;
END IF;

if(_Desc='Export')THEN
Begin
Update _groupaccess set 
Export=_Status where UserGroupID = _UserGroupID and  RoleID = _RoleID;
END;
END IF;

END;
ELSE

BEGIN
set lSaleDesc= CONCAT('Added new role to group: ', _UserGroupID ); 
call SaveAuditTrail(_userID,lSaleDesc,'Create','0' );

if(_Desc ='Create')THEN
Begin
INSERT INTO `_groupaccess`( `UserGroupID`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,`CreateBy`, `CreatedAt`) VALUES 
(_UserGroupID,_RoleID,false,false,_Status,false,false,_userID,now());
END;
END IF;

if(_Desc='View')THEN
Begin
INSERT INTO `_groupaccess`( `UserGroupID`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,`CreateBy`, `CreatedAt`) VALUES 
(_UserGroupID,_RoleID,false,false,false,_Status,false,_userID,now());
END;
END IF;

if(_Desc='Delete')THEN
Begin
INSERT INTO `_groupaccess`( `UserGroupID`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,`CreateBy`, `CreatedAt`) VALUES 
(_UserGroupID,_RoleID,false,_Status,false,false,false,_userID,now());
END;
END IF;

if(_Desc='Update')THEN
Begin
INSERT INTO `_groupaccess`( `UserGroupID`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,`CreateBy`, `CreatedAt`) VALUES 
(_UserGroupID,_RoleID,_Status,false,false,false,false,_userID,now());
END;
END IF;

if(_Desc='Export')THEN
Begin
INSERT INTO `_groupaccess`( `UserGroupID`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,`CreateBy`, `CreatedAt`) VALUES 
(_UserGroupID,_RoleID,false,false,false,false,_Status,_userID,now());
END;
END IF;

END;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SaveSupplierCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SaveSupplierCategory`(IN `_Name` VARCHAR(128), IN `_Description` VARCHAR(128), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Added new SupplierCategory with name: ',_Name); 
INSERT INTO `_suppliercategories`(`name`, `description`, `createdat`,createdby, `deleted`) 
VALUES (_Name,_Description,now(),_userID,0);
call SaveAuditTrail(_userID,lSaleDesc,'Add','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SaveUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SaveUser`(IN _Name VARCHAR(120), IN _Email VARCHAR(128), IN _Password VARCHAR(128), IN _UserGroupID BIGINT, IN _Username VARCHAR(50), IN _userID VARCHAR(50), IN _Phone VARCHAR(20), IN _IsActive BOOLEAN, IN _IDnumber VARCHAR(50), IN _Gender VARCHAR(50), IN _ActivationCode VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Added new User with username:',_Username); 
INSERT INTO `_users`(`Name`,`Username`,`Email`,`Password`,`Phone`,`Create_at`, `Deleted`,`IsActive`,`IsEmailverified`,ActivationCode,`UserGroupID`,Photo,IDnumber,Gender) 
VALUES (_Name,_Username,_Email,_Password,_Phone,now(),0,_IsActive,0,_ActivationCode,_UserGroupID,'default.png',_IDnumber,_Gender);
INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`, `CreateBy`, `CreatedAt`) 
SELECT _Username,RoleID,Edit,Remove,AddNew,View,Export,_userID,NOW() FROM _groupaccess WHERE UserGroupID=_UserGroupID;
call SaveAuditTrail(_userID,lSaleDesc,'Add','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SaveuserAcces` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SaveuserAcces`(IN `_Username` VARCHAR(50), IN `_RoleID` BIGINT, IN `_Status` BOOLEAN, IN `_Desc` VARCHAR(50), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
if(SELECT count(*)  from _useraccess  where Username=_Username and  RoleID=_RoleID)>0 THEN
BEGIN
if(_Desc ='Create')THEN
Begin
Update _useraccess set AddNew=_Status
where Username=_Username and  RoleID=_RoleID;
END;
END IF;
if(_Desc='View')THEN
Begin
Update _useraccess set View=_Status
where Username=_Username and  RoleID=_RoleID;
END;
END IF;
if(_Desc='Delete')THEN
Begin
Update _useraccess set Remove=_Status
where Username=_Username and  RoleID=_RoleID;
END;
END IF;
if(_Desc='Update')THEN
Begin
Update _useraccess set Edit=_Status
where Username=_Username and  RoleID=_RoleID;
END;
END IF;
if(_Desc='Export')THEN
Begin
Update _useraccess set Export=_Status
where Username=_Username and  RoleID=_RoleID;
END;
END IF;
set lSaleDesc= CONCAT('Updated  useraccess for user: ', _Username ); 
call SaveAuditTrail(_userID,lSaleDesc,'Update','0' );
END;
ELSE

BEGIN
if(_Desc ='Create')THEN
Begin
INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,  `CreateBy`, `CreatedAt`) 
VALUES (_Username,_RoleID,0,0,_Status,0,0,_userID,NOW());
END;
END IF;
if(_Desc='View')THEN
Begin
INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,  `CreateBy`, `CreatedAt`) 
VALUES (_Username,_RoleID,0,0,0,_Status,0,_userID,NOW());
END;
END IF;
if(_Desc='Delete')THEN
Begin
INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,  `CreateBy`, `CreatedAt`) 
VALUES (_Username,_RoleID,0,_Status,0,0,0,_userID,NOW());
END;
END IF;
if(_Desc='Update')THEN
Begin
INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,  `CreateBy`, `CreatedAt`) 
VALUES (_Username,_RoleID,_Status,0,0,0,0,_userID,NOW());
END;
END IF;
if(_Desc='Export')THEN
Begin
INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`,  `CreateBy`, `CreatedAt`) 
VALUES (_Username,_RoleID,0,0,0,0,_Status,_userID,NOW());
END;
END IF;
set lSaleDesc= CONCAT('Added new useraccess for user: ', _Username ); 
call SaveAuditTrail(_userID,lSaleDesc,'Add','0' );
END;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SaveUserGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SaveUserGroup`(IN `_Name` VARCHAR(128), IN `_Description` VARCHAR(128), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Added new usergroup with name: ',_Name); 
INSERT INTO `_usergroups`(`Name`, `Description`, `CreatedAt`, `UpdatedAt`, `Deleted`) 
VALUES (_Name,_Description,now(),now(),0);
call SaveAuditTrail(_userID,lSaleDesc,'Add','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_ValidatePrivilege` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ValidatePrivilege`(IN `_Username` VARCHAR(50), IN `_RoleName` VARCHAR(128))
    NO SQL
BEGIN
SELECT `Username`, _useraccess.RoleID, `Edit`, `Remove`, `AddNew`, `View`, `Export` FROM `_useraccess` 
inner join _roles on _useraccess.RoleID=_roles.RoleID  where Username=_Username and _roles.RoleName=_RoleName;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `suppliercategories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `suppliercategories`()
    NO SQL
BEGIN
Select * from _suppliercategories where  deleted=0;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `suppliercategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `suppliercategory`(IN _id_suppliercategories bigint(20))
    NO SQL
BEGIN
Select * from _suppliercategories where  id_suppliercategories=_id_suppliercategories;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Updatepassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Updatepassword`(IN _Password VARCHAR(128), IN _Username VARCHAR(50))
BEGIN
Update _users set `Password`=_Password Where Username=_Username;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateSupplierCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateSupplierCategory`(IN _ID int,IN `_Name` VARCHAR(128), IN `_Description` VARCHAR(128), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Updated  SupplierCategory with id: ',_ID); 
Update `_suppliercategories` set `name`=_Name, `description`=_Description where id_suppliercategories=_ID;
call SaveAuditTrail(_userID,lSaleDesc,'Update','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUser`(IN _Name VARCHAR(120), IN _Email VARCHAR(128),  IN _UserGroupID BIGINT, IN _Username VARCHAR(50),IN _userID VARCHAR(50),IN _Phone VARCHAR(20), IN _IsActive BOOLEAN,IN _IDnumber VARCHAR(50),IN _Gender VARCHAR(50),IN _photo VARCHAR(100))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Update user details for user with username:',_Username); 
Update `_users` set `Name`=_Name,Photo=_photo,  `Email`=_Email,`Phone`=_Phone,`IsActive`=_IsActive,`UserGroupID`=_UserGroupID,IDnumber=_IDnumber,Gender=_Gender
Where Username=_Username;
-- INSERT INTO `_useraccess`(`Username`, `RoleID`, `Edit`, `Remove`, `AddNew`, `View`, `Export`, `CreateBy`, `CreatedAt`) 
-- SELECT _Username,RoleID,Edit,Remove,AddNew,View,Export,_userID,_userID,NOW() FROM _groupaccess WHERE UserGroupID=_UserGroupID;
call SaveAuditTrail(_userID,lSaleDesc,'Add','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUserGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUserGroup`(IN _UserGroupID bigint(20), IN `_Name` VARCHAR(128), IN `_Description` VARCHAR(128), IN `_userID` VARCHAR(50))
    NO SQL
BEGIN
DECLARE lSaleDesc varchar(200);
set lSaleDesc= CONCAT('Updated  usergroup with id: ',_UserGroupID); 
Update `_usergroups`set `Name`=_Name, `Description`=_Description,  `UpdatedAt`=now() where UserGroupID=_UserGroupID;
call SaveAuditTrail(_userID,lSaleDesc,'Update','0' );
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-20 16:34:43
