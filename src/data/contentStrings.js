import { assets } from 'utils/styles';

export const title = {
  heading2: 'Games and more',
};

export const team = [
  {
    header: 'Leadership',
    mates: [
      {
        name: 'Surzhenko Viacheslav',
        rank: 'Founder & CEO',
        image: assets.userImg,
        description:
          'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      },
      {
        name: 'Surzhenko Viacheslav',
        rank: 'Founder & CEO',
        image: assets.userImg,
        description:
          'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      },
      {
        name: 'Surzhenko Viacheslav',
        rank: 'Founder & CEO',
        image: assets.userImg,
        description:
          'Curses lie as a part of our world, sometimes just as benign as a harmless trick from a wrongedfairy, turning the milk sour. ',
      },
    ],
  },
  {
    header: 'Team',
    mates: [
      {
        name: 'Surzhenko Viacheslav',
        rank: 'Founder & CEO',
        image: assets.userImg,
        description:
          'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      },
      {
        name: 'Surzhenko Viacheslav',
        rank: 'Founder & CEO',
        image: assets.userImg,
        description:
          'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      },
      {
        name: 'Surzhenko Viacheslav',
        rank: 'Founder & CEO',
        image: assets.userImg,
        description:
          'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      },
    ],
  },
];

export const about = {
  header: 'About Us',
  heading1: 'Panem at ipsum',
  description:
    'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
};

export const contacts = {
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
          phone: '8-322-228-35-35',
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
