import React, { useState, useEffect } from 'react';
import { Grid, Container, Box, Typography, Stack, Button } from '@mui/material';
import Page from '../../components/Page';
import { BlogPostCard, BlogPostsSort } from '../../sections/@dashboard/blog';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  const [isCompleted, setIsCompleted] = useState(false);
  const [numberofelement, setnumberofelement] = useState(4);
  const slicedata = posts.slice(0, numberofelement);
  const LoadData = () => {
    setnumberofelement(numberofelement + numberofelement);
    if (numberofelement >= slicedata.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
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
            <Typography variant="h5" gutterBottom>
              Blogs
            </Typography>
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack>

          <Grid container sx={{ mb: 5 }} spacing={3}>
            {slicedata.map((post, index) => (
              <BlogPostCard key={index} post={post} index={index} />
            ))}
          </Grid>
          {isCompleted ? (
            ''
          ) : (
            <Button onClick={() => LoadData()} sx={{ mb: 5 }} size="small" type="submit" variant="containedInherit">
              View More
            </Button>
          )}
        </Container>
      </Page>
    </>
  );
}
