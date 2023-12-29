import { NextSeo } from 'next-seo';

import Education from '@/components/About/Education';
import Introduction from '@/components/About/Introduction';
import Resume from '@/components/About/Resume';

const About = () => {
  return (
    <>
      <NextSeo title='About Me' />
      <Introduction />
      <Education />
      <Resume />
    </>
  );
};

export default About;
