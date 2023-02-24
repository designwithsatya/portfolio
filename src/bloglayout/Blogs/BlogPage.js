import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Container, Box, Typography, Stack, Button } from '@mui/material';
import Page from '../../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../sections/@dashboard/blog';
import Iconify from '../../components/Iconify';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

const StackStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2rem',
  [theme.breakpoints.up('lg')]: {
    direction: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
}));

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonLoading, setButtonLoading] = useState(true);

  const handlePageChange = async () => {
    const res = await fetch(`/post?page=${currentPage}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const postdata = await res.json();
    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    } else {
      setPosts(postdata.data);
      setTotalPages(postdata.totalPages);
    }
  };

  useEffect(() => {
    handlePageChange();
  }, [currentPage]);

  return (
    <>
      <Page title="Blogs">
        <Container>
          <Box sx={{ mt: 5 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography className="about" variant="h6">
              MyWork And SourceCode.
            </Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 5, textAlign: 'justify' }}>
            DesignWithSatya works and Youtube videos source code. Just click on any video and get the source code and we
            have technical article also. Have a great day.
          </Typography>
          <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <BlogPostsSearch />
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack>
          {posts.length <= 0 ? <Typography variant="body1">Post loading...</Typography> : null}
          <Grid container sx={{ mb: 5 }} spacing={3}>
            {posts.map((post, index) => (
              <BlogPostCard key={index} post={post} index={index} />
            ))}
          </Grid>

          <StackStyle>
            <Stack spacing={2} direction="row-reverse">
              {currentPage < totalPages ? (
                <Button
                  size="small"
                  variant="containedInherit"
                  startIcon={<Iconify icon="iconoir-skip-next" />}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  NextPage
                </Button>
              ) : (
                <Button
                  disabled={buttonLoading && true}
                  size="small"
                  startIcon={<Iconify icon="iconoir-skip-next" />}
                  variant="containedInherit"
                >
                  NextPage
                </Button>
              )}
              <Typography variant="body2">
                {currentPage} / {totalPages}
              </Typography>
              {currentPage > 1 ? (
                <Button
                  startIcon={<Iconify icon="iconoir:skip-prev" />}
                  size="small"
                  variant="containedInherit"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  previous
                </Button>
              ) : (
                <Button
                  disabled={buttonLoading && true}
                  size="small"
                  startIcon={<Iconify icon="iconoir:skip-prev" />}
                  variant="containedInherit"
                >
                  previous
                </Button>
              )}
            </Stack>
          </StackStyle>
        </Container>
      </Page>
    </>
  );
}
