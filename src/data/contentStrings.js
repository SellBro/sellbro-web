import { assets } from 'utils/styles';

export const title = {
  heading2: 'Games and more',
};

export const team = {
  header: 'Our company',
  heading1: 'Leadership',
  mates: [
    {
      name: 'Surzhenko Viacheslav',
      rank: 'Founder & CEO',
      image: assets.slavaImg,
      description:
        'SellBro CEO and Founder. The last one from "Original 3". Currently is a game developer and responsible for studio\'s Game Department.',
    },
    {
      name: 'Max Kuchynskyj',
      rank: 'Fullstack developer',
      image: assets.maxImg,
      description:
        'A young and perspective member of SellBro Studio. Our Fullstack star and a React lover. Head of Web Department.',
    },
    {
      name: 'Valentine Balaban',
      rank: 'Creative director',
      image: assets.asarImg,
      description:
        'Valentine is a capable but a bit lazy creative director partially responsible for studio\'s logo and current studio\'s state.',
    },
  ],
};

export const about = {
  header: 'About Us',
  heading1: 'SellBro Studio',
  description:
    'SellBro is a small yet progressive dev studio founded in Ukraine. Originally named "SellBro Game Studios" and had 3 members in it. Surzhenko "SVell" Viacheslav, Ostap "OffBro" Nezenskiy and Vlad "Yell" Lukashenko. Years passed and from the original founders only SVell continued working on different game titles and technologies. In Year 2020 SellBro gained a new blood Maxim "YoungRake" Kuchynskyj - a talented frontend developer who is working on Front- and Backends of our projects. The studio was renamed to "SellBro Studio" and it is looking forward for new challenges and projects.',
  image: assets.joyStickImg,
};

export const contacts = {
  header: 'Contact us',
  heading2: "Let's get talking",
  form: {
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    inputs: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        icon: assets.userSvg,
      },
      {
        label: 'E-mail',
        name: 'email',
        type: 'text',
        placeholder: 'E-mail',
        icon: assets.mailSvg,
      },
      {
        label: 'Message',
        name: 'message',
        type: 'textarea',
        placeholder: 'Message',
        icon: assets.messageSvg,
      },
    ],
  },
  info: {
    mail: [
      {
        heading: 'Prefer to use email?',
        mailTo: 'sellbro@gmail.com',
      },
      {
        heading: 'Got a game idea to share?',
        mailTo: 'sellbroideas@gmail.com',
      },
    ],
    phones: {
      heading: 'Or you can call us:',
      phones: [
        {
          country: 'UK',
          phone: '8-800-555-35-35',
        },
        {
          country: 'Ukraine',
          phone: '+380-95-130-94-88',
        },
      ],
    },
    links: [
      {
        to: 'https://github.com/SellBro',
        icon: assets.githubImg,
      },
    ],
  },
};

export const validations = {
  required: 'Required field',
  invalidEmail: 'Invalid email',
};