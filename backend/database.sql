SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

use Apex;

CREATE TABLE `users` (`id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `mail` varchar(50) NOT NULL,
  `tel` varchar(10) DEFAULT NULL,
  `rank` varchar(15) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (
  `firstname`,
  `lastname`,
  `mail`,
  `tel`,
  `rank`
) VALUES (
  "Zastor",
  "Zero",
  "tymothee.heroin61@gmail.com",
  "0617171788",
  "Master")
  ;

CREATE TABLE `item` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `item` (`id`, `title`) VALUES
(1, 'Stuff'),
(2, 'Doodads');

ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `item`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


