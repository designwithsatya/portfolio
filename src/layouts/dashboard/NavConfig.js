import SvgColor from '../../components/svg-color';

const getIcon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/2023/home',
    icon: getIcon('ic_analytics'),
  },
  {
    title: 'Contact',
    path: '/2023/contact',
    icon: getIcon('ic_user'),
  },
  {
    title: 'About',
    path: '/2023/about',
    icon: getIcon('ic_about'),
  },
  {
    title: 'Services',
    path: '/2023/service',
    icon: getIcon('ic_cart'),
  },
  {
    title: 'Blogs',
    path: '/2023/blogpage',
    icon: getIcon('ic_blog'),
  },
  {
    title: 'Work',
    icon: getIcon('ic_work'),
    children: [
      { title: 'Team', path: '/2023/team' },
      { title: 'experience', path: '/2023/experience' },
    ],
  },

  {
    title: 'Preview',
    path: '/2023/preview',
    icon: getIcon('ic_preview'),
  },
];

export default navConfig;
