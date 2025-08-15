import { Project } from './project';

export const projects: Project[] = [
  {
    name: 'GreenRoute',
    category: 'Web',
    desc: 'Web that optimize waste disposal routes and minimize transportation costs',
    link: {
      demo: null,
      repo: 'https://github.com/iccangji/greenroute',
    },
    tech: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'Next.js', 'React'],
    image: 'greenroute.png',
  },
  {
    name: 'E-Katalog Irda Utama',
    category: 'Web',
    desc: 'Web that display a list of products and their information of office supplies store',
    link: {
      demo: 'https://cv-irda-utama.com/',
      repo: 'https://github.com/iccangji/cv-irda-utama',
    },
    tech: ['JavaScript', 'Node.js', 'Express.js', 'Next.js', 'React'],
    image: 'irda-utama.png',
  },
  {
    name: 'Sistem Validasi Pemilih',
    category: 'Web',
    desc: 'Web that verifies voter eligibility with the official voter list.',
    link: {
      demo: null,
      repo: 'https://github.com/iccangji/sigemoy',
    },
    tech: ['HTML', 'PHP', 'Laravel', 'JavaScript'],
    image: 'rekap-pemilih.png',
  },
  {
    name: 'Sistem Informasi Jadwal Kuliah',
    category: 'Web',
    desc: 'Web app that display lecture schedules in the informatics engineering department',
    link: {
      demo: null,
      repo: 'https://github.com/iccangji/sija-kuliah',
    },
    tech: ['HTML', 'PHP', 'Laravel'],
    image: 'sija-kuliah.png',
  },
  {
    name: 'SportKy',
    category: 'Web',
    desc: 'Web application for sports facility booking transactions',
    link: {
      demo: null,
      repo: 'https://github.com/iccangji/sportky-web',
    },
    tech: ['HTML', 'PHP', 'Laravel'],
    image: 'sportky.png',
  },
  {
    name: 'Understext App',
    category: 'Mobile App',
    desc: 'Android app that analyze text to get more information.',
    link: {
      repo: 'https://github.com/iccangji/text-analysis-app',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'understext.png',
  },
  {
    name: 'Plant Shop',
    category: 'Mobile App',
    desc: 'Mutli-platform app that display a list of plants and their information plus local bookmark feature.',
    link: {
      repo: 'https://github.com/iccangji/flutter-plantshop',
      demo: null,
    },
    tech: ['Dart', 'Flutter'],
    image: 'plant-shop.png',
  },
  {
    name: 'AnimeList App',
    category: 'Mobile App',
    desc: 'Android app that display list recommendation of anime and support favorite/bookmark feature.',
    link: {
      repo: 'https://github.com/iccangji/anime-list-android',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'anime-list.png',
  },
  {
    name: 'LapakKita',
    category: 'Mobile App',
    desc: 'Android app that display nearby stalls accompanied by comprehensive information and recommendation features',
    link: {
      repo: 'https://github.com/HuseinHQ/capstone-C23-PC715/tree/Mobile App_development',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'lapakkita.png',
  },
  {
    name: 'Story App',
    category: 'Mobile App',
    desc: 'Application that is able that share photo stories with other users',
    link: {
      repo: 'https://github.com/iccangji/story-app-android',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'story-app.png',
  },
];
