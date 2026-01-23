const animeDatabase = [
  {
    title: 'Твое имя',
    image: 'https://www.kino-teatr.ru/movie/poster/125237/88097.jpg',
    type: 'film'
  },
  {
    title: 'Мальчик и Птица',
    image: 'https://upload.wikimedia.org/wikipedia/ru/9/93/%D0%9C%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA_%D0%B8_%D0%BF%D1%82%D0%B8%D1%86%D0%B0_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg',
    type: 'film'
  },
  {
    title: 'Унесённые призраками',
    image: 'https://static.okko.tv/images/v4/c9cd50d0-88f2-4a9b-952e-a75d91683cb6',
    type: 'film'
  },
  {
    title: 'Ходячий замок',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/8910a865-9915-4844-ad89-d4812f64a16e/600x900',
    type: 'film'
  },
  {
    title: 'Мой сосед Тоторо',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10703959/507d8d5c-87e0-4b2e-8da3-e699976ab1cf/600x900',
    type: 'film'
  },
  {
    title: 'Ученик чудовища',
    image: 'https://files.itv.uz/uploads/content/poster/2022/10/18/d360a0090a76719ad2a6c4ebfbbda1ed-q-700x1002.jpeg',
    type: 'film'
  },
  {
    title: 'Принцесса Мононоке',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/0f8a0f49-c2e4-4d9e-a0dc-d8972b7a619f/600x900',
    type: 'film'
  },
  {
    title: 'Дитя погоды',
    image: 'https://www.kino-teatr.ru/movie/posters/big/1/3/135231.jpg',
    type: 'film'
  },
  {
    title: 'Сад изящных слов',
    image: 'https://upload.wikimedia.org/wikipedia/ru/b/b7/%D0%A1%D0%B0%D0%B4_%D0%B8%D0%B7%D1%8F%D1%89%D0%BD%D1%8B%D1%85_%D1%81%D0%BB%D0%BE%D0%B2_%E2%80%94_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg',
    type: 'film'
  },
  {
    title: 'Ветер крепчает',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/51fa972e-7217-44c7-8701-9ff4ecaf2fbb/600x900',
    type: 'film'
  },
  {
    title: 'Шёпот сердца',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10703959/60aa3d84-118b-44d3-b2e4-061594161dd4/600x900',
    type: 'film'
  },
  {
    title: 'Форма голоса',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/f96b4df3-6944-49e6-aae7-6964418826b3/600x900',
    type: 'film'
  },
  {
    title: '5 сантиметров в секунду',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/de727406-1f97-4205-b509-3a73d3dc2157/600x900',
    type: 'film'
  },
  {
    title: 'Атака Титанов: Последняя Атака',
    image: 'https://i.redd.it/yne99eegmdje1.jpeg',
    type: 'film'
  },
  {
    title: 'Властелин колец: Война рохирримов',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThxzvBUOvOS0tgyww6qYId3i_92RKk9uNnQlSQ74LnAdQtdMa1',
    type: 'film'
  },
  {
    title: 'Твой цвет',
    image: 'https://shikimori.one/uploads/poster/animes/53747/main_2x-3fab41746584b9915967aea58934f6d7.webp',
    type: 'film'
  },
  {
    title: 'Стеклодув',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10703959/60aa3d84-118b-44d3-b2e4-061594161dd4/600x900',
    type: 'film'
  },
  {
    title: 'Подземелье вкусностей',
    image: 'https://anilibria.tv/storage/releases/posters/9612/UGku0qpJzfEJMtcf3exNM63a1MPGrRfr.jpg',
    type: 'film'
  },
  {
    title: 'Акира',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/f96b4df3-6944-49e6-aae7-6964418826b3/600x900',
    type: 'film'
  },
  {
    title: 'За облаками',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/51fa972e-7217-44c7-8701-9ff4ecaf2fbb/600x900',
    type: 'film'
  },
  {
    title: 'Судзуме закрывает двери',
    image: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50481615-2420481.jpeg',
    type: 'film'
  },
  {
    title: 'Оглянись',
    image: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50878190-4620308.jpg',
    type: 'film'
  },
  {
    title: 'На твоей волне',
    image: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49548718-1367844.jpg',
    type: 'film'
  }
];