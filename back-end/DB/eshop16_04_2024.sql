-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 03:15 PM
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
-- Database: `eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2024_07_11_161538_create_product_types_table', 1),
(3, '2024_07_11_161634_create_products_table', 1),
(4, '2024_07_11_162404_create_reviews_table', 1),
(5, '2024_07_11_162559_create_news_table', 1),
(6, '2024_07_13_171930_create_sessions_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `content_link` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `content_link`, `thumbnail`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dental Health Tips for Kids', 'Discover essential dental health tips to keep your kids\\\' teeth strong and healthy.', 'https://example.com/dental/kids-tips', 'https://www.bing.com/images/search?view=detailV2&ccid=8t1YBqWE&id=557BBE03F9C28CF2793C27FEA7107E934FFF5F86&thid=OIP.8t1YBqWE_PCMsf8ym1xZhwHaE7&mediaurl=https%3a%2f%2fshapingthefutureofdentistry.org%2fwp-content%2fuploads%2f2013%2f04%2fiStock_000016075689M', 1, NULL, NULL),
(2, 'How to Prevent Gum Disease', 'Learn about the best practices to prevent gum disease and maintain healthy gums.', 'https://example.com/dental/gum-disease\'', 'https://www.bing.com/images/search?view=detailV2&ccid=8t1YBqWE&id=557BBE03F9C28CF2793C27FEA7107E934FFF5F86&thid=OIP.8t1YBqWE_PCMsf8ym1xZhwHaE7&mediaurl=https%3a%2f%2fshapingthefutureofdentistry.org%2fwp-content%2fuploads%2f2013%2f04%2fiStock_000016075689M', 1, NULL, NULL),
(3, 'Dental Health Tips for Kids', 'Discover essential dental health tips to keep your kids\\\' teeth strong and healthy.', 'https://example.com/dental/kids-tips', 'https://th.bing.com/th/id/OIP.XJWOqDZtBJ8-yZDU_y0kzwHaFE?rs=1&pid=ImgDetMain', 1, NULL, NULL),
(4, 'How to Prevent Gum Disease', 'Learn about the best practices to prevent gum disease and maintain healthy gums.', 'https://example.com/dental/gum-disease\'', 'https://shapingthefutureofdentistry.org/wp-content/uploads/2013/04/iStock_000016075689Medium.jpg', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `avg_rating` double UNSIGNED NOT NULL DEFAULT 0,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `avg_rating`, `type_id`, `thumbnail`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Toothpaste', 'Toothpaste helps remove food debris and dental plaque, which can harbor bacteria that cause tooth decay and gum disease', 30, 0, 1, 'https://shop.colgate.com/_ipx/f_webp&s_1200x877/cms/29cbf6be-c5a4-4487-bef3-5508301dceef', 1, NULL, NULL),
(2, 'Toothbrush', 'A toothbrush is an oral hygiene instrument used to clean the teeth, gums, and tongue. It typically consists of a head of tightly clustered bristles mounted on a handle which facilitates the cleaning of hard-to-reach areas of the mouth', 25, 0, 2, 'https://www.colgateprofessional.com/content/dam/cp-sites/oral-care/professional2020/en-us/products/toothbrushes/colgate-360-toothbrush.png.rendition.423.245.png', 1, NULL, NULL),
(3, 'Dental Floss', 'Dental floss is a thin, soft thread or filament used to remove food particles and dental plaque from between teeth and under the gumline, areas that a toothbrush cannot easily reach. Regular use of dental floss helps maintain oral hygiene and prevent gum ', 30, 0, 2, 'https://www.emerson-dental.com/wp-content/uploads/dental-floss-920x613.jpg', 1, NULL, NULL),
(4, 'Mouthwash', 'Mouthwash, also known as an oral rinse, is a liquid product used to rinse and clean the mouth, teeth, gums, and throat. It provides various oral health benefits and can be used in addition to regular brushing and flossing', 30, 0, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0cKk_xbA8-X5U5vQSoiHE5fEJ8_nEZ5ueQ&s', 1, NULL, NULL),
(5, 'Dentures', 'Dentures, also known as false teeth, are removable prosthetic devices designed to replace missing teeth and restore function and aesthetics to the mouth. They are custom-made to fit the patient\'s mouth and can help improve chewing, speech, and overall fac', 30, 0, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFicr-KXd2tZVtLU3fdJh3FVZOPPGNjtotg&s', 1, NULL, NULL),
(6, 'Dental Implant', 'A dental implant is a surgical component that serves as an artificial tooth root, providing a strong foundation for fixed or removable replacement teeth. Dental implants are designed to look, feel, and function like natural teeth, offering a durable and l', 30, 0, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dental-implant-illustration.jpg/800px-Dental-implant-illustration.jpg', 1, NULL, NULL),
(7, 'Teeth Whitening Kit', 'A complete teeth whitening kit that includes whitening gel, LED light, and custom trays. The kit is designed to provide professional-level whitening results at home in just a few applications.', 30, 0, 1, 'https://m.media-amazon.com/images/I/71oceyM+cCL._AC_UF1000,1000_QL80_.jpg', 1, NULL, NULL),
(8, 'Dental Floss Picks', 'Traditional metal braces designed for aligning and straightening teeth over time. Includes brackets, archwires, and elastic bands. Suitable for both children and adults seeking to improve their dental alignment.', 30, 0, 2, 'https://cdn11.bigcommerce.com/s-2idmiil7bp/images/stencil/1280x1280/products/874/3382/00300410109608_C1N0__29053.1638484812.jpg?c=1', 1, NULL, NULL),
(9, 'Orthodontic Braces', 'A custom-fit mouthguard designed for sports and nighttime teeth grinding (bruxism). Made from high-quality, durable materials, it provides protection and comfort during use.', 30, 0, 1, 'https://www.durrettorthodontics.com/wp-content/uploads/orthodontic-braces.jpg', 1, NULL, NULL),
(10, 'Mouthguard', 'A rechargeable electric toothbrush with multiple brushing modes, including daily clean, sensitive, and gum care. It features a pressure sensor to prevent hard brushing and a timer to ensure recommended brushing time.', 30, 0, 1, 'https://i5.walmartimages.com/seo/Shock-Doctor-Sport-Gel-Max-Sports-Protective-Mouth-Guard-Black-Adult_462b77a1-62a0-43f5-9429-fb3da52622f9_1.8de80a923411fd22570461648043f596.jpeg', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'a', NULL, NULL),
(2, 'b', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content` varchar(255) NOT NULL,
  `rating` double UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` text NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('lQIoDi5tQtkGwNwUGAoBf8pMoCHTmpQIp6iO7cQs', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTnVtQzlYYTFkVTdVNnlyVHZxOG1vbGlCbjc2WEtvVlQyTjFYMTdsbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9kdWN0dHlwZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721134534);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adderss` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `role_id` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_type_id_foreign` (`type_id`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_product_id_foreign` (`product_id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `product_types` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
