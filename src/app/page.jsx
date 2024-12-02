import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';
import Info from '@/components/nj_intro';
import Locations from '@/components/nj_locations';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <Hero />
        <Info />
        <Locations />
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
