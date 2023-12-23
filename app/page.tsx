import Navbar from '@/components/Navbar';
import Herotry from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import BlogCard from '@/components/Blog-card';
import Portfoliocard from '@/components/Portfoliocard';
import Testimonial from '@/components/Testimonial';

import Footer from '@/components/Footer';
import Footer2 from '@/components/NewFooter';
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar />
    {/* <Herotry /> */}
    <Hero2 />
    <Portfoliocard />


    <BlogCard />
    <Testimonial />





    <Footer2 />

 







    </>
  );
}
