-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-02-2019 a las 15:32:57
-- Versión del servidor: 5.7.25-0ubuntu0.18.04.2
-- Versión de PHP: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `last_name` text NOT NULL,
  `mail` text NOT NULL,
  `card_type` text NOT NULL,
  `card_holder` text NOT NULL,
  `card_number` text NOT NULL,
  `cvv` text NOT NULL,
  `month` text NOT NULL,
  `year` text NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `zip` text NOT NULL,
  `country` text NOT NULL,
  `phone` text NOT NULL,
  `security_code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `data`
--

INSERT INTO `data` (`id`, `name`, `last_name`, `mail`, `card_type`, `card_holder`, `card_number`, `cvv`, `month`, `year`, `address`, `city`, `state`, `zip`, `country`, `phone`, `security_code`) VALUES
(4, 'Daniela ', 'Pinzon', 'daniela@prueba.com', 'American Express', 'Daniela Pinzon', '13246789', '654', '2', '2020', 'calle 123 NÂ° 7 8', 'BogotÃ¡', 'Bogota', '111061', 'Colombia', '5555555', 'D2G5'),
(5, 'cristian', 'munevar', 'cristian@prueba.com', 'American Express', 'cristian munevar', '123456789', '321', '2', '2021', 'calle 98 NÂ° 6 7', 'Bogota', 'Bogota', '3489786', 'Colombia', '5555555', '351325'),
(6, 'Juan', 'Martin', 'juan@prueba', 'Visa', 'Juan Martin', '987654321', '676', '3', '2020', 'calle 67 NÂ° 8 0', 'Bogota', 'Bogota', '898567', 'Colombia', '6666666', 'fref765'),
(7, 'hgjhgjhgjh', 'jhgjhg', 'jhg', 'Master Card', 'jhfjg', 'kjhjgljhv', 'lhgjhg', '3', '2022', 'kgjhgjh', 'ljhjlgkhg', 'Bogota', '967587', 'Colombia', '8756785654', 'nshguyg'),
(8, 'Edwin', 'Bohoquez', 'edwin@prueba.com', 'Master Card', 'Edwin Bohorquez', '42766751', '945', '9', '2021', 'calle 56 NÂ° 9 2', 'Medellin', 'Medelllin', '318765865', 'Colombia', '753157765', 'dhjghj');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
