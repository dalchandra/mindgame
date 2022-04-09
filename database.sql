SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `optimal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `optimal`;

CREATE TABLE `info` (
  `sr` int NOT NULL,
  `id` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `NR1` int DEFAULT NULL,
  `NR2` int DEFAULT NULL,
  `NR3` int DEFAULT NULL,
  `NR4` int DEFAULT NULL,
  `NR5` int DEFAULT NULL,
  `AccNR1` float DEFAULT NULL,
  `AccNR2` float DEFAULT NULL,
  `AccNR3` float DEFAULT NULL,
  `AccNR4` float DEFAULT NULL,
  `AccNR5` float DEFAULT NULL,
  `TAccNR1` float DEFAULT NULL,
  `TAccNR2` float DEFAULT NULL,
  `TAccNR3` float DEFAULT NULL,
  `TAccNR4` float DEFAULT NULL,
  `TAccNR5` float DEFAULT NULL,
  `DNR1` time DEFAULT NULL,
  `DNR2` time DEFAULT NULL,
  `DNR3` time DEFAULT NULL,
  `DNR4` time DEFAULT NULL,
  `DNR5` time DEFAULT NULL,
  `R1` int DEFAULT NULL,
  `R2` int DEFAULT NULL,
  `R3` int DEFAULT NULL,
  `R4` int DEFAULT NULL,
  `R5` int DEFAULT NULL,
  `TAccR1` float DEFAULT NULL,
  `TAccR2` float DEFAULT NULL,
  `TAccR3` float DEFAULT NULL,
  `TAccR4` float DEFAULT NULL,
  `TAccR5` float DEFAULT NULL,
  `AccR1` float DEFAULT NULL,
  `AccR2` float DEFAULT NULL,
  `AccR3` float DEFAULT NULL,
  `AccR4` float DEFAULT NULL,
  `AccR5` float DEFAULT NULL,
  `DR1` time DEFAULT NULL,
  `DR2` time DEFAULT NULL,
  `DR3` time DEFAULT NULL,
  `DR4` time DEFAULT NULL,
  `DR5` time DEFAULT NULL,
  `O1` tinyint(1) DEFAULT NULL,
  `O2` tinyint(1) DEFAULT NULL,
  `O3` tinyint(1) DEFAULT NULL,
  `O4` tinyint(1) DEFAULT NULL,
  `O5` tinyint(1) DEFAULT NULL,
  `O6` tinyint(1) DEFAULT NULL,
  `O7` tinyint(1) DEFAULT NULL,
  `O8` tinyint(1) DEFAULT NULL,
  `O9` tinyint(1) DEFAULT NULL,
  `AccO1` float DEFAULT NULL,
  `AccO2` float DEFAULT NULL,
  `AccO3` float DEFAULT NULL,
  `AccO4` float DEFAULT NULL,
  `AccO5` float DEFAULT NULL,
  `AccO6` float DEFAULT NULL,
  `AccO7` float DEFAULT NULL,
  `AccO8` float DEFAULT NULL,
  `AccO9` float DEFAULT NULL,
  `TAccO1` float DEFAULT NULL,
  `TAccO2` float DEFAULT NULL,
  `TAccO3` float DEFAULT NULL,
  `TAccO4` float DEFAULT NULL,
  `TAccO5` float DEFAULT NULL,
  `TAccO6` float DEFAULT NULL,
  `TAccO7` float DEFAULT NULL,
  `TAccO8` float DEFAULT NULL,
  `TAccO9` float DEFAULT NULL,
  `DO1` time DEFAULT NULL,
  `DO2` time DEFAULT NULL,
  `DO3` time DEFAULT NULL,
  `DO4` time DEFAULT NULL,
  `DO5` time DEFAULT NULL,
  `DO6` time DEFAULT NULL,
  `DO7` time DEFAULT NULL,
  `DO8` time DEFAULT NULL,
  `DO9` time DEFAULT NULL,
  `PreInternal` int DEFAULT NULL,
  `PreExternal` int DEFAULT NULL,
  `score` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `info` (`sr`, `id`, `NR1`, `NR2`, `NR3`, `NR4`, `NR5`, `AccNR1`, `AccNR2`, `AccNR3`, `AccNR4`, `AccNR5`, `TAccNR1`, `TAccNR2`, `TAccNR3`, `TAccNR4`, `TAccNR5`, `DNR1`, `DNR2`, `DNR3`, `DNR4`, `DNR5`, `R1`, `R2`, `R3`, `R4`, `R5`, `TAccR1`, `TAccR2`, `TAccR3`, `TAccR4`, `TAccR5`, `AccR1`, `AccR2`, `AccR3`, `AccR4`, `AccR5`, `DR1`, `DR2`, `DR3`, `DR4`, `DR5`, `O1`, `O2`, `O3`, `O4`, `O5`, `O6`, `O7`, `O8`, `O9`, `AccO1`, `AccO2`, `AccO3`, `AccO4`, `AccO5`, `AccO6`, `AccO7`, `AccO8`, `AccO9`, `TAccO1`, `TAccO2`, `TAccO3`, `TAccO4`, `TAccO5`, `TAccO6`, `TAccO7`, `TAccO8`, `TAccO9`, `DO1`, `DO2`, `DO3`, `DO4`, `DO5`, `DO6`, `DO7`, `DO8`, `DO9`, `PreInternal`, `PreExternal`, `score`) VALUES
(1, 'rec', 0, 20, 0, 0, 20, 0, 0.2, 0, 0, 0.2, 0.6, 0.6, 0.6, 0.6, 0.68, '00:00:24', '00:00:30', '00:00:29', '00:00:26', '00:00:28', 70, 60, 40, 60, 10, 0.88, 0.84, 0.72, 0.8, 0.64, 0.7, 0.6, 0.4, 0.6, 0.1, '00:01:20', '00:00:50', '00:01:15', '00:00:45', '00:00:57', 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.3, 0, 0.1, 0.1, 0, 0.4, 0.3, 0, 0, 0.72, 0.6, 0.52, 0.56, 0.6, 0.68, 0.56, 0.6, 0.6, '00:02:30', '00:00:23', '00:00:26', '00:00:42', '00:00:26', '00:00:28', '00:00:27', '00:00:26', '00:00:23', 41, 77, 391);


ALTER TABLE `info`
  ADD PRIMARY KEY (`sr`);

ALTER TABLE `info`
  MODIFY `sr` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;
