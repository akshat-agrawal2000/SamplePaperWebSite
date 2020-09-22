-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2020 at 04:46 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `cname` varchar(50) NOT NULL,
  `cemail` varchar(50) NOT NULL,
  `csubject` varchar(50) NOT NULL,
  `cmessage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`cname`, `cemail`, `csubject`, `cmessage`) VALUES
('ramu', 'ramu@gmail.com', 'Fee', 'what is fee structure for 10th class '),
('akshat', 'akshat@gmail.com', 'Transport', 'Is Bus Transport available for Inole'),
('vishal', 'vishal@gmail.com', 'Regarding the Electricity', 'do School have power Backup');

-- --------------------------------------------------------

--
-- Table structure for table `login_user`
--

CREATE TABLE `login_user` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_user`
--

INSERT INTO `login_user` (`id`, `name`, `user_name`, `password`) VALUES
(1, 'ramu', 'VJIT', 'VJIT@123'),
(2, 'akshat', 'akshat', 'akshat123');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `year` varchar(3) NOT NULL,
  `branch` varchar(6) NOT NULL,
  `subject_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`year`, `branch`, `subject_name`) VALUES
('i', 'cse', 'Applied Physics'),
('i', 'cse', 'Basic Electrical Engineering'),
('i', 'cse', 'Engineering Graphics and Modulation'),
('i', 'cse', 'English'),
('i', 'cse', 'Mathematics-I'),
('i', 'cse', 'Mathematics-II'),
('i', 'cse', 'Programming For Problem Solving-I'),
('i', 'cse', 'Programming For Problem Solving-II'),
('i', 'it', 'Applied Physics'),
('i', 'it', 'Basic Electrical Engineering'),
('i', 'it', 'Engineering Graphics and Modulation'),
('i', 'it', 'English'),
('i', 'it', 'Mathematics-I'),
('i', 'it', 'Mathematics-II'),
('i', 'it', 'Programming For Problem Solving-I'),
('i', 'it', 'Programming For Problem Solving-II'),
('i', 'civil', 'Applied Physics'),
('i', 'civil', 'Basic Electrical Engineering'),
('i', 'civil', 'Engineering Graphics and Modulation'),
('i', 'civil', 'English'),
('i', 'civil', 'Mathematics-I'),
('i', 'civil', 'Mathematics-II'),
('i', 'civil', 'Programming For Problem Solving-I'),
('i', 'civil', 'Programming For Problem Solving-II'),
('i', 'mech', 'Applied Physics'),
('i', 'mech', 'Basic Electrical Engineering'),
('i', 'mech', 'Engineering Graphics and Modulation'),
('i', 'mech', 'English'),
('i', 'mech', 'Mathematics-I'),
('i', 'mech', 'Mathematics-II'),
('i', 'mech', 'Programming For Problem Solving-I'),
('i', 'mech', 'Programming For Problem Solving-II'),
('i', 'ece', 'Applied Physics'),
('i', 'ece', 'Basic Electrical Engineering'),
('i', 'ece', 'Engineering Graphics and Modulation'),
('i', 'ece', 'English'),
('i', 'ece', 'Mathematics-I'),
('i', 'ece', 'Mathematics-II'),
('i', 'ece', 'Programming For Problem Solving-I'),
('i', 'ece', 'Programming For Problem Solving-II'),
('i', 'eee', 'Applied Physics'),
('i', 'eee', 'Basic Electrical Engineering'),
('i', 'eee', 'Engineering Graphics and Modulation'),
('i', 'eee', 'English'),
('i', 'eee', 'Mathematics-I'),
('i', 'eee', 'Mathematics-II'),
('i', 'eee', 'Programming For Problem Solving-I'),
('i', 'eee', 'Programming For Problem Solving-II'),
('ii', 'cse', 'Probability and Statistics'),
('ii', 'cse', 'Digital logic Design'),
('ii', 'cse', 'Electronic Device and Circuit'),
('ii', 'cse', 'Data Structures'),
('ii', 'cse', 'Mathematical Foundations of Computer Science'),
('ii', 'cse', 'Python Programming'),
('ii', 'cse', 'Gender Sensitization'),
('ii', 'cse', 'Design and Analysis of Algorithms'),
('ii', 'cse', 'Software Engineering'),
('ii', 'cse', 'Database Management System'),
('ii', 'cse', 'Professional Communication'),
('ii', 'cse', 'Environmental Science'),
('ii', 'it', 'Probability and Statistics'),
('ii', 'it', 'Digital logic Design'),
('ii', 'it', 'Electronic Device and Circuit'),
('ii', 'it', 'Data Structures'),
('ii', 'it', 'Mathematical Foundations of Computer Science'),
('ii', 'it', 'Python Programming'),
('ii', 'it', 'Gender Sensitization'),
('ii', 'it', 'Design and Analysis of Algorithms'),
('ii', 'it', 'Software Engineering'),
('ii', 'it', 'Database Management System'),
('ii', 'it', 'Professional Communication'),
('ii', 'it', 'Environmental Science'),
('i', 'cse', 'Chemistry'),
('i', 'it', 'Chemistry'),
('i', 'mech', 'Chemistry'),
('i', 'civil', 'Chemistry'),
('i', 'ece', 'Chemistry'),
('i', 'eee', 'Chemistry'),
('ii', 'cse', 'Computer Oraginazation'),
('ii', 'it', 'Computer Oraginazation'),
('ii', 'it', 'Java Programming'),
('ii', 'cse', 'Java Programming');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
