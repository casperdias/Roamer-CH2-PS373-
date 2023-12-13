-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Des 2023 pada 17.46
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bangkit_roamer`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `logbook`
--

CREATE TABLE `logbook` (
  `log_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL,
  `visited_time` date NOT NULL DEFAULT current_timestamp(),
  `text` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `logbook`
--

INSERT INTO `logbook` (`log_id`, `place_id`, `visited_time`, `text`, `user_id`, `created_at`, `updated_at`) VALUES
(4, 1, '2023-12-12', 'Updated log', 1, '2023-12-12 23:25:14', '2023-12-12 23:38:19'),
(7, 1, '2023-12-12', 'Test log', 1, '2023-12-12 23:31:05', '2023-12-12 23:31:05'),
(8, 1, '2023-12-12', 'Test log', 1, '2023-12-12 23:31:38', '2023-12-12 23:31:38'),
(9, 1, '2023-12-12', 'Test log', 1, '2023-12-12 23:32:42', '2023-12-12 23:32:42'),
(10, 1, '2023-12-12', 'Test log', 1, '2023-12-12 23:33:01', '2023-12-12 23:33:01'),
(11, 1, '2023-12-12', 'Test log', 1, '2023-12-12 23:38:19', '2023-12-12 23:38:19'),
(12, 1, '2023-12-12', 'Test log', 1, '2023-12-12 23:40:37', '2023-12-12 23:40:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `params`
--

CREATE TABLE `params` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hobby` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `pref_pricerange` varchar(255) NOT NULL,
  `pref_time` varchar(255) NOT NULL,
  `out/in` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `place`
--

CREATE TABLE `place` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price_range` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `img_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `place`
--

INSERT INTO `place` (`id`, `name`, `city`, `description`, `price_range`, `rating`, `img_link`) VALUES
(1, 'Coba-coab', 'SOLO', 'coba', '25000', 2.5, 'pornhub.com'),
(2, 'asdasf', 'JAKARTA', 'asdasd', '10000', 3.5, 'youporn.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `uid`, `created_at`) VALUES
(1, 'testaa', 'JDqmpet3bYaNSILB9ZcDANRf2Wi2', '2023-12-12 22:46:24'),
(24, 'testaa', 'nKe1mxQeopNeoHJ2nU3jMmBEZE12', '2023-12-12 22:47:18'),
(25, 'testaa', 'HSMyT218tFdhyiu66RvuDcy50Z13', '2023-12-12 22:47:33'),
(26, 'testaa', 'rXk9RXBsmrRPaf0drK1IZbH20aE3', '2023-12-12 22:48:42'),
(27, 'testaa', 'p6Ae51r9ccelrHjpUMHHwHifLrW2', '2023-12-12 22:50:28'),
(28, 'testaa', 'qXUTfyGeFJN4uCMDPazDXjdroMp2', '2023-12-12 23:04:07'),
(29, 'testaa', 'aHqhuBjrAfMYFYEmlQMJ8ptUVLp2', '2023-12-12 23:05:52'),
(30, 'testaa', 'sg3tdp8l94PSLNkAA7wt5iYwQwt1', '2023-12-12 23:06:33'),
(31, 'testaa', 'Irjc3ouTQKQqg3pQ1igSU8L7SPs2', '2023-12-12 23:07:22'),
(32, 'testaa', 'bGwxKX6Lb2Zh37gfYRXE0VFU5342', '2023-12-12 23:07:52'),
(33, 'testaa', 'IryzqxBPEkZsd76t201GdbtwoWw2', '2023-12-12 23:10:08'),
(34, 'testaa', 'KmqE19KHU4bSa5jSYKPLRwkuJf92', '2023-12-12 23:10:38'),
(35, 'testaa', 'N3KCouTSX9X0ZpYCAAm4irZBXHp1', '2023-12-12 23:14:11'),
(36, 'testaa', 'KTDP5XG3PMZv64wGEH9cZNtc8Wn2', '2023-12-12 23:15:17'),
(37, 'testaa', 'SZngXHbTlyeab16MjeHnQv9bArl1', '2023-12-12 23:15:54'),
(38, 'testaa', '2uTdIETMSjN79Ze2vkG1ReuIuJw1', '2023-12-12 23:17:12'),
(39, 'testaa', 'sWIHjExTatQow1G1Uxverr0a3RM2', '2023-12-12 23:17:33'),
(40, 'testaa', 'jjMbfYR7sjNkOqgMUrWMzHw3ZHU2', '2023-12-12 23:20:07'),
(41, 'testaa', 'U0NrVooAm7UcWdYcYTx4fVOoLPj2', '2023-12-12 23:21:50'),
(42, 'testaa', 'LihwN6gD5QbH6pH9nY5tQKiw8Sh1', '2023-12-12 23:22:56'),
(43, 'testaa', 'kBTUx8DvWAPfnTEVRg3yuNFypb83', '2023-12-12 23:30:36'),
(44, 'testaa', 'Wj8J1sBOKoWWnEwMHvakpRbK6wi1', '2023-12-12 23:31:04'),
(45, 'testaa', '40e6a0cu5kamCypMiKkOVf1gn6g1', '2023-12-12 23:31:38'),
(46, 'testaa', 'kZ3HKXqx2EgxtmfYHA9u5sDrii93', '2023-12-12 23:32:41'),
(47, 'testaa', 'TdKVGGJwpIhuFtImC0U8mXyprRD2', '2023-12-12 23:33:00'),
(48, 'testaa', 'VCCj6ITRSwTal6W3dyF1nRQ23282', '2023-12-12 23:38:18'),
(49, 'testaa', 'pC8zsui1vJYWtltDr2pRa6fcSgH3', '2023-12-12 23:40:37');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `logbook`
--
ALTER TABLE `logbook`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `fk_logbook_user` (`user_id`),
  ADD KEY `fk_logbook_place` (`place_id`);

--
-- Indeks untuk tabel `params`
--
ALTER TABLE `params`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_params_user` (`user_id`);

--
-- Indeks untuk tabel `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `logbook`
--
ALTER TABLE `logbook`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `params`
--
ALTER TABLE `params`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `logbook`
--
ALTER TABLE `logbook`
  ADD CONSTRAINT `fk_logbook_place` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`),
  ADD CONSTRAINT `fk_logbook_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `params`
--
ALTER TABLE `params`
  ADD CONSTRAINT `fk_params_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
