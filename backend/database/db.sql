-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2025 at 06:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `file_name` varchar(200) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `position` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `post_id`, `file_name`, `content`, `position`) VALUES
(42, 31, 'images_1763138157571cr7.jpg', 'the Greatest of all time cristiano ronaldo', 0),
(43, 31, 'images_1763138157573ronaldo2.jpg', 'from 2003 to 2025 cr7 makes record', 1),
(44, 32, 'images_1763138341438roman.jpg', 'The big Dog the best version of Roman reigns', 0),
(45, 32, 'images_1763138341439roman2.jpg', 'The beast Brock lesnar feared him', 1),
(46, 33, 'images_1763140078883ms_larney.jpg', 'the queen of the great Empire ', 0),
(47, 33, 'images_1763140078884ms_larney2.jpg', 'persion in sports', 1),
(48, 34, 'images_1763140146928ms_larney2.jpg', 'passion in sports games of basket ball ', 0),
(49, 34, 'images_1763140146928ms_larney.jpg', 'mrs larney what a great na,e', 1);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `category` varchar(200) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category`, `title`, `author`, `created_at`) VALUES
(31, 'sports', 'Cristiano Ronaldo', 'Decool', '2025-11-14 16:35:57'),
(32, 'sports', 'Roman Reigns', 'Fitness', '2025-11-14 16:39:01'),
(33, 'sports', 'Ms_larney', 'Kulet', '2025-11-14 17:07:58'),
(34, 'sports', 'Ms_larney', 'Kulet', '2025-11-14 17:09:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'fitness', 'fitnessdecool@gmail.com', '$argon2id$v=19$m=655', '2025-11-13 09:41:21'),
(2, 'derek', 'dg@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$dQFLmFUZ3c5VrOdvOESymQ$XEvWa4ldw3DzsaXxBAkPDcgH2GP4lKWWqpiCj9KfeDM', '2025-11-13 15:25:59'),
(3, 'DEREK', 'fitenenn@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$b4p+7ilYeO/j2cSzhlursw$8NS3lmGBGbXIXXSip7jnxsouPm7qrLsjGSvZ3IPri9w', '2025-11-13 15:37:03'),
(4, 'derek', 'decool@gamil.com', '$argon2id$v=19$m=65536,t=3,p=4$2sEyDJsKmooSIwYz7exADg$8ewuCkVgqL4HozfhrPUOhy7RfUGkl98SkRvCQtvUG38', '2025-11-13 16:39:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
