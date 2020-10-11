-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: react_sql
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dishes` (
  `rest_id` int NOT NULL,
  `dish_id` int NOT NULL AUTO_INCREMENT,
  `dish_name` varchar(100) NOT NULL,
  `ingredients` varchar(225) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(225) NOT NULL,
  `category` varchar(100) NOT NULL,
  `fileText` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dish_id`),
  KEY `rest_id_idx` (`rest_id`),
  CONSTRAINT `rest_id` FOREIGN KEY (`rest_id`) REFERENCES `rest_profile` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES (1,1,'Falafel','Chickpeas, herbs, onion',10,'middle eastern fast food','Main course','a'),(1,2,'Cookie','Chocolate powder, milk, Wheat, Choco chip',5,'Cooked food that is small, dlat, sweet','Dessert','f'),(3,3,'Cake','Flour, eggs, sugar, milk',7,'Sweet food which is soft and tasty','Dessert','c'),(1,4,'Green salad ','Carrot, Tomato, onion, lettuce, mayo, cheese',9,'Mouth watering healthy salad!','Salads','d'),(1,6,'Tomato slice','Carrot, tomatoes, onions, puffed rice, spices',7,'A south Indian delicacy with tomatoes, spices, and puffed rice!','appetizer',NULL),(1,7,'Pani Puri','Tomatoes, onions, spices, water, carrots',20,'An Indian delicacy that every single soul in this universe should try','Appetizer','pani_puri.jpg'),(1,8,'Biryani','Rice, spices, vegtables',40,'Amazing mouth water rice item ','Main course',NULL),(1,9,'Cha Yen Thai','Ice, water, Lychee',5,'Thai tea with lychee jelly topped with sea salt','Beverage',NULL),(1,11,'Beer Dip','beer, cheese, cheddar cheese, ranch salad',10,'Ranch dressing mix flavors this easy dip packed with shredded cheese. It\'s perfect paired with pretzels.','appetizer','beer_dip.jpg'),(2,12,'Ravioli','Tomato puree, water, cheese, olive oils',15,'Ravioli are a type of pasta comprising a filling enveloped in thin pasta dough.','Main course','ravioli.jpg'),(2,13,'Guacamole','Avacado, Tomatoes, onions, line juice',5,'Guacamole is an avocado-based dip, spread, or salad first developed in Mexico.','Appetizer','guacamole.jpg'),(2,14,'Cheesecake','biscuits, butter, cheese',7,'Cheesecake is a sweet dessert consisting of one or more layers.','Dessert','cheesecake.jpg'),(3,15,'Banan Smoothie','Banana, milk, suhar',10,'Smoothies are a great way to enjoy a healthy meal on the go and the perfect solution to a busy morning.','Beverage','banana_smoothie.jpg'),(3,16,'Biyani','Rice, chicken, spices ',15,'Biryani is a mixed rice dish!!!','Main course','biryani.jpg'),(4,17,'Pasta','Pasta, tomato, cheese, spices',12,'Pasta is a type of food typically made from an unleavened dough of wheat flour!!!!','Main course','pasta.jpg'),(4,18,'Masala puri','Peas, tomato, onions, spices',8,'The most delicious street food!!','Appetizer','masala_puri.jpg'),(4,19,'Yellow rice','Turmeric, rice, onions',10,'Yellow rice is basically white rice that is colored by the spices turmeric or saffron when prepared.','Main course','yellow_rice.jpg'),(11,20,'Pita bread and chicken ','Pita bread, chicken, cheese, onions, tomatoes',15,'These pitas are a combo of the two. They\'re stuffed with grilled chicken, romaine, tomato, cucumber, onion, tzatziki, crispy chickpeas, and of course, feta.','Appetizer','chichen_pita.jpeg'),(11,21,'Rice and beans ','Rice, beans, spices',16,'Rice and beans is type of dish made from a combination of staple foods in many cultures around the world.','Main course','rice_beans.jpg'),(11,22,'Chicken Shawarma','Chicken, cream, cheese, onions, tomatos',10,'Yummy chicken dish make out of shredded chicken!!','Main course','chicken_shawrma.jpg');
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_table`
--

DROP TABLE IF EXISTS `event_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_table` (
  `rest_id` int NOT NULL,
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(45) NOT NULL,
  `event_description` varchar(1000) NOT NULL,
  `event_location` varchar(45) NOT NULL,
  `hashtags` varchar(225) NOT NULL,
  `time` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`event_id`),
  KEY `rest_id_idx` (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_table`
--

LOCK TABLES `event_table` WRITE;
/*!40000 ALTER TABLE `event_table` DISABLE KEYS */;
INSERT INTO `event_table` VALUES (1,1,'Illusions - An Outdoor Exhibition','Explore the wonder of visual perception with CuriOdysseys outdoor exhibition, illusions.','CuriOdyssey','#outdoor # exhibition #odessey','10:00 AM - 5:00 PM','09-02-2020'),(1,2,'CPR Certification in Dublin','The American Heart Association CPR class is 3 hours long. You will learn how to perform CPR on an adult, child and infant, choke-saving and how to use the AED.','Dublin CPR Classes','#CPR #survival #firstaid #outdoor','4: 00 PM - 8:00 PM','10-04-2020'),(1,5,'Color splash','Lets celebrate holi in the most fun way. The festival of color is the most celebrated fun festival in India.','SJSU ','#outdoor #holi #colors','6:00 PM - 8:00 PM','10-23-2020'),(1,6,'Dance America Dance','The dancing competition looking for the greatest dancing talent of America','San Jose Convention center','#dance #hiphop #bollywood ','10:00 AM - 3:00 PM','12-24-2020'),(2,7,'Halloween Party','Get ready to experience the scariest halloween of your life! Welcome to the 10 haunted houses in the town','Dublin','#outdoor # exhibition #halloween #besttime #scary','10:00 AM - 5:00 PM','October 29 2020'),(11,8,'Taste of the Mediterranean ','An event to learn more about the mediterranean food and the culture of middle east!!!','Sajj Med restaurant','#sajj #outdoors #middleeast #foodculture','6:00 PM - 8:00 PM','12-12-2020');
/*!40000 ALTER TABLE `event_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_table`
--

DROP TABLE IF EXISTS `order_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_table` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `dish_id` int NOT NULL,
  `rest_id` int NOT NULL,
  `dish_name` varchar(45) NOT NULL,
  `rest_name` varchar(45) NOT NULL,
  `order_type` varchar(45) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `order_status` varchar(45) DEFAULT NULL,
  `orders` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_table`
--

LOCK TABLES `order_table` WRITE;
/*!40000 ALTER TABLE `order_table` DISABLE KEYS */;
INSERT INTO `order_table` VALUES (1,1,6,1,'Tomato slice','House of Bagles','pickup','Rakshitha','Sathyakumar',NULL,NULL,' Delivered','Delivered order'),(2,1,7,1,'Pani Puri','House of Bagels','delivery','Rakshitha','Sathyakumar',NULL,NULL,'  Cancelled','Delivered order'),(3,1,2,1,'Cookie','House of Bagels','delivery','Rakshitha','Sathyakumar',NULL,NULL,' Picked up','Delivered order'),(4,1,3,3,'Cake','Gum Kuo','pickup','Rakshitha','Sathyakumar',NULL,NULL,' Picked up','Delivered order'),(9,1,6,1,'Tomato slice','House of Bagels','delivery','Rakshitha','Sathyakumar','10/6/2020','17:1:29',' Delivered','Delivered order'),(10,1,3,3,'Cake','Gum Kuo','pickup','Rakshitha','Sathyakumar','10/6/2020','23:53:50',' Delivered','Delivered order'),(11,1,9,1,'Cha Yen Thai','House of Bagels','delivery','Rakshitha','Sathyakumar','10/7/2020','1:9:23',NULL,'New order'),(12,1,7,1,'Pani Puri','','delivery','Rakshitha','Sathyakumar','10/10/2020','17:26:58',NULL,'New order'),(16,1,6,1,'Tomato slice','House of Bagels','delivery','Rakshitha','Sathyakumar','10/10/2020','23:46:54',NULL,'New order'),(17,1,20,11,'Pita bread and chicken ','Sajj Med','delivery','Rakshitha','Sathyakumar','10/11/2020','0:42:33',NULL,'New order');
/*!40000 ALTER TABLE `order_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration_table`
--

DROP TABLE IF EXISTS `registration_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration_table` (
  `event_id` int NOT NULL,
  `registration_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `event_name` varchar(45) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`registration_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration_table`
--

LOCK TABLES `registration_table` WRITE;
/*!40000 ALTER TABLE `registration_table` DISABLE KEYS */;
INSERT INTO `registration_table` VALUES (6,1,'Rakshitha ','Sathyakumar','Dance America Dance',1),(6,2,'Ananya ','Venkat','Dance America Dance',8),(6,3,'Vicky ','Kaushal','Color splash',9),(5,4,'Mathew','Perry','Color Splash',4),(2,5,'Rakshitha','Sathyakumar','CPR Certification in Dublin',1),(7,10,'Ananya','Venkat','Halloween Party',8),(7,11,'Ananya','Venkat','Halloween Party',8),(1,12,'Rakshitha','Sathyakumar','Illusions - An Outdoor Exhibition',1),(5,15,'Rakshitha','Sathyakumar','Color splash',1);
/*!40000 ALTER TABLE `registration_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rest_profile`
--

DROP TABLE IF EXISTS `rest_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rest_profile` (
  `rest_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) NOT NULL,
  `cuisine` varchar(45) DEFAULT NULL,
  `contact_info` varchar(45) DEFAULT NULL,
  `timings` varchar(45) DEFAULT NULL,
  `delivery_method` varchar(45) DEFAULT NULL,
  `fileText` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rest_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rest_profile`
--

LOCK TABLES `rest_profile` WRITE;
/*!40000 ALTER TABLE `rest_profile` DISABLE KEYS */;
INSERT INTO `rest_profile` VALUES (1,'House of Bagels','houseofbagels@gmail.com','password','505 E San Carlos St','San Jose','95112','Indian','(408) 294-6615','6:00 AM - 4:00 PM','Yelp delivery','house_bagels.jpg'),(2,'The Banana Garden','banana.garden@gmail.com','password','4100 Grafton St','Dublin','94568','Continental food','2345678901','10 AM - 5PM','Dine In','banana_garden.jpg'),(3,'Gum Kuo','gum.kuo@gmail.com','password','3720 Fallon Rd','Dublin','94568','Chinese food','3456789012','11AM - 11PM','Curbside pickup','gum_kuo.jpg'),(4,'Eathai','eathai@gmail.com','password','4000 Pimlico Dr','Pleasanton','92113','Thai food','4567890123','12PM - 6PM','Yelp delivery','eathai.jpg'),(11,'Sajj Med','sajjmed@gmail.com','password','Third Street','San Jose','95113','Meditteranean','8766572345','10 AM - 5 PM','Yelp delivery','sajj_med.jpg');
/*!40000 ALTER TABLE `rest_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_table`
--

DROP TABLE IF EXISTS `review_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_table` (
  `rest_ID` int NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `review_id` int NOT NULL AUTO_INCREMENT,
  `reviews` varchar(225) NOT NULL,
  `date` varchar(45) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_table`
--

LOCK TABLES `review_table` WRITE;
/*!40000 ALTER TABLE `review_table` DISABLE KEYS */;
INSERT INTO `review_table` VALUES (1,'Rakshitha','Sathyakumar',1,'My all time favorite might have might have to be a jalapeño bagel or a pesto bagel with veggie cream cheese!','10/2/2020',4),(1,'Ananya ','Venkat',20,'They sell the best bagels in the city','10/3/2020',5),(1,'Navya','Venkat',22,'Hi love the place and the food','10/3/2020',5),(2,'Rakshitha','Sathyakumar',24,'Banana pies and this restaurant are synonyms! Must try if you somewhere around.','10/8/2020',5),(3,'Ananya','Venkat',25,'Authentic thai food is available here. The restaurant special dish is a must try for all the food enthusiasts!!!','10/8/2020',4),(11,'Rakshitha ','Sathyakumar',26,'The middle eastern food is amazing!! But the service and ambiance of the restaurant is not upto the mark','10/10/2020',4);
/*!40000 ALTER TABLE `review_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(225) NOT NULL,
  `last_name` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `dateofbirth` varchar(225) DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL,
  `contactNo` varchar(225) DEFAULT NULL,
  `nickname` varchar(225) DEFAULT NULL,
  `thingsilove` varchar(225) DEFAULT NULL,
  `notyelping` varchar(225) DEFAULT NULL,
  `headline` varchar(225) DEFAULT NULL,
  `website` varchar(225) DEFAULT NULL,
  `yelpingsince` varchar(225) DEFAULT NULL,
  `gender` varchar(225) DEFAULT NULL,
  `fileText` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Rakshitha','Sathyakumar','password','rakshitha@gmail.com','5 September 1995','33 S Third Street Apartments','6692121208','Rakshu','Dogs, Puppies, Rock music','Star gazing','I eat and I know things','www.rakshithasathyakumar.com','May 2019','Female','profile_pic.jpeg'),(2,'Rachel','Green','password','rachel.green@gmail.com','7 May 1964','7th Street','4081234567','Rachel','Shopping, makeup, marketing','Watching tv','Happy go lucky kinda girl','www.rachelgreen.com','June 2016','Female','rachel_green.jpg'),(3,'Monica','Geller','password','monica.geller@gmail.com','4 July 1968','8th Street, California','6789998212','Monica','Dancing, cleaning, cooking','Cleaning','Cleaning is love','www.monicageller.com','September 2016','Female','monica_geller.jpg'),(4,'Mattew','Perry','password','matthew.perry@gmail.com','2 August 1974','Beverly Hills, LA, California','2346798762','Chanandler Bong','Sarcasm','Saracasm','Sarcasm is all I know','www.mattewperry.com','June 2018','Male','mattew_perry.jpg'),(8,'Ananya','Venkat','password','ananya.venka@gmail.com','10 August 2010','3373 Center Parkway','(408) 356-6754','Ani','Dogs. chocolates, pink','Watching tv','I am a baking enthusiast ','www.ananya.com','September 2020','Female',NULL),(9,'Vicky','Kaushal','password@123','vicky@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'Micheal','Scott','password','micheal.scott@gmail.com','','','','','','','','','','Male',NULL);
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'react_sql'
--
/*!50003 DROP PROCEDURE IF EXISTS `add_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_customer`(_first_name VARCHAR(50),
	_last_name VARCHAR(100),
	_email VARCHAR(100),
	_password VARCHAR(100))
BEGIN
DECLARE _user_id INT;
	SELECT user_id INTO _user_id FROM user_profile WHERE email = _email;

	IF _user_id IS NULL THEN
		INSERT INTO user_profile (first_name, last_name, email, password)
		VALUES (_first_name, _last_name, _email, _password);
        
        SELECT 'USER_ADDED' as status;
    ELSE
		SELECT user_id, 'USER_EXISTS' AS status FROM user_profile WHERE email = _email;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_dishes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_dishes`(
_rest_id INT,
_dish_name VARCHAR(45),
_ingredients VARCHAR(225),
_price INT,
_description VARCHAR(225),
_category VARCHAR(45),
_fileText VARCHAR(45)
)
BEGIN
	DECLARE _dish_id INT;
	IF _dish_id IS NULL THEN
		INSERT INTO dishes (rest_id, dish_name, ingredients, price,  description, category, fileText)
		VALUES (_rest_id, _dish_name, _ingredients, _price, _description, _category, _fileText);
        
        SELECT 'DISH_ADDED' as status;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_events` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_events`(
_rest_id INT,
_event_name VARCHAR(45),
_description VARCHAR(1000),
_time VARCHAR(45),
_date VARCHAR(45),
_location VARCHAR(225),
_hashtag VARCHAR(225)
)
BEGIN
	DECLARE _event_id INT;
	IF _event_id IS NULL THEN
		INSERT INTO event_table (rest_id, event_name, event_description, time, date, event_location, hashtags)
		VALUES (_rest_id, _event_name, _description, _time, _date, _location, _hashtag);
        
        SELECT 'EVENT_ADDED' as status;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_order`(
_user_id INT,
_dish_id INT,
_rest_id INT,
_dish_name VARCHAR(45),
_rest_name VARCHAR(45),
_order_type VARCHAR(45),
_first_name VARCHAR(45),
_last_name VARCHAR(45),
_date VARCHAR(45),
_time VARCHAR(45)
)
BEGIN
	DECLARE _order_id INT;
	IF _order_id IS NULL THEN
		INSERT INTO order_table (user_id, dish_id, rest_id, dish_name, rest_name, order_type, first_name, last_name, date, time, orders)
		VALUES (_user_id, _dish_id, _rest_id, _dish_name, _rest_name, _order_type, _first_name, _last_name, _date, _time, 'New order');
        
        SELECT 'ORDER_ADDED' as status;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_regis` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_regis`(
_event_id INT,
_first_name VARCHAR(45),
_last_name VARCHAR(45),
_user_id INT,
_event_name VARCHAR(45)
)
BEGIN
	DECLARE _registration_id INT;
	IF _registration_id IS NULL THEN
		INSERT INTO registration_table (event_id, first_name, last_name, event_name, user_id)
		VALUES (_event_id, _first_name, _last_name, _event_name, _user_id);
        
        SELECT 'REGISTERED' as status;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_restaurant` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_restaurant`(_name VARCHAR(50),
	_email VARCHAR(100),
	_password VARCHAR(100),
	_street VARCHAR(255),
    _zipcode VARCHAR(15))
BEGIN
BEGIN
	DECLARE _rest_id INT;
	SELECT rest_id INTO _rest_id FROM rest_profile WHERE email = _email;

	IF _rest_id IS NULL THEN
		INSERT INTO rest_profile (name, email, password,  street, zipcode)
		VALUES (_name, _email, _password,  _street, _zipcode);
        
        SELECT 'RESTAURANT_ADDED' as status;
    ELSE
		SELECT rest_id, 'RESTAURANT_EXISTS' AS status FROM rest_profile WHERE email = _email;
    END IF;
END ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_reviews` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_reviews`(
_rest_id INT,
_first_name VARCHAR(45),
_last_name VARCHAR(45),
_review VARCHAR(225),
_date VARCHAR(45),
_rating INT
)
BEGIN
	DECLARE _review_id INT;
	IF _review_id IS NULL THEN
		INSERT INTO review_table (rest_ID, first_name, last_name, reviews, date, rating)
		VALUES (_rest_id, _first_name,_last_name, _review, _date, _rating);
        
        SELECT 'REVIEW_ADDED' as status;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_allEvents` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_allEvents`()
BEGIN
	SELECT * 
	FROM event_table
    ORDER BY date;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_allRestaurant` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_allRestaurant`()
BEGIN
SELECT * FROM rest_profile; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_appetizer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_appetizer`(_rest_id INT)
BEGIN
	SELECT *
	FROM dishes u
	WHERE u.rest_id = _rest_id AND u.category="Appetizer";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_beverage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_beverage`(_rest_id INT)
BEGIN
SELECT *

	FROM dishes u
    WHERE u.rest_id = _rest_id AND u.category="Beverage";


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_dessert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_dessert`(_rest_id INT)
BEGIN
SELECT 
	*
	FROM dishes u
    WHERE u.rest_id = _rest_id AND u.category="Dessert";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_editDish` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_editDish`(_rest_id INT,
_dish_id INT)
BEGIN
SELECT * FROM dishes d 
WHERE
d.rest_id = _rest_id and d.dish_id = _dish_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_events` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_events`(_rest_id INT)
BEGIN
SELECT * FROM event_table e
WHERE e.rest_id = _rest_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_maincourse` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_maincourse`(_rest_id INT)
BEGIN
	SELECT *
	FROM dishes u
    WHERE u.rest_id = _rest_id AND u.category="Main course";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_order`(_user_id INT)
BEGIN
SELECT *

	FROM order_table o
    WHERE o.user_id = _user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_orderStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_orderStatus`(_user_id INT, 
_order_status VARCHAR(45))
BEGIN
SELECT * 
FROM order_table
WHERE user_id = _user_id AND order_status = _order_status;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_password` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_password`(_email VARCHAR(100))
BEGIN

IF EXISTS(SELECT user_id FROM user_profile WHERE email = _email) THEN 
BEGIN
		SELECT user_id, email, password, first_name, last_name, 1 AS status FROM user_profile WHERE email = _email;
        END;
	ELSE IF EXISTS (SELECT rest_id FROM rest_profile WHERE email = _email) THEN 
    BEGIN
    SELECT rest_id, name, email, password, street, city, zipcode, 1 as status from rest_profile where email= _email;
    END;
    ELSE
		SELECT 0 AS status;
	END IF;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_regEvents` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_regEvents`(_user_id INT)
BEGIN
	SELECT * 
    FROM registration_table r
    INNER JOIN event_table e
    ON r.event_id = e.event_id
    where user_id = _user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_regUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_regUser`( 
_event_id INT)
BEGIN
SELECT *

	FROM registration_table t
    WHERE t.event_id=_event_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restaurant` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_restaurant`(_rest_id INT)
BEGIN
    
	SELECT *
    FROM rest_profile u
    WHERE u.rest_id = _rest_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_restOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_restOrder`(_rest_id INT)
BEGIN
SELECT *

	FROM order_table o
    WHERE o.rest_id = _rest_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_review` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_review`(_rest_id INT)
BEGIN
SELECT *

	FROM review_table r
    WHERE r.rest_id = _rest_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_salad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_salad`(_rest_id INT)
BEGIN
SELECT 
        *

	FROM dishes u
    WHERE u.rest_id = _rest_id AND u.category="Salads";

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_searchEvent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_searchEvent`(_keyword VARCHAR(45))
BEGIN
		SELECT  * FROM event_table
		WHERE event_name
		LIKE CONCAT('%',_keyword,'%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_searchRest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_searchRest`(_keyword VARCHAR(45), _selectOption INT)
BEGIN
	IF _selectOption = 1
    THEN
		BEGIN
			SELECT  * FROM rest_profile
			WHERE delivery_method
			LIKE CONCAT('%',_keyword,'%');
		END;
    ELSE IF _selectOption = 2
    THEN 
		BEGIN
			SELECT * FROM rest_profile 
			WHERE city 
			LIKE CONCAT('%',_keyword,'%');
		END;
	ELSE IF _selectOption = 3
    THEN 
		BEGIN
			SELECT * FROM rest_profile
			WHERE cuisine
			LIKE CONCAT('%',_keyword,'%');
		END;
	ELSE IF _selectOption = 4
    THEN
		BEGIN
			SELECT * FROM rest_profile
			JOIN dishes
			ON rest_profile.rest_id = dishes.rest_id
			WHERE dish_name 
			LIKE CONCAT('%',_keyword,'%');
		END;
	ELSE IF _selectOption = 5
    THEN 
		BEGIN 
			SELECT * FROM rest_profile
            WHERE name 
            LIKE CONCAT('%',_keyword,'%');
		END;
	ELSE
		BEGIN 
			SELECT * FROM rest_profile;
		END;
		END IF;
	END IF;
END IF;
END IF;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_user`(_user_id INT)
BEGIN
    
	SELECT *
	FROM user_profile u
    WHERE u.user_id = _user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_userDishes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_userDishes`(_rest_id INT)
BEGIN
SELECT *
FROM dishes u
WHERE u.rest_id = _rest_id 
ORDER BY u.category;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_userEvent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_userEvent`(_event_id INT)
BEGIN
SELECT * FROM event_table 
WHERE event_id = _event_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_dish` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_dish`(_rest_id INT,
	_dish_id INT,
    _dish_name VARCHAR(100),
    _ingredients VARCHAR(255),
    _price VARCHAR(50),
    _description VARCHAR(255),
    _category VARCHAR(45))
BEGIN
 IF _rest_id AND _dish_id IS NOT NULL THEN
    BEGIN
		UPDATE dishes
		SET dish_name = _dish_name, ingredients = _ingredients, price = _price, description = _description, category = _category
		WHERE rest_id = _rest_id AND dish_id = _dish_id;
        
		SELECT 'DISH_UPDATED' AS status;
	END;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_orderStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_orderStatus`(_order_id INT,
_order_status VARCHAR(45)
)
BEGIN
		UPDATE order_table
		SET order_status = _order_status,
		orders = CASE WHEN order_status = ' Delivered' THEN 'Delivered order'
				ELSE orders END
		,orders = CASE WHEN order_status = ' Picked up' THEN 'Delivered order'
				ELSE orders END
		,orders = CASE WHEN order_status = ' Cancelled' THEN 'Cancelled order'
				ELSE orders END
		WHERE order_id = _order_id;

SELECT 'ORDER_UPDATED' AS status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_profilePic` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_profilePic`(_fileText VARCHAR(45), _user_id INT)
BEGIN
	UPDATE user_profile 
	SET fileText = _fileText
	WHERE user_id = _user_id;
    
    SELECT 'PROFILEPIC_UPDATED' AS status; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_restaurant` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_restaurant`(_rest_id INT,
    _name VARCHAR(100),
    _street VARCHAR(45),
    _city VARCHAR(45),
    _zipcode VARCHAR(45),
    _email VARCHAR(50),
    _contact_info VARCHAR(45),
    _timings VARCHAR(45),
    _cuisine VARCHAR(45),
    _delivery VARCHAR(45),
    _fileText VARCHAR(45))
BEGIN
 IF _rest_id IS NOT NULL THEN
    BEGIN
		UPDATE rest_profile
		SET name = _name, street = _street, city = _city, zipcode = _zipcode, email = _email, contact_info = _contact_info, timings = _timings, cuisine = _cuisine, delivery_method = _delivery, fileText=_fileText
		WHERE rest_id = _rest_id;
        
		SELECT 'RESTAURANT_UPDATED' AS status;
	END;
    ELSE
		SELECT 'NO_RECORD' AS status;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_user`(_user_id INT,
	_email VARCHAR(50),
    _first_name VARCHAR(100),
    _last_name VARCHAR(100),
    _gender VARCHAR(45),
    _address VARCHAR(255),
    _contact VARCHAR(45),
    _dateofbirth VARCHAR(45),
    _nickname VARCHAR(15),
    _thingsilove VARCHAR(225),
    _notyelping VARCHAR(225),
    _headline VARCHAR(225),
    _website VARCHAR(225),
    _yelpingsince VARCHAR(225)
    )
BEGIN

    IF _user_id IS NOT NULL THEN
    BEGIN
		UPDATE user_profile
		SET first_name = _first_name, last_name = _last_name, email = _email, address = _address, contactNo = _contact, gender = _gender, 
        dateofbirth = _dateofbirth, nickname = _nickname, thingsilove = _thingsilove, notyelping = _notyelping, headline = _headline,
        website = _website, yelpingsince = _yelpingsince
		WHERE user_id = _user_id;
        
		SELECT 'USER_UPDATED' AS status;
	END;
    ELSE
		SELECT 'NO_RECORD' AS status;
    END IF;
    
END ;;
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

-- Dump completed on 2020-10-11  8:15:30
