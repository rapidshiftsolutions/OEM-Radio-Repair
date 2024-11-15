import Footer from '@/components/nj_footer';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import Intro from '@/components/nj_intro';
import Hero from '@/components/nj_hero';
import RapidShift from '@/components/nj_rapidshift';

export default function About() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <div className="about-container bg-light-50 text-gray-900 py-16 px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold mb-8 text-primary-900">About OEM Radio Repair</h1>
            <p className="mb-8 text-lg">
              OEM Radio Repair was founded by Colby Martin and Randy Powell, two hardworking individuals who share
              a passion for family, the outdoors, and their trusty John Deere equipment. With deep roots in their
              community, Colby and Randy are dedicated not only to their families but also to making a difference for
              their clients.
            </p>
            <p className="mb-8 text-lg">
              Their love for hard work and quality craftsmanship is at the core of OEM Radio Repair. They
              understand the value of a job well done and believe in delivering services that are effective, efficient,
              and always done right the first time. From advanced terrain management to precise right-of-way mowing,
              Colby and Randy lead their team with the values that make family strong: integrity, honesty, and dedication.
            </p>
            <p className="mb-8 text-lg">
              At OEM Radio Repair, we treat every project like it's our own, ensuring that our clients receive the
              best solutions to keep their land well-maintained, safe, and productive. Whether it's industrial weed
              control or retention pond maintenance, our commitment to excellence sets us apart. We aren't just a
              service provider; we're your partners in land management.
            </p>
          </div>
        </div>
        <Intro />
        <Hero />
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
