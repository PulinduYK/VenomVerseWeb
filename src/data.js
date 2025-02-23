// import images
import LogoImg from '../src/assets/img/header/logo.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from './assets/img/overview/product.png';
import FacebookImg from '../src/assets/img/overview/brands/png1.png';
import GoogleImg from '../src/assets/img/overview/brands/png2.png';
import CocaColaImg from '../src/assets/img/overview/brands/png3.png';
import LinkedInImg from '../src/assets/img/overview/brands/png1.png';
import SamsungImg from '../src/assets/img/overview/brands/png2.png';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';


import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Login',
};

export const nav = [
  { name: "Features", href: "f1" },  
  { name: "Overview", href: "overview" },
  { name: "Meet the Team", href: "team" },  
  { name: "Feedback", href: "test" },

];

export const hero = {
  title: 'Identify, Understand, Staysafe.',
  subtitle: 'VENOMVERSE: YOUR LIFE SAVING IN THE WILD',
  btnText: 'Download',
  compText: 'Android and iOS ',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Your Safety Companion',
    title: 'Instant AI identification for Insects. Right in your pocket.',
    subtitle:
      'Your Safety Companion',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Save your family',
    title: 'Snap a photo, AI tells you what you need to know.',
    subtitle:
      'How It Works',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Hiking, gardening, or curious? Know instantly, stay safe.',
    title: 'Hiking, gardening, or curious? Know instantly, stay safe.',
    subtitle:
      'Use anytime when you need',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'The Product we work with.',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Cross platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Machine learning',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};



export const teamMembers = [
  {
    name: "Pulindu Kulathilaka",
    position: "Software Engineering Undergraduate",
    icon: "https://avatars.githubusercontent.com/u/190462039?v=4",
    socials: {
      github: "https://github.com/PulinduYK",
      linkedin: "https://www.linkedin.com/in/pulindu-k-686a5a293/",
    },
  },
  {
    name: "Thevindu Guruge",
    position: "Software Engineering Undergraduate",
    icon: "https://avatars.githubusercontent.com/u/148585527?v=4",
    socials: {
      github: "https://github.com/gurugetnm",
      twitter: "https://twitter.com/nisal",
      linkedin: "https://www.linkedin.com/in/thevindu-guruge/",
    },
  },
  {
    name: "Dewmi Wenushika",
    position: "Software Engineering Undergraduate",
    icon: "https://avatars.githubusercontent.com/u/185349192?v=4",
    socials: {
      github: "https://github.com/Dewmiiii",
      linkedin: "https://www.linkedin.com/in/dewmi-wenushika-0367a7297/",
    },
  },
  {
    name: "Prabhashan Madurawala",
    position: "Software Engineering Undergraduate",
    icon: "https://media.licdn.com/dms/image/v2/D5603AQE_N2BgN0kHtQ/profile-displayphoto-shrink_400_400/B56ZSH90bYHQAg-/0/1737447918402?e=1746057600&v=beta&t=r20u1w2-Hr9AhCHZmOeTPSWB4JL694UFIaZLYThmtD4",
    socials: {
      github: "https://github.com/Prabhashan19",
      linkedin: "https://www.linkedin.com/in/prabhashan-madurawala/",
    },
  },
  {
    name: "Nipun Karunarathna",
    position: "Software Engineering Undergraduate",
    icon: "https://avatars.githubusercontent.com/u/114611123?v=4",
    socials: {
      github: "https://github.com/NipunChamodya",
      linkedin: "https://www.linkedin.com/in/nipun-karunarathna2002/",
    },
  },
  {
    name: "Rakshaniyaa",
    position: "Software Engineering Undergraduate",
    icon: "https://media.licdn.com/dms/image/v2/D4D03AQFd4OR2vObwVw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695638058931?e=1745452800&v=beta&t=W7QKJy8xTtyY1jtC_BDWCrcC0OetnMLMH6nQtM4U4xQ",
    socials: {
      github: "",
      linkedin: "https://www.linkedin.com/in/rakshaniyaa-nanthakumaran-18a107293/",
    },
  },
];






export const testimonials = {
  title: 'We have best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://avatars.githubusercontent.com/u/190462039?v=4',
      name: 'Pulindu Kulathilaka',
      position: '',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://avatars.githubusercontent.com/u/148585527?v=4',
      name: 'Thevindu Guruge',
      position: '',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://avatars.githubusercontent.com/u/185349192?v=4',
      name: 'Dewmi Wenushika',
      position: '',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://avatars.githubusercontent.com/u/160271718?v=4',
      name: 'Prabhashan',
      position: '',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://avatars.githubusercontent.com/u/114611123?v=4',
      name: 'Nipun Karunarathna',
      position: '',
      borderColor: '#BB7259',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-1/455105311_1670504900155112_7552383223221078383_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFt_t30Sbva2nwWCG8Zgb55bYxythbJtDRtjHK2Fsm0NP4kErFwlEC6QfnWPcc0tUAcZLXRJlCZTVDSEnuAXSS8&_nc_ohc=j2n6aS-y-68Q7kNvgGVxPoh&_nc_oc=AdgnPf-IY7sIvpvAiQNSbwMzoPYW_7Ez59QGuJmYB6ZrPJZeVQNvF7vc1hTeHzmBQ1A&_nc_zt=24&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=ATTLqAQe5st1HBNFrmRWJfe&oh=00_AYD1eLXvJ8c7ukAfFRNDD2lPvZnmpMAqLmw5GyudExYEYQ&oe=67BF67A0',
      name: 'Hashen Tharusha',
      position: '',
      borderColor: '#4270ff',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-1/327158910_934948387917179_7143140272689737821_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHW1lmJaGufstSQjQhoCXcT4a_mbag-frvhr-ZtqD5-u6NoP0BgsrDBWEiq-FON3RpuqRX2075O4hf_i1YAz36_&_nc_ohc=Xp1W111G3JQQ7kNvgFLBcSg&_nc_oc=Adj33LzNCm9BEjLLFVd6vGQ7ePZ0O9hrO6c2e2wcN1sMueY-36dGoUs0ebZeibO9olQ&_nc_zt=24&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=A1TdOPXCAtq6RaD_favytBX&oh=00_AYDep3aEpyCT18BVaRoBGuJT84pgfcU8BuifoZo5fOK9Nw&oe=67BF5DD9',
      name: 'Ashen Dilranga',
      position: '',
      borderColor: '#f1efb5',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'Meet the team', href: 'team' },
    { name: 'Careers', href: 'team' },
    { name: 'Overview', href: 'overview' },
    { name: 'Features', href: 'f1' },
  ],
  legal: [
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 0 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
    EsmallText: 'Email',
    EnsmallText: 'venomverse.live@gmail.com',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2024',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
