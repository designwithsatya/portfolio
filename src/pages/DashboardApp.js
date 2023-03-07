import Page from '../components/Page';
import Home from './Home';
import Service from '../components/service/Service';
import Contact from './Contact';
import BlogPage from '../bloglayout/Blogs/BlogPage';
import { Team } from '../components/work';
import Carousel from '../components/banner/Carousel';

export default function DashboardApp() {
  return (
    <Page title="Home">
      <Home />
      <Service />
      <Carousel />
      <BlogPage />
      <Contact />
      <Team />
    </Page>
  );
}
