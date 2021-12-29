-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2019 at 09:11 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mind_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `sr` int(11) NOT NULL,
  `id` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `NR1` int(11) NOT NULL,
  `NR2` int(11) NOT NULL,
  `NR3` int(11) NOT NULL,
  `NR4` int(11) NOT NULL,
  `NR5` int(11) NOT NULL,
  `AccNR1` float NOT NULL,
  `AccNR2` float NOT NULL,
  `AccNR3` float NOT NULL,
  `AccNR4` float NOT NULL,
  `AccNR5` float NOT NULL,
  `TAccNR1` float NOT NULL,
  `TAccNR2` float NOT NULL,
  `TAccNR3` float NOT NULL,
  `TAccNR4` float NOT NULL,
  `TAccNR5` float NOT NULL,
  `DNR1` time NOT NULL,
  `DNR2` time NOT NULL,
  `DNR3` time NOT NULL,
  `DNR4` time NOT NULL,
  `DNR5` time NOT NULL,
  `R1` int(11) NOT NULL,
  `R2` int(11) NOT NULL,
  `R3` int(11) NOT NULL,
  `R4` int(11) NOT NULL,
  `R5` int(11) NOT NULL,
  `TAccR1` float NOT NULL,
  `TAccR2` float NOT NULL,
  `TAccR3` float NOT NULL,
  `TAccR4` float NOT NULL,
  `TAccR5` float NOT NULL,
  `AccR1` float NOT NULL,
  `AccR2` float NOT NULL,
  `AccR3` float NOT NULL,
  `AccR4` float NOT NULL,
  `AccR5` float NOT NULL,
  `DR1` time NOT NULL,
  `DR2` time NOT NULL,
  `DR3` time NOT NULL,
  `DR4` time NOT NULL,
  `DR5` time NOT NULL,
  `O1` tinyint(1) DEFAULT NULL,
  `O2` tinyint(1) DEFAULT NULL,
  `O3` tinyint(1) DEFAULT NULL,
  `O4` tinyint(1) DEFAULT NULL,
  `O5` tinyint(1) DEFAULT NULL,
  `O6` tinyint(1) DEFAULT NULL,
  `O7` tinyint(1) DEFAULT NULL,
  `O8` tinyint(1) DEFAULT NULL,
  `O9` tinyint(1) DEFAULT NULL,
  `AccO1` float NOT NULL,
  `AccO2` float NOT NULL,
  `AccO3` float NOT NULL,
  `AccO4` float NOT NULL,
  `AccO5` float NOT NULL,
  `AccO6` float NOT NULL,
  `AccO7` float NOT NULL,
  `AccO8` float NOT NULL,
  `AccO9` float NOT NULL,
  `TAccO1` float NOT NULL,
  `TAccO2` float NOT NULL,
  `TAccO3` float NOT NULL,
  `TAccO4` float NOT NULL,
  `TAccO5` float NOT NULL,
  `TAccO6` float NOT NULL,
  `TAccO7` float NOT NULL,
  `TAccO8` float NOT NULL,
  `TAccO9` float NOT NULL,
  `DO1` time NOT NULL,
  `DO2` time NOT NULL,
  `DO3` time NOT NULL,
  `DO4` time NOT NULL,
  `DO5` time NOT NULL,
  `DO6` time NOT NULL,
  `DO7` time NOT NULL,
  `DO8` time NOT NULL,
  `DO9` time NOT NULL,
  `PreInternal` int(11) NOT NULL,
  `PreExternal` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`sr`, `id`, `time`, `NR1`, `NR2`, `NR3`, `NR4`, `NR5`, `AccNR1`, `AccNR2`, `AccNR3`, `AccNR4`, `AccNR5`, `TAccNR1`, `TAccNR2`, `TAccNR3`, `TAccNR4`, `TAccNR5`, `DNR1`, `DNR2`, `DNR3`, `DNR4`, `DNR5`, `R1`, `R2`, `R3`, `R4`, `R5`, `TAccR1`, `TAccR2`, `TAccR3`, `TAccR4`, `TAccR5`, `AccR1`, `AccR2`, `AccR3`, `AccR4`, `AccR5`, `DR1`, `DR2`, `DR3`, `DR4`, `DR5`, `O1`, `O2`, `O3`, `O4`, `O5`, `O6`, `O7`, `O8`, `O9`, `AccO1`, `AccO2`, `AccO3`, `AccO4`, `AccO5`, `AccO6`, `AccO7`, `AccO8`, `AccO9`, `TAccO1`, `TAccO2`, `TAccO3`, `TAccO4`, `TAccO5`, `TAccO6`, `TAccO7`, `TAccO8`, `TAccO9`, `DO1`, `DO2`, `DO3`, `DO4`, `DO5`, `DO6`, `DO7`, `DO8`, `DO9`, `PreInternal`, `PreExternal`, `score`) VALUES
(127, 'rec', '2019-04-03 19:09:06', 0, 20, 0, 0, 20, 0, 0.2, 0, 0, 0.2, 0.6, 0.6, 0.6, 0.6, 0.68, '00:00:24', '00:00:30', '00:00:29', '00:00:26', '00:00:28', 70, 60, 40, 60, 10, 0.88, 0.84, 0.72, 0.8, 0.64, 0.7, 0.6, 0.4, 0.6, 0.1, '00:01:20', '00:00:50', '00:01:15', '00:00:45', '00:00:57', 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.3, 0, 0.1, 0.1, 0, 0.4, 0.3, 0, 0, 0.72, 0.6, 0.52, 0.56, 0.6, 0.68, 0.56, 0.6, 0.6, '00:02:30', '00:00:23', '00:00:26', '00:00:42', '00:00:26', '00:00:28', '00:00:27', '00:00:26', '00:00:23', 41, 77, 391);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`sr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `sr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
