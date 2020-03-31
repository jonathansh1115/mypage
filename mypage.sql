-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2020 at 12:13 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mypage`
--

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
CREATE TABLE IF NOT EXISTS `card` (
  `card_id` int(3) NOT NULL AUTO_INCREMENT,
  `card_img_link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_text` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`card_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `card`
--

INSERT INTO `card` (`card_id`, `card_img_link`, `card_title`, `card_text`, `date_added`) VALUES
(3, 'http://localhost:80/mypage/api/uploads/card/743303-138503.jpg', 'dsdasa', 'dsad', '2020-03-28 12:40:16'),
(4, 'http://localhost:80/mypage/api/uploads/card/430452-21500764953_a6277f6f19_k.0.jpg', 'ddd', 'ddd', '2020-03-28 12:41:04'),
(5, 'http://localhost:80/mypage/api/uploads/card/10797-12-120644_mac-osx-captain-original-mac-os-el-capitan.jpg', 'asdsadsadas', 'dsadsadasdsadsadasdsad adslkjl sakldj kljaksd ljsa ldkjlsa kdjlksj d', '2020-03-28 12:41:16'),
(6, 'http://localhost:80/mypage/api/uploads/card/924725-react-styleguidst-logo-5c3d736c4b-seeklogo.com.png', '123213213', '21321323123', '2020-03-28 12:45:57'),
(7, 'http://localhost:80/mypage/api/uploads/card/514205-maxresdefault-(1).jpg', '12321321323', 'moptototoot', '2020-03-28 12:46:08'),
(8, 'http://localhost:80/mypage/api/uploads/card/172769-img_9332.jpeg', 'Me ', 'xD', '2020-03-28 13:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `carousel_img`
--

DROP TABLE IF EXISTS `carousel_img`;
CREATE TABLE IF NOT EXISTS `carousel_img` (
  `img_id` int(1) NOT NULL AUTO_INCREMENT,
  `img_link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt_text` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `header` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `caption` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`img_id`)
) ENGINE=MyISAM AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carousel_img`
--

INSERT INTO `carousel_img` (`img_id`, `img_link`, `alt_text`, `header`, `caption`, `date_added`) VALUES
(63, 'http://localhost:80/mypage/api/uploads/119300-63603469-hennessey-venom-gt-wallpapers.jpg', '', 'Mc la ren', 'FAST n FURIOUS ohHH yEEeahh ', '2020-03-27 09:21:14'),
(61, 'http://localhost:80/mypage/api/uploads/247372-12-120644_mac-osx-captain-original-mac-os-el-capitan.jpg', '', 'Mac book', 'HEHEHE', '2020-03-27 09:19:39'),
(55, 'http://localhost:80/mypage/api/uploads/106897-78345.jpg', '', 'Death Star', 'Cartoon version', '2020-03-27 04:50:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_level` int(1) NOT NULL DEFAULT 1,
  `time_created` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `user_level`, `time_created`) VALUES
(81, 'asd', 'asd', 'f10e2821bbbea527ea02200352313bc059445190', 1, '2020-03-26 03:17:01'),
(82, 'jonathan', 'jonathansh1115@gmail.com', '123', 1, '2020-03-26 08:58:44'),
(83, '', '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 0, '2020-03-26 09:00:08'),
(84, '123123123', '123123', '88ea39439e74fa27c09a4fc0bc8ebe6d00978392', 1, '2020-03-26 09:00:08'),
(91, 'qweqweqwe', 'qew', '141f87be1330a105a87923f4ee6383bd7de46541', 1, '2020-03-31 11:53:32'),
(86, 'jonathansh1115', 'jonathansh1115@gmail.com2', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', 1, '2020-03-30 11:29:30');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
