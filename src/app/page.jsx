import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';
import Info from '@/components/nj_intro';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <Hero />
        <Info />
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
