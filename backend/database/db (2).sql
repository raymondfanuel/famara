-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2025 at 04:36 PM
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
(141, 107, 'images_1763482280743cr7.jpg', 'The history of Sports has declared Cristiano Ronaldo to be the greatest of all time many people know him as cr7. Now Ronaldo has said that he wont be playing for  more than two years because of his age now he has to retire sports and focus on other things in life. playing football for him is passion', 0),
(142, 108, 'images_1763523795792ms_larney.jpg', 'thr yhhjj jkjkjjkljkj jkkjjkkjkljioj jkjk jkljkl jkljlkj jklj  kjklj jklj jkljl kjkljkl klljklj kjkljlk kjlj ljlkjlk ljkljl lkjlkjlk kljkljlkkljhkj kljkljlkjkl jljklkllkjl jkljlklk kljkljlkklj kljljl jl jl jjjkl jk klj k kklkl kljkjkljkljl kjlkjlk juuuy yhiuhuih hiuhuihui uhhiuh uiuhui hiuhhhi hhuihiu huiiu uhiuiuu uuiuu uuiiuh uh uhuihiu uiuhhi iuhuihuih uhihihih uuihiuhihiuh ', 0),
(143, 109, 'images_1763524069437roman.jpg', 'the big dog is back and is strong than ever. and next week he is going to face the beast brocklesnar there battles have always been good to watch. it is as if they were born to be sworn enemies for life. let us wait and see who will emerge victorious', 0),
(144, 110, 'images_1763524082691roman2.jpg', 'the big dog is back and is strong than ever. and next week he is going to face the beast brocklesnar there battles have always been good to watch. it is as if they were born to be sworn enemies for life. let us wait and see who will emerge victorious', 0),
(145, 111, 'images_1763524109842ronaldo2.jpg', 'the big dog is back and is strong than ever. and next week he is going to face the beast brocklesnar there battles have always been good to watch. it is as if they were born to be sworn enemies for life. let us wait and see who will emerge victorious', 0),
(146, 112, 'images_1763524115040ronaldo2.jpg', 'the big dog is back and is strong than ever. and next week he is going to face the beast brocklesnar there battles have always been good to watch. it is as if they were born to be sworn enemies for life. let us wait and see who will emerge victorious', 0),
(147, 113, 'images_1763652471051cr7.jpg', 'The CEO Decool signs a contract with the greatest of all time cristiano Ronaldo now they will be working together in AuraLinx \r\n', 0);

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
(107, 'sports', 'Ronaldo declared as greatest of all time', 'Decool', '2025-11-18 16:11:20'),
(108, 'politics', 'ms_larney', 'Kulet', '2025-11-19 03:43:15'),
(109, 'politics', 'Roman Reigns is back ', 'Kulet', '2025-11-19 03:47:49'),
(110, 'politics', 'Roman Reigns is back ', 'Kulet', '2025-11-19 03:48:02'),
(111, 'politics', 'Roman Reigns is back ', 'Kulet', '2025-11-19 03:48:29'),
(112, 'politics', 'Roman Reigns is back ', 'Kulet', '2025-11-19 03:48:35'),
(113, 'sports', 'Decool signs a Contract with cristiano Ronaldo', 'kulet', '2025-11-20 15:27:51');

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
(4, 'derek', 'decool@gamil.com', '$argon2id$v=19$m=65536,t=3,p=4$2sEyDJsKmooSIwYz7exADg$8ewuCkVgqL4HozfhrPUOhy7RfUGkl98SkRvCQtvUG38', '2025-11-13 16:39:32'),
(5, 'Decool', 'decool@gamail.com', '$argon2id$v=19$m=65536,t=3,p=4$t4TRjIw0BxfZmEHlNGlXhw$BOQHhlTgkQ8dPmjGrf1WXcWGuTKyFzRiRNfiQ/DV7aE', '2025-11-16 15:56:14'),
(6, 'Fitnessdecool', 'dc@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$JjcfA7AY/9Afh/Fucx9xfg$lMzbe37f0ZXsPqK+eb90qfiWEjeBDSCjsYX9T+iXw5k', '2025-11-16 16:23:01');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
