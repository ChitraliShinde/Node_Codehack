-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2019 at 01:26 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `aboutID` int(11) NOT NULL,
  `aboutImg` varchar(100) NOT NULL,
  `aboutBgImg` varchar(100) NOT NULL,
  `aboutQuote` text NOT NULL,
  `aboutContent` text NOT NULL,
  `aboutCreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `aboutModifiedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `aboutCreatedBy` varchar(200) NOT NULL,
  `aboutModifiedBy` varchar(200) NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`aboutID`, `aboutImg`, `aboutBgImg`, `aboutQuote`, `aboutContent`, `aboutCreatedDate`, `aboutModifiedDate`, `aboutCreatedBy`, `aboutModifiedBy`, `status`) VALUES
(1, 'about.gif', '', 'Curiosity will conquer fear even more than bravery will...', 'CodeHack provides the information about technology as well as programming languages.\r\nWe also provides info of trending technologies.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '', '0');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image` varchar(255) NOT NULL,
  `article_views` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `description`, `created_at`, `image`, `article_views`) VALUES
(1, 'Article 01', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                                                                    \r\n                                                                ', '2019-02-12 06:23:27', '6wgg2f2dgjr7mpksm.jpeg', 50),
(7, 'Article_02', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. ', '2019-01-30 11:55:56', '6wgg2f6xkjr7ohhs3.jpeg', 25),
(8, 'Article 03', 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2019-01-31 17:39:42', '6wgg2f6hkjr8t4dwc.gif', 0),
(9, 'Article 04', 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '2019-01-31 17:39:49', '6wgg2f6hkjr8t52a8.gif', 25),
(10, 'Article 05', 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.', '2019-01-31 17:39:53', '6wgg2f6hkjr8t66lx.jpeg', 30),
(11, 'Article 06', 'More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2019-01-31 17:39:58', '6wgg2f6hkjr8t8ltn.gif', 32),
(13, 'Article 05', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '2019-01-29 06:13:17', '6wgg2f7p4jrhd8hon.jpeg', 0),
(14, 'Article 07', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ... The first word, “Lorem,” isn\'t even a word; instead it\'s a piece of the word “dolorem,” meaning pain, suffering, or sorrow.', '2019-01-30 06:57:34', '6wgg2f8iojriu9ahm.jpeg', 0),
(15, 'Article 07', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ... The first word, “Lorem,” isn\'t even a word; instead it\'s a piece of the word “dolorem,” meaning pain, suffering, or sorrow.', '2019-02-12 05:50:42', '6wgg2f8iojriubr11.jpeg', 0),
(16, 'Article 08', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ... The first word, “Lorem,” isn\'t even a word; instead it\'s a piece of the word “dolorem,” meaning pain, suffering, or sorrow.', '2019-01-30 07:01:24', '6wgg2f8iojriue8do.jpeg', 0),
(17, 'article_001', '1111112345678', '2019-01-31 08:49:20', '6wgg2fl4jrkdjhmw.jpeg', 0),
(18, '123', '123\r\n456\r\n786\r\n1\r\n25', '2019-02-12 06:26:47', '6wgg2fl4jrkdmnio.jpeg', 0),
(19, 'test', 'aqZYGHUIKMHGFDS', '2019-02-01 10:16:50', '6wgg2f99ojrlw99pg.jpeg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` bigint(20) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `parent_id` bigint(20) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `comment` text NOT NULL,
  `comment_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `post_id`, `parent_id`, `username`, `email`, `comment`, `comment_date`) VALUES
(35, 1, 0, 'abc', 'abc@gmail.com', 'dfghjk', '2019-01-24 10:48:11'),
(37, 8, 0, 'abc', 'abc@gmail.com', '45120', '2019-01-24 10:49:56'),
(38, 1, 0, 'abc', 'abc@gmail.com', '1111111111111', '2019-01-24 10:53:45'),
(39, 11, 0, 'acd', 'abc@gmail.com', 'ASDF', '2019-01-24 11:17:10'),
(41, 7, 0, 'abc', 'abc@gmail.com', '444444444444', '2019-01-24 11:35:24'),
(42, 8, 0, '123', 'abc@gmail.com', 'aaaa', '2019-01-24 11:36:55'),
(43, 8, 0, '123', 'abc@gmail.com', ' nnn', '2019-01-24 11:39:41'),
(44, 7, 0, '123', 'abc@gmail.com', 'zzzzzz', '2019-01-24 11:46:18'),
(45, 8, 0, '123', 'abc@gmail.com', 'aqwsedrt', '2019-01-24 11:48:33'),
(46, 8, 0, '123', 'abc@gmail.com', '63521', '2019-01-24 14:27:11'),
(47, 11, 0, '11', 'abc@gmail.com', '1111111', '2019-01-25 12:55:17'),
(48, 7, 0, 'comment', 'abc@gmail.com', '1111111111111111', '2019-01-25 13:06:40'),
(49, 7, 0, '11', '', '', '2019-01-25 13:08:54'),
(50, 7, 0, '11', 'abc@gmail.com', '1111111111111111111', '2019-01-25 13:09:03'),
(51, 8, 0, 'comment', 'abc@gmail.com', 'qqq', '2019-01-25 13:11:41'),
(52, 8, 0, '1', 'abc@gmail.com', '1', '2019-01-25 13:13:18'),
(53, 8, 0, '2', 'abc@gmail.com', '3', '2019-01-25 14:42:40'),
(54, 8, 0, '2', 'abc@gmail.com', '3', '2019-01-25 14:42:54'),
(55, 1, 0, '123', 'abc@gmail.com', '1', '2019-01-25 14:45:32'),
(56, 1, 0, '123', 'abc@gmail.com', 'awsed', '2019-01-25 14:51:37'),
(57, 7, 0, '3', 'abc@gmail.com', 'eddrfcvvt;l.,kjhgfvdcsx', '2019-01-25 15:49:00'),
(58, 1, 0, '', '', '', '2019-01-27 15:54:16'),
(59, 7, 0, 'abc', 'abc@gmail.com', 'asdfg', '2019-01-27 15:55:21'),
(60, 7, 0, '22', 'a@gmail.com', 'qwedrftgyhj', '2019-01-27 15:55:58'),
(61, 7, 0, '22', 'a@gmail.com', 'qwedrftgyhj', '2019-01-27 15:55:59'),
(62, 1, 0, 'test ', 'test@gmail.com', 'this is test comment', '2019-01-29 11:09:48'),
(63, 1, 0, '1', '2@gmail.com', 'wsdefrtgy', '2019-01-29 11:25:16'),
(64, 8, 0, '88', '88@gmail.com', '8888888888888888', '2019-01-29 12:14:46'),
(65, 8, 0, '', '88@gmail.com', '8888888888888888', '2019-01-29 12:19:26'),
(66, 1, 0, 'comment', 'c@gmail.com', 'zmfcsd;fmcds;', '2019-01-29 14:19:02'),
(67, 7, 0, 'a', 'a@gmail.com', 'azswdefg', '2019-01-29 14:29:23'),
(68, 7, 0, 'a', 'a@gmail.com', 'azswdefg', '2019-01-29 14:29:38'),
(69, 7, 0, 'comment', 'test@gmail.com', 'azsdfghj', '2019-01-29 14:41:32'),
(70, 1, 0, 'abc', 'a@gmail.com', 'ujlkjhgffds', '2019-01-29 14:43:06'),
(71, 7, 0, 'c', 'a@gmail.com', 'sxdcrtyhu', '2019-01-29 14:45:59'),
(72, 7, 0, 'abc', 'test@gmail.com', 'xcdfvgb hnjmk,jhgfd', '2019-01-29 14:48:13'),
(73, 7, 0, '12', 'a@gmail.com', 'awssedrftgyhj', '2019-01-29 14:49:08'),
(74, 8, 0, '1`2', '2@gmail.com', 'qww', '2019-01-29 15:43:04'),
(75, 8, 0, 'asd', 'a@gmail.com', 'ASWDEFGHJ', '2019-01-29 15:47:26'),
(76, 18, 0, 'abc', 'ad@gmail.com', 'swdas;f', '2019-01-31 23:28:42'),
(77, 19, 0, 'chitrali', 'chitrali@gmail.com', 'this is test comment', '2019-02-02 22:06:49'),
(78, 9, 0, 'Chitrali Shinde', 'chitralishinde1234@gmail.com', 'test', '2019-02-07 21:09:17'),
(79, 9, 0, 'abc', 'sff@gmail.com', 'sdxcgfhj\n', '2019-02-12 12:37:04'),
(80, 9, 0, 'abc', 'sff@gmail.com', 'sdxcgfhj\n', '2019-02-12 12:37:06'),
(81, 11, 0, 'sdxdcfvvghjk', 'sadfg@sedfghy', 'wasertyu', '2019-02-14 20:13:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` text NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `confirm_password` text NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `confirm_password`, `created_date`) VALUES
(1, 'admin', '', 'admin', '', '2018-12-27 09:33:23'),
(20, 'admin', 'admin@gmail.com', 'Admin1', 'Admin1', '2019-01-30 09:38:17'),
(21, 'asd', 'asd@asd.asd', '1234Zz', '1234Zz', '2019-01-30 09:46:01'),
(22, '123', '123@123.123', 'Chitrali1', 'Chitrali1', '2019-01-30 09:47:39'),
(23, '123', 'abc@gmail.com', 'chitraliS1', 'chitraliS1', '2019-01-30 10:52:23'),
(24, '123', '123@gmail.com', 'Chitrali12', 'Chitrali12', '2019-01-30 10:53:41'),
(25, 'user', 'user@gmail.com', 'User1234', 'User1234', '2019-01-31 06:55:15'),
(26, 'asd', 'AS@asdf.com', 'Aa123456', 'Aa123456', '2019-02-01 10:07:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`aboutID`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `aboutID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
