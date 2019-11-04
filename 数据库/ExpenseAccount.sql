
-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for osx10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `expenseaccount`
--

DROP TABLE IF EXISTS `expenseaccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expenseaccount` (
  `编码` varchar(20) DEFAULT NULL,
  `名称` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenseaccount`
--

LOCK TABLES `expenseaccount` WRITE;
/*!40000 ALTER TABLE `expenseaccount` DISABLE KEYS */;
INSERT INTO `expenseaccount` VALUES ('费用科目编码','费用科目名称'),('GHF','挂号费'),('ZLF','诊疗费'),('JYF','检验费'),('JYCLF','检验材料费'),('CSJCF','超声检查费'),('CSCLF','超声材料费'),('FSJCF','放射检查费'),('FSCLF','放射材料费'),('MRIJCF','MRI检查费'),('MRICLF','MRI材料费'),('CTJCF','CT检查费'),('CTCLF','CT材料费'),('XYF','西药费'),('ZCYF','中成药费'),('ZCYF','中草药费'),('CZF','处置费'),('CZCLF','处置材料费'),('MZF','麻醉费'),('MZYF','麻醉药费'),('MZSSF','门诊手术费'),('QT','其他');
/*!40000 ALTER TABLE `expenseaccount` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-01 14:57:05
