import { Project } from './project';

export const projects: Project[] = [
  {
    name: 'SportKy',
    category: 'Website',
    desc: 'web application for sports facility booking transactions',
    link: {
      demo: null,
      repo: 'https://github.com/iccangji/sportky-web',
    },
    tech: ['HTML', 'PHP', 'Laravel'],
    image: 'sportky.png',
  },
  {
    name: 'Sistem Informasi Jadwal Kuliah',
    category: 'Website',
    desc: 'web app to display lecture schedules in the informatics engineering department',
    link: {
      demo: null,
      repo: 'https://github.com/iccangji/sija-kuliah',
    },
    tech: ['HTML', 'PHP', 'Laravel'],
    image: 'sija-kuliah.png',
  },
  {
    name: 'Understext App',
    category: 'Mobile',
    desc: 'Android app to analyze text to get more information.',
    link: {
      repo: 'https://github.com/iccangji/text-analysis-app',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'understext.png',
  },
  {
    name: 'Plant Shop',
    category: 'Mobile',
    desc: 'Mutli-platform app to display a list of plants and their information plus local bookmark feature.',
    link: {
      repo: 'https://github.com/iccangji/flutter-plantshop',
      demo: null,
    },
    tech: ['Dart', 'Flutter'],
    image: 'plant-shop.png',
  },
  {
    name: 'LapakKita',
    category: 'Mobile',
    desc: 'Android app to display nearby stalls accompanied by comprehensive information and recommendation features',
    link: {
      repo: 'https://github.com/HuseinHQ/capstone-C23-PC715/tree/mobile_development',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'lapakkita.png',
  },
  {
    name: 'Story App',
    category: 'Mobile',
    desc: 'Application that is able to share photo stories with other users',
    link: {
      repo: 'https://github.com/iccangji/story-app-android',
      demo: null,
    },
    tech: ['Kotlin', 'Android Studio'],
    image: 'story-app.png',
  },
];
