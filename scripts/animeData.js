const animeDatabase = [
  {
    title: 'Моя геройская академия',
    image: 'https://shikimori.one/uploads/poster/animes/31964/main_2x-7b552c0bcaf9121f6ead0281b1699b07.webp',
    type: 'anime'
  },
  {
    title: 'Дандадан',
    image: 'https://m.media-amazon.com/images/M/MV5BYWFhOWMxNTYtZThiMi00ZmQ5LTlmODktN2QwNzUyZjMyZGQzXkEyXkFqcGc@._V1_.jpg',
    type: 'anime'
  },
  {
    title: 'Поднятие уровня в одиночку',
    image: 'https://storage.yandexcloud.net/s3-metaratings-storage/images/89/96/8996104f9a5990831669e8742d1415de.png',
    type: 'anime'
  },
  {
    title: 'Монолог фармацевта',
    image: 'https://media.themoviedb.org/t/p/w500/e3ojpANrFnmJCyeBNTinYwyBCIN.jpg',
    type: 'anime'
  },
  {
    title: 'Доктор Стоун',
    image: 'https://shikimori.one/uploads/poster/animes/40852/main_alt-bf2e57d30b2e2e2aeff8af208e47d32a.jpeg',
    type: 'anime'
  },
  {
    title: 'Истребитель демонов',
    image: 'https://poster4.me/wp-content/uploads/istrebitel-demonov_3.jpeg',
    type: 'anime'
  },
  {
    title: 'Пламенный отряд',
    image: 'https://media.kg-portal.ru/anime/e/ennennnoshouboutai2/posters/ennennnoshouboutai2_2.jpg',
    type: 'anime'
  },
  {
    title: 'Реанкарнация безработного',
    image: 'https://ru-images.kinorium.com/movie/1080/2183933.jpg?1692112101',
    type: 'anime'
  },
  {
    title: 'Человек бензопила',
    image: 'https://m.media-amazon.com/images/I/71DOGFSR6bL._UF894,1000_QL80_.jpg',
    type: 'anime'
  },
  {
    title: 'Магия и мускулы',
    image: 'https://media.themoviedb.org/t/p/w500/vp3oSq3XUSDeSjv4fvSVlT4mleC.jpg',
    type: 'anime'
  },
  {
    title: 'Начало после конца',
    image: 'https://www.goha.ru/s/A:Nj/TU/VG6TQS8KfR.webp',
    type: 'anime'
  },
  {
    title: 'Ветролом',
    image: 'https://shikimori.one/uploads/poster/animes/54900/main_2x-11cfd006fb5541bd055235e62d7b2da9.webp',
    type: 'anime'
  },
  {
    title: 'Атака титанов',
    image: 'https://poster4.me/wp-content/uploads/2022/05/ataka-titanov_5.jpg',
    type: 'anime'
  },
  {
    title: 'Клинок рассекающий демонов',
    image: 'https://www.kino-teatr.ru/movie/posters/big/1/0/146101.jpg',
    type: 'anime'
  },
  {
    title: 'Тетрадь смерти',
    image: 'https://cdn.kanobu.ru/anime/anime/a88d6a18-0699-4d24-ad30-c37bbd1da72f.jpg',
    type: 'anime'
  },
  {
    title: 'Хантер х хантер',
    image: 'https://m.media-amazon.com/images/I/71aoeOhdNnL._UF1000,1000_QL80_.jpg',
    type: 'anime'
  },
  {
    title: 'Ван пис',
    image: 'https://m.media-amazon.com/images/I/81ncF44lNnL._AC_SL1500_.jpg',
    type: 'anime'
  },
  {
    title: 'Магическая битва',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/bfd6c4b8-2796-4727-8725-59651d2820a7/600x900',
    type: 'anime'
  },
  {
    title: 'Re:Zero - Жизнь с нуля в альтернативном мире',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/73689358-7df0-43e4-8ffd-ff0d8c36f333/600x900',
    type: 'anime'
  },
  {
    title: 'Кайдзю №8',
    image: 'https://shikimori.one/uploads/poster/animes/52588/main_2x-f7ad87fd5f0f5f9da3280188da9630ae.webp',
    type: 'anime'
  },
  {
    title: 'Провожающая в последний путь Фрирен',
    image: 'https://shikimori.one/uploads/poster/animes/52991/main_2x-83b82e9ff64f1b0821239f88ab8651ab.webp',
    type: 'anime'
  },
  {
    title: 'Сага о Винланде',
    image: 'https://static.hdrezka.ac/i/2022/2/13/e2ed3c4e98503hd30i99u.png',
    type: 'anime'
  },
  {
    title: 'Ванпанчмен',
    image: 'https://static.hdrezka.ac/i/2021/11/14/y419ad80e030ecg21k18l.png',
    type: 'anime'
  },
  {
    title: 'Этот замечательный мир',
    image: 'https://shikimori.one/uploads/poster/animes/49458/main-0cbbe43a05ce40ae89988a119f989146.webp',
    type: 'anime'
  },
  {
    title: 'О моём перерождении в слизь',
    image: 'https://shikimori.one/uploads/poster/animes/39551/main-f26ec39d7178557487d45ce1c1d8ee56.webp',
    type: 'anime'
  },
  {
    title: 'Восхождение в тени',
    image: 'https://shikimori.one/uploads/poster/animes/54595/main-66f691966a8d53c614945f736c420a28.webp',
    type: 'anime'
  },
  {
    title: 'Военная хроника маленькой девочки',
    image: 'https://shikimori.one/uploads/poster/animes/37055/main-441a3f88d0031633fa82f1c26427aab1.webp',
    type: 'anime'
  },
  {
    title: 'Мастера меча онлайн',
    image: 'https://static.hdrezka.ac/i/2022/9/14/e7cb0f5f10062lr62p63b.png',
    type: 'anime'
  },
  {
    title: 'Торадора',
    image: 'https://m.media-amazon.com/images/I/51nfGthjluL._AC_UF1000,1000_QL80_.jpg',
    type: 'anime'
  },
  {
    title: 'Хоримия',
    image: 'https://media.kg-portal.ru/anime/h/horimiya/posters/horimiya_2s_2x.jpg',
    type: 'anime'
  },
  {
    title: 'Дотянуться до тебя',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/c7f01abd-7f46-433b-a9a5-06e22559f705/600x900',
    type: 'anime'
  },
  {
    title: 'Твоя апрельская ложь',
    image: 'https://shikimori.one/uploads/poster/animes/23273/main_2x-4e73be80859ca6aeb7dc22f05fb5c484.webp',
    type: 'anime'
  },
  {
    title: 'Цуки га Кирэй',
    image: 'https://shikimori.one/uploads/poster/animes/34822/main_2x-9a67a1830bb83de07891a801a0bea4df.webp',
    type: 'anime'
  },
  {
    title: 'Кагуя: В любви как на войне',
    image: 'https://shikimori.one/uploads/poster/animes/37999/main_2x-245d469bd8aca4fde8a7ac8a8537de43.webp',
    type: 'anime'
  },
  {
    title: 'Орегайру',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c8d24eef-322b-4e15-bea2-a264726938ed/600x900',
    type: 'anime'
  },
  {
    title: 'Старшая школа DXD',
    image: 'https://static.hdrezka.ac/i/2021/11/16/uc4bc4bdffbc9qu27b83g.png',
    type: 'anime'
  },
  {
    title: 'Ангел по соседству',
    image: 'https://static.hdrezka.ac/i/2023/1/8/j39ffa2d4691aqc90r63g.png',
    type: 'anime'
  },
  {
    title: 'Необъятный океан',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/ca5330f6-53b1-4c0a-a06f-36842e87199a/600x900',
    type: 'anime'
  },
  {
    title: 'Гинтама',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/fe1077a6-8547-4f75-9849-8c409979f6db/600x900',
    type: 'anime'
  },
  {
    title: 'Несчастная жизнь Сайки Кусуо',
    image: 'https://static.findanime.net/uploads/pics/00/55/871.jpg',
    type: 'anime'
  },
  {
    title: 'Обычная жизнь старшеклассников',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/b4d41759-6728-4702-b272-dfcab3745368/600x900',
    type: 'anime'
  },
  {
    title: 'Азуманга Дайо',
    image: 'https://upload.wikimedia.org/wikipedia/ru/e/ee/Azumanga_up.jpg',
    type: 'anime'
  },
  {
    title: 'Баракамон',
    image: 'https://www.kino-teatr.ru/movie/posters/big/9/1/160619.jpg',
    type: 'anime'
  },
  {
    title: 'Великий учитель Онидзука',
    image: 'https://upload.wikimedia.org/wikipedia/ru/d/d3/GTO.jpg',
    type: 'anime'
  },
  {
    title: 'Сатана на подработке',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f11ef252-8519-4de1-a1c1-823608f2d19e/600x900',
    type: 'anime'
  },
];