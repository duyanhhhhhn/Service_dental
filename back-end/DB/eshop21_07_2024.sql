-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2024 at 03:02 PM
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
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(6, '2024_07_19_131609_create_appointments_table', 2),
(7, '2024_07_19_172519_create_personal_access_tokens_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `description` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `description`, `thumbnail`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dental Health Tips for Kids', 'Maintaining good dental health is crucial for kids as it sets the foundation for a lifetime of healthy teeth and gums. Here are some essential dental health tips to help ensure your child’s smile remains bright and healthy.  1. Start Early: Begin oral care early, even before your baby’s first tooth appears. Wipe your baby’s gums with a clean, damp cloth after feedings. Once the first tooth comes in, start brushing with a small, soft-bristled toothbrush and a tiny amount of fluoride toothpaste.  2. Establish a Routine: Make brushing and flossing a part of your child’s daily routine. Encourage brushing at least twice a day and flossing once a day. Use a timer or play a fun song to ensure they brush for the recommended two minutes.  3. Choose the Right Toothpaste: Use fluoride toothpaste to help prevent cavities. For children under three, use a smear or grain-sized amount. For children aged three to six, use a pea-sized amount. Supervise brushing to ensure they don’t swallow toothpaste.  4. Healthy Eating Habits: Limit sugary snacks and drinks, which can lead to tooth decay. Encourage your child to eat a balanced diet with plenty of fruits, vegetables, and dairy products that promote strong teeth and gums. Drinking water instead of sugary drinks can also help keep their teeth healthy.  5. Regular Dental Visits: Schedule regular dental check-ups starting from the first birthday or when the first tooth appears. Regular visits help detect potential issues early and allow the dentist to provide professional cleaning and preventive care.  6. Teach Proper Technique: Show your child the correct way to brush and floss. Teach them to hold the toothbrush at a 45-degree angle to the gums and to brush gently in circular motions. Demonstrate flossing by carefully sliding the floss between teeth and gently curving it around each tooth.  7. Make Dental Care Fun: Turn brushing and flossing into a fun activity. Let your child choose their toothbrush and toothpaste. Use reward charts and offer praise or small rewards for consistent dental care.  8. Protect Their Teeth: If your child is active in sports, ensure they wear a mouthguard to protect their teeth from injury. Talk to your dentist about the best type of mouthguard for your child.  9. Lead by Example: Set a good example by practicing good oral hygiene yourself. Children are more likely to follow through with dental care if they see their parents taking it seriously.  10. Address Dental Anxiety: Some children may be anxious about visiting the dentist. Prepare them by explaining what to expect during the visit. Choose a pediatric dentist who is experienced in dealing with children and can make the visit a positive experience.  By following these dental health tips, you can help your child develop healthy oral hygiene habits that will last a lifetime. Remember, a healthy smile starts with good habits at a young age.  This content provides practical and engaging tips for parents to help their children maintain good dental health, suitable for a news article aimed at promoting dental hygiene among kids.', 'Discover essential dental health tips to keep your kids\\\' teeth strong and healthy.', 'https://bizweb.dktcdn.net/thumb/grande/100/355/752/products/boc-rang-su.jpg?v=1560098941690', 1, NULL, NULL),
(2, 'How to Prevent Gum Disease', 'Gum disease, also known as periodontal disease, is a common condition that can lead to serious oral health issues if left untreated. Here are some effective ways to prevent gum disease and maintain healthy gums:  1. Maintain Good Oral Hygiene Brush Regularly: Brush your teeth at least twice a day using fluoride toothpaste. Ensure you brush for at least two minutes each time. Use the Right Technique: Hold your toothbrush at a 45-degree angle to your gums and use short, gentle strokes to clean all surfaces of your teeth, including the front, back, and chewing surfaces. Floss Daily: Flossing helps remove plaque and food particles from between your teeth and under the gumline where your toothbrush can’t reach. Rinse with Mouthwash: Use an antimicrobial or fluoride mouthwash to reduce plaque and prevent gingivitis. 2. Schedule Regular Dental Check-Ups Professional Cleanings: Visit your dentist or dental hygienist every six months for professional cleanings to remove tartar (hardened plaque) that can’t be removed with regular brushing and flossing. Regular Exams: Regular dental exams help detect early signs of gum disease, tooth decay, and other oral health issues. 3. Maintain a Healthy Diet Limit Sugary Foods and Drinks: Sugary foods and beverages can contribute to plaque buildup and gum disease. Opt for water, milk, and unsweetened tea instead. Eat Nutritious Foods: Include plenty of fruits, vegetables, whole grains, and lean proteins in your diet. Foods rich in vitamins and minerals, particularly vitamin C and calcium, support healthy gums and teeth. 4. Quit Smoking and Tobacco Use Avoid Tobacco Products: Smoking and using other tobacco products increase the risk of gum disease and oral cancer. Quitting tobacco can significantly improve your gum health and overall well-being. 5. Manage Stress Reduce Stress: High levels of stress can negatively affect your immune system, making it harder for your body to fight off infections, including gum disease. Practice stress-reducing techniques such as exercise, meditation, and deep breathing. 6. Stay Hydrated Drink Plenty of Water: Drinking water helps wash away food particles and bacteria, keeping your mouth clean and reducing the risk of gum disease. 7. Be Aware of Medications Understand Medication Side Effects: Some medications can reduce saliva flow, leading to dry mouth and increased risk of gum disease. If you experience dry mouth, talk to your dentist about ways to increase saliva production, such as using a saliva substitute or chewing sugar-free gum. 8. Recognize Early Signs of Gum Disease Monitor Your Gums: Be aware of symptoms such as red, swollen, or bleeding gums, persistent bad breath, receding gums, and loose teeth. Early detection and treatment can prevent the progression of gum disease. 9. Use the Right Dental Products Choose the Right Toothbrush: Use a soft-bristled toothbrush to avoid irritating your gums. Electric toothbrushes can also be effective in reducing plaque and gingivitis. Consider Antimicrobial Toothpaste: Some toothpastes are formulated to reduce bacteria and help prevent gum disease. 10. Consider Additional Preventive Measures Dental Sealants: In some cases, dental sealants can be applied to protect the teeth from decay and reduce the risk of gum disease. Fluoride Treatments: Your dentist may recommend fluoride treatments to strengthen your teeth and gums. By following these steps, you can significantly reduce your risk of developing gum disease and maintain healthy gums and teeth. Regular dental care, good oral hygiene, and a healthy lifestyle are key to preventing gum disease and ensuring long-term oral health.', 'Learn about the best practices to prevent gum disease and maintain healthy gums.', 'https://www.kin.es/wp-content/uploads/2024/01/fatores_que_influyen_en_la_rapidez.jpg', 1, NULL, NULL),
(3, 'The Importance of Regular Dental Checkups', 'Regular dental checkups are crucial for maintaining good oral health and preventing various dental problems. Here are some reasons highlighting the importance of these checkups:  1. Early Detection of Dental Issues Prevention and Early Treatment: Regular dental visits allow your dentist to detect early signs of dental problems such as cavities, gum disease, and oral cancer. Early detection can lead to less invasive and more effective treatments. Avoiding Complications: Identifying issues early can prevent them from developing into more severe problems that require extensive and expensive treatments. 2. Professional Cleaning Removing Plaque and Tartar: Even with diligent brushing and flossing, it’s challenging to remove all plaque and tartar buildup. Professional cleanings help to remove these deposits, preventing cavities and gum disease. Polishing Teeth: Dental professionals can polish your teeth, removing surface stains and giving you a brighter smile. 3. Gum Disease Prevention Gingivitis and Periodontitis: Regular checkups help in the early detection and treatment of gingivitis, the first stage of gum disease. If left untreated, gingivitis can progress to periodontitis, a more severe form of gum disease that can lead to tooth loss. Deep Cleaning: For those already showing signs of gum disease, dental checkups can include deep cleaning procedures, such as scaling and root planing, to treat the condition. 4. Oral Cancer Screening Early Detection: Dentists perform oral cancer screenings during regular checkups. Early detection of oral cancer can significantly improve treatment outcomes and survival rates. Risk Factor Management: Dentists can identify risk factors for oral cancer and provide guidance on reducing those risks. 5. Maintaining Overall Health Connection to Systemic Health: Oral health is closely linked to overall health. Poor oral hygiene and untreated dental issues can contribute to various systemic conditions, including heart disease, diabetes, and respiratory infections. Comprehensive Health Advice: Dentists can offer advice on how to maintain good oral health, which in turn can positively impact your overall well-being. 6. Personalized Dental Care Customized Advice: Dentists provide personalized advice based on your unique dental needs and health history. This includes recommendations on brushing techniques, flossing, diet, and lifestyle choices. Preventive Measures: Your dentist can suggest specific preventive measures, such as fluoride treatments or dental sealants, tailored to your needs. 7. Enhancing Your Smile Cosmetic Improvements: Regular checkups can help maintain a beautiful smile. Dentists can identify cosmetic issues and provide treatments such as whitening, veneers, or bonding to enhance your appearance. Boosting Confidence: A healthy and attractive smile boosts your confidence and self-esteem, positively impacting your social and professional life. 8. Cost Savings Preventing Expensive Treatments: Regular checkups can prevent the need for costly and extensive dental procedures by addressing issues early. Insurance Benefits: Many dental insurance plans cover preventive care, including regular checkups and cleanings, which can save you money in the long run. 9. Education and Awareness Oral Hygiene Education: Dentists and dental hygienists provide education on proper oral hygiene practices and the importance of maintaining good oral health. Raising Awareness: Regular visits raise awareness about potential dental issues and the impact of oral health on overall health. 10. Building a Relationship with Your Dentist Trust and Comfort: Regular visits help build a trusting relationship with your dentist, making you more comfortable during dental procedures and more likely to seek timely care. Comprehensive Care: A long-term relationship with your dentist ensures continuity of care, with your dentist having a thorough understanding of your dental history and needs. In conclusion, regular dental checkups are essential for maintaining good oral health, preventing dental problems, and ensuring early detection and treatment of potential issues. By scheduling routine visits to your dentist, you can enjoy a healthy, beautiful smile and overall well-being.', '\"Travels between clinics to work, as needed.\n\"', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4FsoskFnlx0WMMDX3MFnH4N-vlvzKM8LdvY9x1s-yz68xnvSokoY6BEtjAwE8o3jbETpSs1KkoCHd0wK-v5GNfKT6R-8gZnvL6ZpmPGid8-jY7zAdjpWNh8AQk0nmK1DoIPlrdyDKUCs/s1600/image.png', 1, NULL, NULL),
(4, 'Choosing the Right Toothbrush', ' Choosing the right toothbrush is essential for maintaining good oral hygiene. With so many options available, it can be challenging to know which one is best for you. Here are some factors to consider when selecting a toothbrush:  1. Bristle Type Soft Bristles: Most dental professionals recommend soft-bristled toothbrushes. They are gentle on your gums and effective at removing plaque without causing damage to the enamel or gums. Medium and Hard Bristles: Medium and hard bristles can be too abrasive, potentially leading to gum recession and enamel wear. They are generally not recommended unless specifically advised by your dentist. 2. Bristle Pattern Multilevel Bristles: Toothbrushes with multilevel bristles or angled bristles can be more effective at reaching between teeth and along the gumline. Polishing Cups and Textures: Some toothbrushes have polishing cups or textured bristles designed to help remove surface stains and polish teeth. 3. Toothbrush Head Size Small Heads: A smaller toothbrush head can reach difficult areas in your mouth, including the back teeth and along the gumline, making it more effective for thorough cleaning. Large Heads: Larger heads can cover more surface area quickly but may struggle to reach tight spaces. Choose a size that allows you to comfortably navigate your mouth. 4. Handle Design Ergonomic Handles: Look for a toothbrush with a comfortable, ergonomic handle that fits well in your hand and provides good grip and control while brushing. Non-Slip Grip: A non-slip grip can help maintain better control, especially if your toothbrush or hands are wet. 5. Manual vs. Electric Manual Toothbrush: Manual toothbrushes are effective if used with proper technique. They are generally less expensive and easier to travel with. Electric Toothbrush: Electric toothbrushes can be more effective at reducing plaque and gingivitis, especially for those who struggle with manual brushing technique. They are available in various types, including oscillating-rotating and sonic models. 6. ADA Seal of Approval ADA Seal: Look for the American Dental Association (ADA) Seal of Approval on the toothbrush packaging. This indicates that the toothbrush has been tested for safety and effectiveness. 7. Special Considerations Orthodontic Needs: If you have braces or other orthodontic appliances, consider a toothbrush specifically designed for orthodontic care, which can help clean around brackets and wires. Sensitive Teeth or Gums: For those with sensitive teeth or gums, a toothbrush with extra-soft bristles may be more comfortable and gentle. 8. Replace Regularly Every 3-4 Months: Replace your toothbrush or toothbrush head every 3-4 months, or sooner if the bristles are frayed. Worn bristles are less effective at cleaning teeth and can harbor bacteria. 9. Personal Preference Comfort and Ease of Use: Ultimately, choose a toothbrush that feels comfortable and easy to use, encouraging you to maintain consistent oral hygiene habits. 10. Recommendations from Your Dentist Professional Advice: Consult your dentist for personalized recommendations based on your specific oral health needs and conditions. They can provide guidance on the best toothbrush for you. By considering these factors, you can choose a toothbrush that effectively meets your oral hygiene needs and helps maintain a healthy smile. Regular brushing, combined with flossing and professional dental care, is key to optimal oral health.', '\"Understand why regular dental checkups are crucial for your overall health and well-being.\n\"', 'https://www.dentalnhakhoa.com/wp-content/uploads/2014/12/kham-nha-khoa-IMPLANT.jpg', 1, NULL, NULL);

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
('5BBX1BqmfKYSn8jGy6Gqj80M1NY5wbX0TJO1YGZm', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQXJ5U1hyV0R6Ums2bXBHWmFiVlpJNnhZNVpaWlBWZTBmTFBYZFh5UyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465654),
('5TL4JiRJSSFhkl78VAlP4ZDBZg75irXnY6mA51YN', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNG4yNk9LUXNwQ1JLMjQxRFRjbG5pTG0zWHJNTlBFZnZ0SWpDR2pUcSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721468754),
('BOMxrogIjOmAOgDtL2Vy5iuC2BAsyPnYqfAz58Lf', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTHpYRkFvTlBSdm1KWnF3Y2g4c1o3ZnhWTGw5UTFnMFJOb0c2OGI0SiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465567),
('DxW506AJbQGvd4ccDcl7xZgOFflH5ZzRbbjtJNeL', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNkVFYXBMZUpqdDRJUmhvV3F2dVdtT0lBcEdzR2Q4S2g4am50WkhjYyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721468901),
('f3mBICdBuMUQeZghzcwWJMe7UEgmDmHKIi0EeWRe', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZm5wTVZTZjlBWE80aFVCV1lTY2F1ZXZrYnF6T1FQWlg5M1ZnU0dZMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zYW5jdHVtL2NzcmYtY29va2llIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721468749),
('FeLjz2kXqdqoUiNnGnXJNtdsNdmN3CvDjfd2lFvS', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMFlLUmxGTnJOMFFUTGdSQjZybEp4ckQ1Q2t6aXUyVWNYRGlKTmtEdyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465653),
('HCJGnqQyp5VPlrqjDtX7P1BxUoG4iEhenGzzrqTM', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoieG9tZ0p1cTZXVEY1ZWV2YlM3ZTQxcGpEVkJxSktycmp5Z2hoaXhldyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721468392),
('JDjBqh6bkYqotrlCkzBnBIw0NfKQFG92xRLTY1Hc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoid09DMWVWWjRwdE9LbVpKUlZVem4zN3IybUFOT1FudWhzdEdLOFlvUyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465840),
('jNZyaiFn0hOU4hBdyETUBBRrwugysaL9PEwVlX1U', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSW4weDVub0R2Y3dnODQxbnczSXdDUTkzeWNhRG1zOVJUTVFvdVo2TyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465652),
('K9wSC2TV3cxpFCrx3Lw70A2GxGrbGYKQrYRe4LzV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoienlQR3g4ZTZpR3BiVHJMR0ZjY1dKUHU1NFhYdmlmZWlrekg5VWl6YiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465551),
('ojQAh0REKt3V2BcRuCzbRU1B2PkckpxQ72p5t7YW', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidEdHUnpqVjkzQzlYczNGWVJwa3hSNUpYd2t3Vjk1aTNTbFdXZEJ2RyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465553),
('ou6C55uxsustDcrZKWZ4cEtet2a4bYcOtpYNhA3b', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZEpFclJxaTFDNklXbHprdkR2YnRIZTN3ekpTWlNrZkpjd2xMdVp4ViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zYW5jdHVtL2NzcmYtY29va2llIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721468744),
('SWHvEft4xLMdQp9EZvIDcNGkwh89Jxp7BYaT0B1t', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNk1rcUdSOTFPbFhkNlU4aU00dGd1aEgzRlFNaWthMmNVNUJhUmxDUCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465653),
('tPatwsllSBUycqLXVBBSAeJEXTCnH8VwiCJHiLS0', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSG11cFZCc3JIbDlGMmYyNFRNNW5ZYmhHMkFpeWRXUVZSVTA0Q3ZPUSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465653),
('uUo697o3ObURjbhtN47GIHVbCdSDbr0ckb5Aw03M', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0R0Z1JLelNSdjFOdzJOUzBuWkFpaWg2aWlId1lJZDBtaXBucHB1UCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvY3NyZi10b2tlbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721464593),
('UuoK1xNnsSVIe49svft2tM2t7faqxKtUiv8nCTmQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS0NsNjY1czltclpLenE5S0QzVnEyVEZsTXV4bnVSOWpCOEF0UW5ySCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zYW5jdHVtL2NzcmYtY29va2llIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721468899),
('wCp1yT0VsMh9P9l4x318wKFyZwFF3hfMKuKafhrB', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiV2pFNUZLOWdrblF5MWdjT1UzMU9qbG9jZ0FQalZFbDNoeWh6akFSOCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465652),
('WhoIll87jxKXr4e8cAXisbaZVOeBklOfq1JUbZtp', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNzdqbTlqUWM1VWZ0eXFWWWRuQnVLRG5SZ0M2c3Z2MlVRUE94VDBQRiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465638),
('xBsmzgoUJO84VwM4OiEPvD9yHYafVWQ7RXIu1SAP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTDJZSWYxRkc1UVdZWVFiMGlpZ205eENYQWlONzlyMUFIRFFQazVMZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721465651),
('XOcDwVTbV0IHmy7tPIU2kOHQU9UztZ7Sn7yAauMd', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSzc0VXpFMWUxSzh3N1RjYWhtV09QRnVkdkVYMXZYVTBRU1B0RFdpVSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721469170);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
