import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Container, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Blog from './Blog';
import Mysidebar from './Mysidebar';
// import TopCommentBox from '../components/comentbox/TopCommentBox';
// import MessageScroll from '../MessageScroll';
import Iconify from '../components/Iconify';

const MainStyle = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  marginTop: '20px',
}));

const BlogsLayout = () => (
  <>
    <Container>
      <Blog />
      <MainStyle>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={8}>
            <Outlet />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Mysidebar />
          </Grid>
        </Grid>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Button variant="containedInherit" startIcon={<Iconify icon="arcticons:blogger" />}>
            New Post
          </Button>
          <Button variant="containedInherit" startIcon={<Iconify icon="arcticons:blogger" />}>
            Old Post
          </Button>
        </Stack>
        {/* <TopCommentBox />
        <MessageScroll /> */}
      </MainStyle>
    </Container>
  </>
);

export default BlogsLayout;
