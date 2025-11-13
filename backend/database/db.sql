-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2025 at 05:59 PM
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
(27, 23, 'images_1762936643260images (15).jpeg', 'the image 1 odosakalska', 0),
(28, 23, 'images_1762936643262images (18).jpeg', 'the image 2 odosakalska', 1),
(29, 24, 'images_1762936757026images (15).jpeg', 'the image 1 odosakalska', 0),
(30, 24, 'images_1762936757027images (18).jpeg', 'the image 2 odosakalska', 1),
(31, 25, 'images_1762936777747images (15).jpeg', 'the image 1 odosakalska', 0),
(32, 25, 'images_1762936777748images (18).jpeg', 'the image 2 odosakalska', 1);

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
(23, 'sports', 'Cristiano Ronaldo', 'decool', '2025-11-12 08:37:23'),
(24, 'sports', 'Cristiano Ronaldo', 'decool', '2025-11-12 08:39:17'),
(25, 'sports', 'Cristiano Ronaldo', 'decool', '2025-11-12 08:39:37');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
