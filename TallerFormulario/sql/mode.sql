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

ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;