-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 27. 09 2019 kl. 06:26:51
-- Serverversion: 10.1.34-MariaDB
-- PHP-version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boligstjernen`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `admin_login`
--

CREATE TABLE `admin_login` (
  `id` int(11) NOT NULL,
  `admin_brugernavn` varchar(45) DEFAULT NULL,
  `admin_adgangskode` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `admin_login`
--

INSERT INTO `admin_login` (`id`, `admin_brugernavn`, `admin_adgangskode`) VALUES
(1, 'admin', '$2b$10$rsUF22rsxWo/gdF7C/UF8e6qRRu5RoNqVscGrMos3O0405685kuNK');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `boliger`
--

CREATE TABLE `boliger` (
  `id` int(11) NOT NULL,
  `sagsnummer` varchar(45) DEFAULT NULL,
  `bolig_type` varchar(45) DEFAULT NULL,
  `boligstørrelse` varchar(45) DEFAULT NULL,
  `grundareal` varchar(45) DEFAULT NULL,
  `pris` varchar(45) DEFAULT NULL,
  `brutto` varchar(45) DEFAULT NULL,
  `netto` varchar(45) DEFAULT NULL,
  `titel` varchar(100) DEFAULT NULL,
  `beskrivelse` mediumtext,
  `billede` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `boliger`
--

INSERT INTO `boliger` (`id`, `sagsnummer`, `bolig_type`, `boligstørrelse`, `grundareal`, `pris`, `brutto`, `netto`, `titel`, `beskrivelse`, `billede`) VALUES
(10, '287100', 'landejendom', '285', '11.700', '5.500.00', '32.689', '26.357', 'Indflytningsklar luksusejendom nær skov og strand.', 'Beliggenheden er ideel, fordi man bor i byen, men samtidig er meget nær en god golfbane og dejlige, rekreative områder. Villaen, der er i to plan, er fra 2001, og den er opført i en utroligt høj kvalitet med mange meget fine og unikke detaljer. Man ankommer til ejendommen via en lille allé, der ender ved den dobbelte garage, som på harmonisk vis er opført i samme stil, som boligen. Grunden på 1.887 m2 er anlagt af en anlægsgartner, hvilket man straks lægger mærke til, når man kigger ud over den flotte have, der har symmetrisk placerede hække, en elegant flise- og stensætning samt hyggelige terrasser.', '1a.jpg'),
(14, '108072', 'Rækkehus', '128', '18.200', '2.895.000', '17.976', '16.137', 'Indflytningsklar luksusejendom nær skov og strand.', 'I byggeriet er der lagt vægt på enkle materialer. Det sker for at opnå et æstetisk rent udtryk, der danner en moderne kontrast til det naturskønne område. Ydervæggene udgør ensartede lyse flader på den grønne baggrund. Samtidig har arkitekten kælet for detaljerne. Boligen er orienteret mod syd/vest og har et boligareal på 128 kvm og indeholder: Stor entre, 2 værelser, toilet samt køkken-alrum med udgang til gårdhaven. På 1. sal findes en stor stue, bad, soveværelse samt forrum med skabe.', '2a.jpg'),
(17, '180702', 'Lejlighed', '128', '12.800', '1.795.000', '12854', '9873', 'Nydelig og funktionelt indrettet høj stuelejlighed.', 'Lejligheden er beliggende i en hyggelig, stille sidegade med mange smukke, gamle ejendomme og masser miljø. Lejligheden ligger i gåafstand til et spændende udvalg af indkøbsmuligheder, caféer, specialbutikker samt restauranter. Der er ligeledes få minutters gang til offentligt transport. Lejligheden indeholder entre/gang, nyt stort HTH køkken med mulighed for spiseplads, stort lyst soveværelse, stort pænt badeværelse samt 2 store og dejlige lyse stuer en suite. Lejligheden er indflytningsklar, meget lys og har nye flotte plankegulve. Ejendommen, der er opført i 1920, er istandsat med respekt for de mange detaljer denne ejendom byder på. Tag og facader er nyistandsat med nye termovinduer med lavenergiglas. Til lejligheden hører kælderrum, fælles vaskekælder samt hyggeligt nyrenoveret gårdmiljø.', '3a.jpg'),
(18, '172708', 'Villa', '212', '2.046', '4.795.000', '29229', '25120', 'Arkitektonisk perle tæt på centrum.', 'Herskabelig og nyistandsat villa med en meget attraktiv beliggenhed i det bedste kvartér. Den charmerende villa, der er opført i 1910 og er beliggende direkte ned til åen. Villaens samlede boligareal udgør 212 m2 fordelt på stueplan og første sal. Dertil kommer en kælder på 108 m2 i meget fin boligkvalitet.', '4a.jpg');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategorier`
--

CREATE TABLE `kategorier` (
  `id` int(11) NOT NULL,
  `kategorier` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `kategorier`
--

INSERT INTO `kategorier` (`id`, `kategorier`) VALUES
(1, 'Villa'),
(2, 'rækkehus'),
(3, 'lejlighed'),
(4, 'landejendom');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontakt`
--

CREATE TABLE `kontakt` (
  `id` int(11) NOT NULL,
  `modtager_email` varchar(45) DEFAULT NULL,
  `sender_email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `kontakt`
--

INSERT INTO `kontakt` (`id`, `modtager_email`, `sender_email`) VALUES
(1, 'stylez5555@gmail.com', 'cttorno@gmail.com');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `nyheder`
--

CREATE TABLE `nyheder` (
  `id` int(11) NOT NULL,
  `titel` varchar(100) DEFAULT NULL,
  `dato` varchar(15) DEFAULT NULL,
  `tekst` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `nyheder`
--

INSERT INTO `nyheder` (`id`, `titel`, `dato`, `tekst`) VALUES
(11, 'EJENDOMSHANDEL MERE TRYG OG SIKKER', '2006-04-26', 'Ejendomsmæglerne får øget oplysningspligt. Og et disciplinærnævn skal sikre skrappere sanktioner, hvis en mægler overtræder reglerne.  Økonomi- og erhvervsminister Bendt Bendtsen (K) fik torsdag vedtaget sin skarpere linje over for ejendomsmæglere i Folketinget.  - Jeg er meget tilfreds med, at der var bred opbakning i Folketinget til mit lovforslag til stramninger af reglerne for omsætning af fast ejendom. Det bliver nu endnu mere trygt og sikkert for forbrugerne at handle bolig i Danmark, siger økonomi- og erhvervsminister Bendt Bendtsen.'),
(14, 'VI SKAL INFORMERE BEDRE', '2006-04-30', 'Dansk Ejendomsmæglerforening vil se nærmere på, om danske ejendomsmæglere kan blive bedre til at informere køberne ved bolighandler.   Når vi mødes efter sommerferien vil vi kigge på, om vores forbrugeretiske regler bør udbygges med nogle punkter om det her, siger næstformand Arne Madsen fra Dansk Ejendomsmæglerforening.   Generelt vil vi indskærpe, at man skal informere ordentligt. Køberne skal altid være velinformerede om deres situation, tilføjer Arne Madsen.'),
(18, 'LÆNGERE MELLEM BUDRUNDER PÅ BOLIGMARKEDET', '2006-05-05', 'Boligkøberne står ikke længere på nakken af hinanden, og det har siden sidste sommer betydet en halvering af boliger, der bliver sat til salg i licitation.  Boligejernes Videncenter Bolius har taget temperaturen på licitationsalget hos de tre største ejendomsmæglerkæder, Home, EDC og Danbolig. Alle tre melder om en halvering fra 10-12 procent sidste sommer til under 4-5 procent i dag.  ');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `boliger`
--
ALTER TABLE `boliger`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kategorier`
--
ALTER TABLE `kategorier`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kontakt`
--
ALTER TABLE `kontakt`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `nyheder`
--
ALTER TABLE `nyheder`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `boliger`
--
ALTER TABLE `boliger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Tilføj AUTO_INCREMENT i tabel `kategorier`
--
ALTER TABLE `kategorier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tilføj AUTO_INCREMENT i tabel `kontakt`
--
ALTER TABLE `kontakt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `nyheder`
--
ALTER TABLE `nyheder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
