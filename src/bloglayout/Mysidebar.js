import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './Sidebar';

const sidebar = {
  title: 'About',
  description:
    'Satyendra Singh, I am working as a web developer And I am a Youtuber too. I want to share with you my experiences during Colleges,',
  archives: [
    { title: 'How to get source code', url: '/2023/blogs/sourcecode' },
    { title: 'Complete javaScript course in 2021 by design with satya', url: '#' },
    { title: 'Create animated website using HTML5 & CSS3 in 2021', url: '#' },
    { title: 'React JS 17.0.2 in one video By Design With Satya', url: '#' },
  ],
  tutorials: [
    {
      title: 'Html',
      url: '',
    },
    {
      title: 'Css',
      url: '',
    },
    {
      title: 'JavaScript',
      url: '',
    },
    {
      title: 'React',
      url: '',
    },
    {
      title: 'Material UI',
      url: '',
    },
    {
      title: 'Git',
      url: '',
    },
    {
      title: 'Node JS',
      url: '',
    },
    {
      title: 'Spring Boot',
      url: '',
    },
    {
      title: 'Video Editor',
      url: '',
    },
  ],
};
const theme = createTheme();
const Mysidebar = () => (
  <ThemeProvider theme={theme}>
    <Sidebar
      title={sidebar.title}
      description={sidebar.description}
      archives={sidebar.archives}
      tutorials={sidebar.tutorials}
    />
  </ThemeProvider>
);

export default Mysidebar;
