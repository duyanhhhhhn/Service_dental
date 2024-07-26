-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2024 at 01:24 PM
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
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `name`, `address`, `phone_number`, `status`, `created_at`, `updated_at`) VALUES
(21, 'abaxcas', 'asdasda', '123123132', 1, '2024-07-23 00:26:43', '2024-07-23 00:26:43'),
(22, 'jhbkjhkj', 'bkjbkj', '4312543152', 1, '2024-07-23 00:29:20', '2024-07-23 00:29:20'),
(23, '123123', 'ádasdas', '123123', 1, '2024-07-23 00:32:57', '2024-07-23 00:32:57');

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
(1, '0001_01_01_000000_create_users_table', 1),
(2, '2024_07_11_161538_create_product_types_table', 1),
(3, '2024_07_11_161634_create_products_table', 1),
(4, '2024_07_11_162404_create_reviews_table', 1),
(5, '2024_07_11_162559_create_news_table', 1),
(6, '2024_07_19_172519_create_personal_access_tokens_table', 2),
(7, '2024_07_19_131609_create_appointments_table', 3),
(8, '2024_07_24_144501_create_services_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `author`, `thumbnail`, `status`, `created_at`, `updated_at`, `content`) VALUES
(1, 'Dental Health Tips for Kids', 'Discover essential dental health tips to keep your kids\\\' teeth strong and healthy.', 'Phạm Quốc Thắng', 'https://bizweb.dktcdn.net/thumb/grande/100/355/752/products/boc-rang-su.jpg?v=1560098941690', 1, NULL, NULL, 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium suscipit adipiscing nec volutpat egestas; netus congue efficitur. Volutpat egestas parturient suscipit ullamcorper posuere nec finibus. Cubilia fusce ac nascetur quis montes platea dis nisi. Dolor mollis bibendum cras penatibus erat. Aegestas morbi facilisi pellentesque himenaeos. Cras fusce feugiat porta gravida dapibus ultrices. Dignissim sagittis tempus ornare praesent id sociosqu placerat. Ahac rhoncus tempor habitasse, cubilia montes ante. Non curabitur rutrum penatibus massa enim posuere sed. Dolor efficitur mattis platea velit facilisi adipiscing dictumst semper phasellus. Conubia sed metus maecenas sociosqu, lectus euismod. Mauris risus tellus habitant arcu cursus per metus ultricies. Litora rutrum sociosqu hendrerit parturient dolor. Fusce ullamcorper curabitur ac ad nascetur vulputate senectus. Porttitor class cras aliquet aenean conubia conubia curabitur. Integer quis consectetur mi orci sodales. Ligula malesuada tellus lacinia etiam maximus suspendisse taciti. Tempor finibus in hendrerit viverra ac. Feugiat blandit accumsan tellus suspendisse ultricies habitasse dis tincidunt eget. Magnis faucibus taciti risus fringilla nascetur; potenti fringilla donec. Tempor facilisi vehicula dictum pharetra metus semper fusce integer finibus. Malesuada duis ligula primis litora sem nibh nulla. Congue sodales malesuada consectetur primis aliquam dolor dis quis litora. Mus nulla conubia nibh leo in maecenas sociosqu vulputate. Ridiculus sociosqu nascetur eu, ullamcorper pretium varius? Maximus facilisis penatibus tellus mauris venenatis; vitae magnis.Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium suscipit adipiscing nec volutpat egestas; netus congue efficitur. Volutpat egestas parturient suscipit ullamcorper posuere nec finibus. Cubilia fusce ac nascetur quis montes platea dis nisi. Dolor mollis bibendum cras penatibus erat. Aegestas morbi facilisi pellentesque himenaeos. Cras fusce feugiat porta gravida dapibus ultrices. Dignissim sagittis tempus ornare praesent id sociosqu placerat. Ahac rhoncus tempor habitasse, cubilia montes ante. Non curabitur rutrum penatibus massa enim posuere sed. Dolor efficitur mattis platea velit facilisi adipiscing dictumst semper phasellus. Conubia sed metus maecenas sociosqu, lectus euismod. Mauris risus tellus habitant arcu cursus per metus ultricies. Litora rutrum sociosqu hendrerit parturient dolor. Fusce ullamcorper curabitur ac ad nascetur vulputate senectus. Porttitor class cras aliquet aenean conubia conubia curabitur. Integer quis consectetur mi orci sodales. Ligula malesuada tellus lacinia etiam maximus suspendisse taciti. Tempor finibus in hendrerit viverra ac. Feugiat blandit accumsan tellus suspendisse ultricies habitasse dis tincidunt eget. Magnis faucibus taciti risus fringilla nascetur; potenti fringilla donec. Tempor facilisi vehicula dictum pharetra metus semper fusce integer finibus. Malesuada duis ligula primis litora sem nibh nulla. Congue sodales malesuada consectetur primis aliquam dolor dis quis litora. Mus nulla conubia nibh leo in maecenas sociosqu vulputate. Ridiculus sociosqu nascetur eu, ullamcorper pretium varius? Maximus facilisis penatibus tellus mauris venenatis; vitae magnis.'),
(2, 'How to Prevent Gum Disease', 'Learn about the best practices to prevent gum disease and maintain healthy gums.', 'Phạm Quốc Thắng', 'https://www.kin.es/wp-content/uploads/2024/01/fatores_que_influyen_en_la_rapidez.jpg', 1, NULL, NULL, 'Lorem ipsum dolor sit amet. Sed iusto quidem eos consequatur doloribus id voluptatem labore. Nam incidunt laudantium et exercitationem quia aut itaque impedit et iure officia in consequatur alias. Aut error sapiente sit ducimus impedit eos tenetur maiores quo accusamus quis. In voluptatem reprehenderit rem numquam aliquid ut doloremque ipsum ut deleniti laudantium et eveniet nulla a minima voluptatem. Quo omnis nisi eum ipsum atque qui odit optio 33 tenetur ullam aut quam quis? </p><p>Et enim temporibus non sint quia eum natus sapiente est itaque provident est autem iusto At iusto natus sed aliquid culpa. Est quisquam dolor est aspernatur voluptas eos laborum repellat sed voluptas totam est suscipit repellendus. Ut dolor iure et iusto voluptate aut dolor modi sit possimus adipisci qui laudantium maxime ut nulla possimus aut necessitatibus ipsa. Qui quia voluptas rem velit explicabo aut commodi dignissimos a laboriosam dolores ut repudiandae soluta. In omnis animi aut alias possimus est vitae cumque ut eaque laudantium qui voluptate sapiente est maxime mollitia et necessitatibus asperiores. Non magni rerum sed vero autem id consequatur quidem et eligendi recusandae qui officiis voluptatibus. Ut laboriosam veritatis qui quaerat sunt ad culpa totam ut saepe quibusdam. Eum placeat tenetur eos minus impedit eos veritatis temporibus est obcaecati dolorem. Cum amet exercitationem est asperiores fugiat ut natus esse. </p><p>Ut quasi porro ab dignissimos omnis vel fugiat voluptas! Et fugit culpa non earum incidunt et voluptatem ipsum et magnam natus sed temporibus itaque. Et perspiciatis voluptatem qui mollitia voluptate vel dolorum numquam ab animi dolores aut mollitia distinctio eos minus saepe. Ad praesentium sequi id reprehenderit dolorem aut accusantium asperiores eos tempora sunt. Et rerum quos ad doloribus magni et molestiae perspiciatis sed tempore recusandae qui obcaecati explicabo. Ut assumenda molestias sit reiciendis nisi et provident pariatur At voluptates quos et beatae possimus ad voluptatum pariatur. Est Quis cumque non quam unde aut enim galisum ut fugiat suscipit sed modi iste ut doloremque voluptas? Id voluptatum earum ut explicabo fugiat aut perferendis tempore et alias aliquid et reprehenderit eius sit pariatur accusantium. Id quam dicta ex quae sapiente et eius minus sit quidem dicta.\nLorem ipsum odor amet, consectetuer adipiscing elit. Pretium suscipit adipiscing nec volutpat egestas; netus congue efficitur. Volutpat egestas parturient suscipit ullamcorper posuere nec finibus. Cubilia fusce ac nascetur quis montes platea dis nisi. Dolor mollis bibendum cras penatibus erat. Aegestas morbi facilisi pellentesque himenaeos. Cras fusce feugiat porta gravida dapibus ultrices. Dignissim sagittis tempus ornare praesent id sociosqu placerat. Ahac rhoncus tempor habitasse, cubilia montes ante. Non curabitur rutrum penatibus massa enim posuere sed. Dolor efficitur mattis platea velit facilisi adipiscing dictumst semper phasellus. Conubia sed metus maecenas sociosqu, lectus euismod. Mauris risus tellus habitant arcu cursus per metus ultricies. Litora rutrum sociosqu hendrerit parturient dolor. Fusce ullamcorper curabitur ac ad nascetur vulputate senectus. Porttitor class cras aliquet aenean conubia conubia curabitur. Integer quis consectetur mi orci sodales. Ligula malesuada tellus lacinia etiam maximus suspendisse taciti. Tempor finibus in hendrerit viverra ac. Feugiat blandit accumsan tellus suspendisse ultricies habitasse dis tincidunt eget. Magnis faucibus taciti risus fringilla nascetur; potenti fringilla donec. Tempor facilisi vehicula dictum pharetra metus semper fusce integer finibus. Malesuada duis ligula primis litora sem nibh nulla. Congue sodales malesuada consectetur primis aliquam dolor dis quis litora. Mus nulla conubia nibh leo in maecenas sociosqu vulputate. Ridiculus sociosqu nascetur eu, ullamcorper pretium varius? Maximus facilisis penatibus tellus mauris venenatis; vitae magnis.'),
(3, 'Dental Health Tips for Kids', 'Discover essential dental health tips to keep your kids\\\' teeth strong and healthy.', 'Phạm Quốc Thắng', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4FsoskFnlx0WMMDX3MFnH4N-vlvzKM8LdvY9x1s-yz68xnvSokoY6BEtjAwE8o3jbETpSs1KkoCHd0wK-v5GNfKT6R-8gZnvL6ZpmPGid8-jY7zAdjpWNh8AQk0nmK1DoIPlrdyDKUCs/s1600/image.png', 1, NULL, NULL, 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium suscipit adipiscing nec volutpat egestas; netus congue efficitur. Volutpat egestas parturient suscipit ullamcorper posuere nec finibus. Cubilia fusce ac nascetur quis montes platea dis nisi. Dolor mollis bibendum cras penatibus erat. Aegestas morbi facilisi pellentesque himenaeos. Cras fusce feugiat porta gravida dapibus ultrices. Dignissim sagittis tempus ornare praesent id sociosqu placerat. Ahac rhoncus tempor habitasse, cubilia montes ante. Non curabitur rutrum penatibus massa enim posuere sed. Dolor efficitur mattis platea velit facilisi adipiscing dictumst semper phasellus. Conubia sed metus maecenas sociosqu, lectus euismod. Mauris risus tellus habitant arcu cursus per metus ultricies. Litora rutrum sociosqu hendrerit parturient dolor. Fusce ullamcorper curabitur ac ad nascetur vulputate senectus. Porttitor class cras aliquet aenean conubia conubia curabitur. Integer quis consectetur mi orci sodales. Ligula malesuada tellus lacinia etiam maximus suspendisse taciti. Tempor finibus in hendrerit viverra ac. Feugiat blandit accumsan tellus suspendisse ultricies habitasse dis tincidunt eget. Magnis faucibus taciti risus fringilla nascetur; potenti fringilla donec. Tempor facilisi vehicula dictum pharetra metus semper fusce integer finibus. Malesuada duis ligula primis litora sem nibh nulla. Congue sodales malesuada consectetur primis aliquam dolor dis quis litora. Mus nulla conubia nibh leo in maecenas sociosqu vulputate. Ridiculus sociosqu nascetur eu, ullamcorper pretium varius? Maximus facilisis penatibus tellus mauris venenatis; vitae magnis.'),
(4, 'How to Prevent Gum Disease', 'Learn about the best practices to prevent gum disease and maintain healthy gums.', 'Phạm Quốc Thắng', 'https://shapingthefutureofdentistry.org/wp-content/uploads/2013/04/iStock_000016075689Medium.jpg', 1, NULL, NULL, 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium suscipit adipiscing nec volutpat egestas; netus congue efficitur. Volutpat egestas parturient suscipit ullamcorper posuere nec finibus. Cubilia fusce ac nascetur quis montes platea dis nisi. Dolor mollis bibendum cras penatibus erat. Aegestas morbi facilisi pellentesque himenaeos. Cras fusce feugiat porta gravida dapibus ultrices. Dignissim sagittis tempus ornare praesent id sociosqu placerat. Ahac rhoncus tempor habitasse, cubilia montes ante. Non curabitur rutrum penatibus massa enim posuere sed. Dolor efficitur mattis platea velit facilisi adipiscing dictumst semper phasellus. Conubia sed metus maecenas sociosqu, lectus euismod. Mauris risus tellus habitant arcu cursus per metus ultricies. Litora rutrum sociosqu hendrerit parturient dolor. Fusce ullamcorper curabitur ac ad nascetur vulputate senectus. Porttitor class cras aliquet aenean conubia conubia curabitur. Integer quis consectetur mi orci sodales. Ligula malesuada tellus lacinia etiam maximus suspendisse taciti. Tempor finibus in hendrerit viverra ac. Feugiat blandit accumsan tellus suspendisse ultricies habitasse dis tincidunt eget. Magnis faucibus taciti risus fringilla nascetur; potenti fringilla donec. Tempor facilisi vehicula dictum pharetra metus semper fusce integer finibus. Malesuada duis ligula primis litora sem nibh nulla. Congue sodales malesuada consectetur primis aliquam dolor dis quis litora. Mus nulla conubia nibh leo in maecenas sociosqu vulputate. Ridiculus sociosqu nascetur eu, ullamcorper pretium varius? Maximus facilisis penatibus tellus mauris venenatis; vitae magnis.');

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
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'admin@gmail.com', '9de2e5a576845806e4d051a9bb69fb8bab3d120a0348106ec92e6d3623a280b4', '[\"*\"]', NULL, NULL, '2024-07-19 10:55:41', '2024-07-19 10:55:41'),
(2, 'App\\Models\\User', 2, 'admin@gmail.com', '5ebb1df0b1592333a62be3e4de4ea5d3fc991641af19a1df736660b69c03f8b4', '[\"*\"]', NULL, NULL, '2024-07-19 19:04:34', '2024-07-19 19:04:34'),
(3, 'App\\Models\\User', 2, 'admin@gmail.com', '65b8657ff291038a76f9fb8457ebd71ea8674ed7a455eb6829da3c0eaba4ad15', '[\"*\"]', NULL, NULL, '2024-07-19 19:56:56', '2024-07-19 19:56:56'),
(4, 'App\\Models\\User', 2, 'admin@gmail.com', 'c6cf8212648b368c42952b0ed63f66b7fb49526b819408183f85a1d621e34f26', '[\"*\"]', NULL, NULL, '2024-07-19 21:34:29', '2024-07-19 21:34:29'),
(5, 'App\\Models\\User', 2, 'admin@gmail.com', 'ed8a18c5d57c86bb2bc0809a28556bf4d3e14d5bfb98b805e93f6a3890161964', '[\"*\"]', NULL, NULL, '2024-07-19 21:36:52', '2024-07-19 21:36:52'),
(6, 'App\\Models\\User', 2, 'admin@gmail.com', 'ec97a5e21fcde0927ddd6a925b9cdbedf33f546c91ee4cd1e80f382e92cd2cfc', '[\"*\"]', NULL, NULL, '2024-07-19 21:38:38', '2024-07-19 21:38:38'),
(7, 'App\\Models\\User', 2, 'admin@gmail.com', '429cc22d7c0c11c1dfdba9304cee3fb793c34fdc230f9b2f60239796ef7e3483', '[\"*\"]', NULL, NULL, '2024-07-19 21:43:44', '2024-07-19 21:43:44'),
(8, 'App\\Models\\User', 2, 'admin@gmail.com', '1487def917af465983b9d24b7d6569eed80a4407e90cc1344e2377daee4bdab0', '[\"*\"]', NULL, NULL, '2024-07-20 08:27:56', '2024-07-20 08:27:56'),
(9, 'App\\Models\\User', 2, 'admin@gmail.com', '36eac27a77fa922937802f4f7ac7d527b25b3871e0fdb3d39d205a26b5ea7225', '[\"*\"]', NULL, NULL, '2024-07-20 21:09:34', '2024-07-20 21:09:34'),
(10, 'App\\Models\\User', 2, 'admin@gmail.com', '05bb61b92bad64981e1fcc73d8107cfafd18b24b8e9f8d48ac4f331695f3fb95', '[\"*\"]', NULL, NULL, '2024-07-21 06:18:58', '2024-07-21 06:18:58'),
(11, 'App\\Models\\User', 2, 'admin@gmail.com', 'f5da2e14e3adfeae367a506f200cccdae96f4d4986c579148081da0108bfe81c', '[\"*\"]', NULL, NULL, '2024-07-21 19:06:34', '2024-07-21 19:06:34'),
(12, 'App\\Models\\User', 2, 'admin@gmail.com', '9373ce9570efa5ce4dbf8ff878344015ad31222dd8231a1aed892c7c3f5796be', '[\"*\"]', NULL, NULL, '2024-07-21 19:28:39', '2024-07-21 19:28:39'),
(13, 'App\\Models\\User', 2, 'admin@gmail.com', 'a83fdc40538b377101d4175a0746c8ed3524f0472ac4281f2158124788b075bb', '[\"*\"]', NULL, NULL, '2024-07-21 19:53:07', '2024-07-21 19:53:07'),
(14, 'App\\Models\\User', 2, 'admin@gmail.com', 'a96f255cb95357964773f6ae8125f22f46ddafcfb7e141c2ae7bf87b974a0a08', '[\"*\"]', NULL, NULL, '2024-07-21 23:20:12', '2024-07-21 23:20:12'),
(15, 'App\\Models\\User', 2, 'admin@gmail.com', '183ece3c241eea330d765adfe50b2890ddc94834834b2428f557b0623d7853a4', '[\"*\"]', NULL, NULL, '2024-07-22 07:45:15', '2024-07-22 07:45:15'),
(16, 'App\\Models\\User', 2, 'admin@gmail.com', 'ebb5d44d00071c9c32be45936cec88635e6fcdc570eea10025ea120a617bf18f', '[\"*\"]', NULL, NULL, '2024-07-22 18:41:28', '2024-07-22 18:41:28'),
(17, 'App\\Models\\User', 2, 'admin@gmail.com', '9fdecc3511140b74584a520037cbc8d027a42d0f1a5946b44512523b812a2c0a', '[\"*\"]', NULL, NULL, '2024-07-22 18:41:36', '2024-07-22 18:41:36'),
(18, 'App\\Models\\User', 2, 'admin@gmail.com', 'a31b581685a808ec820b6db4ca9512a63d4bedb68c539509cfdef6f12c0ad353', '[\"*\"]', NULL, NULL, '2024-07-22 18:42:52', '2024-07-22 18:42:52'),
(19, 'App\\Models\\User', 2, 'admin@gmail.com', '33f3aefe09e2126d53d5b2b19788360ba4c259e8c4b0a746cfc7a56d60b63858', '[\"*\"]', NULL, NULL, '2024-07-22 18:42:57', '2024-07-22 18:42:57'),
(20, 'App\\Models\\User', 2, 'admin@gmail.com', '3b9ce579ebd178b0b66bb7d40414c26404b8fff6c55a37a6f5638887f6c52075', '[\"*\"]', NULL, NULL, '2024-07-22 18:42:58', '2024-07-22 18:42:58'),
(21, 'App\\Models\\User', 2, 'admin@gmail.com', 'a078de09d9d231d6bd122a37f3c51bf38f3544ab4a7e547bffb5fab24a372781', '[\"*\"]', NULL, NULL, '2024-07-22 18:42:58', '2024-07-22 18:42:58'),
(22, 'App\\Models\\User', 2, 'admin@gmail.com', '9328f847abce5346112ad43b9cb086476783a41984d0725c98a39a7d99fee247', '[\"*\"]', NULL, NULL, '2024-07-22 18:42:59', '2024-07-22 18:42:59'),
(23, 'App\\Models\\User', 2, 'admin@gmail.com', 'f8b0fae2acba275b300fa39fa8f717d6689ea286b002200562ac73c4694167b9', '[\"*\"]', NULL, NULL, '2024-07-22 18:50:43', '2024-07-22 18:50:43'),
(24, 'App\\Models\\User', 2, 'admin@gmail.com', 'dca4d74cb50761f6211a17a3120f33c1bb928a9fbd3f25241488a93309c406fa', '[\"*\"]', NULL, NULL, '2024-07-22 20:44:26', '2024-07-22 20:44:26'),
(25, 'App\\Models\\User', 2, 'admin@gmail.com', '467d2d886dacc24aa52ef505d95861ee9f675393d11f748ad543892f78cb2a10', '[\"*\"]', NULL, NULL, '2024-07-23 00:01:29', '2024-07-23 00:01:29'),
(26, 'App\\Models\\User', 2, 'admin@gmail.com', '52c50ae8839bee5da61ab4117c2dd5a1a45abfa13399a78a0a407614a13f31e5', '[\"*\"]', NULL, NULL, '2024-07-23 01:49:48', '2024-07-23 01:49:48'),
(27, 'App\\Models\\User', 2, 'admin@gmail.com', '364b89b4d13337affc4c647cb5a7c084aba8d7a97093007b2ab32aefc61fcc34', '[\"*\"]', NULL, NULL, '2024-07-23 01:50:30', '2024-07-23 01:50:30'),
(28, 'App\\Models\\User', 2, 'admin@gmail.com', '466ca328efb38295e7d910517d3040bd9a230d4a7997681478aaeffd72a965ef', '[\"*\"]', NULL, NULL, '2024-07-23 01:52:08', '2024-07-23 01:52:08'),
(29, 'App\\Models\\User', 2, 'admin@gmail.com', '5293e71c78ad8cebc8ce5abf2a2ccc6173f7f200f5ec8b50d88130c784dee808', '[\"*\"]', NULL, NULL, '2024-07-23 07:52:34', '2024-07-23 07:52:34'),
(30, 'App\\Models\\User', 2, 'admin@gmail.com', '598c0f91416a30c815f79c25ed117154e975b78420c949f1b7c708e17c52c385', '[\"*\"]', NULL, NULL, '2024-07-23 07:52:35', '2024-07-23 07:52:35');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `type_id`, `thumbnail`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Tooth', 'Toothpaste helps remove food debris and dental plaque, which can harbor bacteria that cause tooth decay and gum disease', 30, 1, 'https://shop.colgate.com/_ipx/f_webp&s_1200x877/cms/29cbf6be-c5a4-4487-bef3-5508301dceef', 1, NULL, '2024-07-23 02:34:35'),
(2, 'Toothbrush', 'A toothbrush is an oral hygiene instrument used to clean the teeth, gums, and tongue. It typically consists of a head of tightly clustered bristles mounted on a handle which facilitates the cleaning of hard-to-reach areas of the mouth', 25, 2, 'https://www.colgateprofessional.com/content/dam/cp-sites/oral-care/professional2020/en-us/products/toothbrushes/colgate-360-toothbrush.png.rendition.423.245.png', 1, NULL, NULL),
(3, 'Dental Floss', 'Dental floss is a thin, soft thread or filament used to remove food particles and dental plaque from between teeth and under the gumline, areas that a toothbrush cannot easily reach. Regular use of dental floss helps maintain oral hygiene and prevent gum ', 30, 2, 'https://www.emerson-dental.com/wp-content/uploads/dental-floss-920x613.jpg', 1, NULL, NULL),
(4, 'Mouthwash', 'Mouthwash, also known as an oral rinse, is a liquid product used to rinse and clean the mouth, teeth, gums, and throat. It provides various oral health benefits and can be used in addition to regular brushing and flossing', 30, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0cKk_xbA8-X5U5vQSoiHE5fEJ8_nEZ5ueQ&s', 1, NULL, NULL),
(5, 'Dentures', 'Dentures, also known as false teeth, are removable prosthetic devices designed to replace missing teeth and restore function and aesthetics to the mouth. They are custom-made to fit the patient\'s mouth and can help improve chewing, speech, and overall fac', 30, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFicr-KXd2tZVtLU3fdJh3FVZOPPGNjtotg&s', 1, NULL, NULL),
(6, 'Dental Implant', 'A dental implant is a surgical component that serves as an artificial tooth root, providing a strong foundation for fixed or removable replacement teeth. Dental implants are designed to look, feel, and function like natural teeth, offering a durable and l', 30, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dental-implant-illustration.jpg/800px-Dental-implant-illustration.jpg', 1, NULL, NULL),
(7, 'Teeth Whitening Kit', 'A complete teeth whitening kit that includes whitening gel, LED light, and custom trays. The kit is designed to provide professional-level whitening results at home in just a few applications.', 30, 1, 'https://m.media-amazon.com/images/I/71oceyM+cCL._AC_UF1000,1000_QL80_.jpg', 1, NULL, NULL),
(8, 'Dental Floss Picks', 'Traditional metal braces designed for aligning and straightening teeth over time. Includes brackets, archwires, and elastic bands. Suitable for both children and adults seeking to improve their dental alignment.', 30, 2, 'https://cdn11.bigcommerce.com/s-2idmiil7bp/images/stencil/1280x1280/products/874/3382/00300410109608_C1N0__29053.1638484812.jpg?c=1', 1, NULL, NULL),
(9, 'Orthodontic Braces', 'A custom-fit mouthguard designed for sports and nighttime teeth grinding (bruxism). Made from high-quality, durable materials, it provides protection and comfort during use.', 30, 1, 'https://www.durrettorthodontics.com/wp-content/uploads/orthodontic-braces.jpg', 1, NULL, NULL),
(10, 'Mouthguard', 'A rechargeable electric toothbrush with multiple brushing modes, including daily clean, sensitive, and gum care. It features a pressure sensor to prevent hard brushing and a timer to ensure recommended brushing time.', 30, 1, 'https://i5.walmartimages.com/seo/Shock-Doctor-Sport-Gel-Max-Sports-Protective-Mouth-Guard-Black-Adult_462b77a1-62a0-43f5-9429-fb3da52622f9_1.8de80a923411fd22570461648043f596.jpeg', 1, NULL, NULL),
(18, '1312', '2313123', 2131, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5_yrDMoSDUh612127-pdiF6-Goy9gwxShw&s', 1, '2024-07-22 21:25:14', '2024-07-22 21:25:14'),
(20, 'Test', 'asdasdasd', 123, 1, 'https://media.istockphoto.com/id/1349328691/photo/young-happy-woman-during-dental-procedure-at-dentists-office.jpg?s=612x612&w=0&k=20&c=H0WBvMhyspSX10Xq65AFhF4DoMLzg8wOpqjjupwTWDE=', 1, '2024-07-22 21:44:53', '2024-07-22 21:44:53'),
(23, 'asdasd', '234234', 324243, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kw-mCAZHqWfqRCqhtOdddL5qtJ_daW0yYQ&s', 1, '2024-07-22 23:50:42', '2024-07-23 02:25:16'),
(25, 'jhasdkjahskjdwqweq', 'avasd', 123, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGC-RJ0Bx12B5JuV41KsE4rCeQ-EfNv9298w&s', 1, '2024-07-23 01:10:37', '2024-07-23 02:21:32');

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
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `thumbnail`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dental Crowns', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/icon-boc-rang-su-1.png', 1, NULL, NULL),
(2, 'Implant Dentures', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/trong-rang-implant.png', 1, NULL, NULL),
(3, 'Cosmetic Braces', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/nieng-rang-tham-my.png', 1, NULL, NULL),
(4, 'Veneer', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/rang-su-veneer.png', 1, NULL, NULL),
(5, 'Teeth Whitening', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/icon-tay-trang-rang-1.png', 1, NULL, NULL),
(6, 'Wisdom Tooth Extraction', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/icon-nho-rang-khon-1.png', 1, NULL, NULL),
(7, 'Periodontal', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/icon-benh-ly-nha-chu.png', 1, NULL, NULL),
(8, 'Root Canal Treatment', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2019/05/dieu-tri-tuy.png', 1, NULL, NULL),
(9, 'Tooth Filling', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus at sollicitudin hac ex amet bibendum egestas accumsan. Nam montes justo amet litora iaculis. Eros sem libero aliquet est quisque faucibus per semper. Neque vehicula condimentum rutrum eget nulla ', 'https://nhakhoakim.com/wp-content/uploads/2021/11/icon-han-tram-rang-sau-01.png', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1lDExbXJXeiceG2X9CjtnvYe92Kwj538cmC3AkFK', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ2FFQTNzUTdOTzdDUXdid1FCQlltTmxXUnpsczl0NHVoQXBidGJRayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392382),
('3ssCHK3e7HAWAGU629nv84dRhfNN5q51EcvIZV25', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieDJvOUFaREtZMnZIVWkzVWltcHIxaXZ2cGl1eFAwcHE3VEpDREVNbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392336),
('3thZyU1v7gfh3QzhD6H1CMPFgOzbMRlL1Kts3zby', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSThtYncxclNHcjJGNEVBYllwUll0RmdnMThGZDFBblBSbFN4Wmd2VCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721392293),
('463hjZM0dkkaAA6Dl27FaQYvFT8zckBgPcPhuo0D', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZTRRNjRCUEN1Z3piUmxEbk9OM2szNDB4VEtoRE94T1V2TEV6Y3hHOCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392703),
('4N4BOps6y7Q49WEnno9wsaqXTGsJF2zlMLe5RfwW', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNlVlYWxUYjdISGhIYm9UT3JhZzZHM2I5M2dkcUdaVFUydDVvMGtvNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392768),
('53iLyScQHdxRTgRKl41xkGBfdMsDuu9N5IyCwN6w', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZjhoend5eFlHQ1dkSnlRMjI4SXBxZFJ3MGFicGFqMnBuNklWOTdMbCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387817),
('5EJRS4RPLNzHrBcw87uTqNP1nrrwZreRpQaj9DO7', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWU5lVVdXOE9UM1FiM1hWUDV4M0VaNkxrb2FUazJreDZEcXlIRFRvNSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387818),
('62ueKB19OsxFJ2kiDBHh1TmSz3Jyqr3NNxCvgSOP', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieWNzVmpvbGppajdsOGIxVWhqcjBLRXJWaDJhVkI1STQ1dlJTTkEzTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392793),
('7oNEGp11TnAxzeTivAmT7Q4ghUHLiyobMuYORSsf', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZ2lhcVNTUTF0bWlIdnJJZ3JXYWVTSnpveDJsajk3TlI3NXFPMmFUQyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721388029),
('7u94f6ew1ssZ9Z7A4jC3mPbUKoV9gnpNqpmI8QLs', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSks1dDZDVFIyWGdGMlRQSzljNm02cTk0bjlIU2JrWGNyMzRhWUtJOCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721391587),
('ay1r4mpX28Y8jiWzaOAHes4jNdXgMWxMHTOyjmBL', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiYmVOUUdrM1RmaFZ5YUlkZEloMHI5RU5BR0tTWTlVVlJPQ2RWVklqQyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387818),
('bMfpEH7Sa2JmokWqg99aGgLAtB6lfGtvE4mshqA1', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieEprMWthREljc0oza09sQWJ2d1VzdGI3SlNhMTZCS0RNRGJFblQzUyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392709),
('bR3zLRmIX86snxuxA7pV49Fwaey4QNcG4dnYw9ac', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTW1qUm5mVWdjZ1YwYjdKRllDYmZVOTh6UG9nUG9LSnBqRUxjSHVFSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392729),
('bVg8mEtyiCgWysixVbbKM142XCMm1pvbVejvkbmo', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiczlnS2UzU1pHZWFPRnRZVUtGVWVYdEdBVFFUSXEwNmIycU1tU0p3TSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721391674),
('D7HqaKw2GF8KpJ51Hj4KqZcWIq1V0BSE82f4Yv9l', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUnF2NUR4cWpxQ0pkWHpScWRhbEtJZEN0ejE0Q0xMMzNYQWs2R3ZzTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721388646),
('DeILVRLVszSAKEbB2EdFLWw92OSgr8DVWvdd7va2', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNm9abDNBWkRNNUJlRjdYS2tadkY4bmhvSjJoY1BUYXhSems2emNRdyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387818),
('DpqN3nnwZYAlomDhvI6lXl27dT1fb7EaTRtOIgMR', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZlM1dUh4cnRBVERUQUc3MjBwME9ZQUZjZDFJeEdtN043SnNUVnh3byI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387818),
('EfiHCPWc2QKxSifxswIqF1vdYyCW2oaIofn5Yvbd', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ0t3QksyYWdydjl1dDJGZmRNcUViSmNaV3FmRnlOOWFFck10YmQwTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392779),
('FQr0xZq72as24hvjAUTfbQPMgBDb3KFnrcTw9lMb', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidzc1eDcyTnFFT3p4WXE4Q0tIa3ZucUl6NFVRRzF0THBQbUxoZE01VCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721391680),
('FR0teQRHg1BOVT4i7t20C4hbP4nDJ6q18scpmdOl', NULL, '127.0.0.1', 'PostmanRuntime/7.37.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaUtGd3VreXRoUDF2b3pIU0k0aklaQk5IQ3lsbzByZzNla2xZWU54OCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721615561),
('gMgEwuOJHW4b5AaGdKKvsuJjshQLd2ubmbrxAvWk', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOHEzenRaaDM1akZpc25TbXFFZVB4Vk9Ucm1TNHpqZEN0UGl4c2NTYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721389406),
('J87SHl0BuL97wwaATqioNEcQBiZwFrtogTBRz6gp', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY0RMV29LR3l2TTQ0SEQwTXNUZzhCMnBzbjkwenVMaHBLOU1YN2l4QSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721393110),
('Jg80v9HZekr4VUE4j9sbspVJtEFM2YjWE1346LRO', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidkVuTjhJVjJINFN5MTBOcko4NlRTSVBHN0VhSWZTVFh2RTAyWmdIMCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721409371),
('JXPyczY8MzftPEgCghPCoFJ7WJbmQgBJbAw50mYN', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYlg0VGRkRlRjT2NhU0FJVVI1RUlUTDlFZFdtbVZTNUdHTTBLdmM2cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvc2VydmljZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721834501),
('KLVV8LZDj6C8nFWmF8RkNwpgTspMRbuBrNnvJCZb', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRTBBc0dDTzZaU0hRUEZYUW8wcTVBb2lsbzczMmFoQUdSajlPSjZrRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721389593),
('Ky0b1e48tOJKwZ9H37uFOpDNQWm2bkitAmhPN8BL', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOUtRQXJzQ09tTTJFR2NaZjE4Vk5RV0EzVVYxQlB6WFlhRlQ3TllUZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721389583),
('kY1rLENbqAWuvtR6jgAuas6BNsS8ZOnWJ17TXKqj', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTXdWb2F2S1pCTWhtNlNXczZkclZkT2NjRFhhTmJPUkc2S2pwQURIZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721387128),
('LNiZYdzQVkqB5qQM0t09RDsPi8HQYaQtxhLT4XS7', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiYTV6WkdJWWJ2NHhCMGZCUXZyZ3RXRmZ0UFlUZ2w1YVV6UE1zaW1kMCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387837),
('mSxlqsEAzITJwmxjVcKM4qxHGxasCpLPzjMESZki', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRlA5cUJFSEhHOWxrTFZRQld4alRRQ0NxYmJOR05LaGtWMEZaQm1NYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvc2VydmljZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721834497),
('nUsgHQ5hNxp4FDR8kq6cDiivUu1zewroqcWyvyxU', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiV3VVMkJlRm81VWNzRHJJSGQ1NWw5OXJkVVAzbXhVaHZDRzNNQndGOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721391992),
('Odst7EWvIBRUhjtrXJ6oZ14cWjIRQu1YDB79IzLs', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNjJJcDE2aGdjYWhYY1JUNzRxR2VlTjF2emJvMUUxYkY0SzZtSTZRYSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721409372),
('OOwU4G0Bt4Igem0hw6uenkQuC2dgzwWUzmsNAZr2', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibEFWUmFGRkwyTjlOSTRlR2pLazdvMnBqMjI5WVllT2M2dWFTRDA0TiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721392287),
('OwTYp7QkqL1yjypwgzzD8shTS7SqDl37q6sFj57i', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiR1RqdVpBZTlFNDk3MnVLbEFKa01pMVNHanpGV3VObEtKQ3hWcE9YTyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387824),
('PGtQrOtI17YsBRASJZc7u4MEtknSGhkJtgpDigWY', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQnFHanBjZXpZQ0RyU0c5Rk5iZGRybnd2S1VBNnowYkFISzNSd0xOeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392767),
('q8HtgmjzkZDRzFj2Q152QgZJEug25S9Gq6uM2mhF', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNm56bUg2b1hCMzBRTXM3VnBGMUJGaDJVWVA4eDd1ZkNUSzFTWGdiMCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392802),
('Q9gnQbNlwxTZmUBdf58Gl6udVj0dT4sulwXu03zo', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVW1IdEM2dkRlOHRwbTMxcWRIQVRoRll4Q282ekV0c1dxVWR1Y1oxNCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392707),
('QWMNrE2SPonsHGoK2EEDlktUnf3yh2ggmCoDwdRH', NULL, '127.0.0.1', 'PostmanRuntime/7.37.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTGZjWlpJZ2tMRXRicTRyQnJjMWhXbGhDajNEeU1PeGxCaEJQTnNZWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721718129),
('sShcOjljdKY7AlcOWtChEh3PnCuwDXGefqCUWSP5', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaG9KNFJZZ1VHRDREOVRrNFBwU1RRZHZqZGh2eDNWSDFZc1pDS0E5WiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387837),
('sWhLuluN3cfE9aLNkcAMOIjRKgsDZ29eMR2CLKEM', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaWlWeTN0TzNSbUhyelhSUnhTY1ZKWXNORzZUZHlKNjVrZHBCbUdnRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392794),
('TpgdsX4gFjXsa5gu64hO6tTmS6sgmHIfNKumq9VT', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibFpEbUVPVmdJUUNPTXBRc0JKOHhKSVVVa0RtZ1NjSHFzWldXZVppMyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721387837),
('TzepZsbLNE4VfjybM0cYshwDJuEvIc1NU2PLVOc0', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ1FDNHlLY2xWejU4ajZKNEpxZE80ZnVZODY3R1liUWhIa0FZTFhRSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1721388505),
('uIYhWRzCd9k6bQeJ4EQ4afZZRo0Wo1FN3HFWKRqL', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWGRRTlVCNHdiQlFPTGNNZ210VmpsbTdSNVFrdjlGVTVxMXhZZkx5TiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721409367),
('Uj0pu9ERbt7mjvUATAjYYl4MYWu0xOAk6ccQeBpS', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSkZJbU1pdFdCNGYzMDFiRklRSUZydDFySnpIU1YxMnVKTEpvZ1NqUSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721409372),
('UNVmi0f7XlSp9b22PT14IBeI3zThJlJwgsrFwPfG', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoic21Uc2J2SGMxcDUyRkxMVG1jNjFLOTVoVlAwbXBHQXRPYXY5SkxHSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392312),
('uQAFPCkTVUeH5PmNcjctRUv9VHs15G5BGinNqPva', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRU55akdUeXZIeXpQeVN1cHRiSVNQdE1tMVRLcVBuaTZZWlBOQzZzNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392786),
('WaZqgTgiqib2FjbJtteiZtE9uDK3gjvRxOX40CJQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSVRYUjlhOENyVllwYXk3TDZRMXJHR0IyZEI2aHlPSHBNYkt4bjdJSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392799),
('wHzt0FhhDxwx7k0LoiRQZQ01N0Gr6HLYfms0gDqn', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSEY1MFdoN0dHSVZWeGU2dmNIbVlHSmNvUkdWZzNORlVVUzc3cGtGYSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721409372),
('yKydxwkuIWDg5EGInmHAe0lYck6a9O4fbrjk8F7o', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZVNhN3hIdzFJUTJ6NjRLWUlLMUVCTWNyRHlYZFZ3MkFVM0Rkd25JSSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392787),
('YmJ3umztOQ21JS5l9GbhUxhJa7s0rXjArU2R8vmv', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUTNKZTc0M0l6aXdDRml6YTFtTkFScU9iTU5YQ2dNRGRBbWUxclphRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbmV3cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721392769),
('YXC2Jd0YXQEyPiRmKtKbe0PMDlpDRcNOiOdv7Yfh', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVXNQSW1GVEJ0T2x2dDRYNkh6T2dFRXJhb0pod1ZOSmJzMDBYaGQyYSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721410067);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adderss` varchar(255) NOT NULL DEFAULT '',
  `phone_number` varchar(255) NOT NULL,
  `role_id` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `adderss`, `phone_number`, `role_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'duyanh', 'duyanh@gmail.com', '123', '', '', 1, 1, NULL, NULL),
(2, 'Admin', 'admin@gmail.com', '$2y$12$3iJ7Hz7VdpnI3yQ/5MtFCezcn18KQb.2sDVu9Fpenh4drrgElyNDK', '123', '123', 0, 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

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
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `product_types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
