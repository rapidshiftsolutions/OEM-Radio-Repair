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
              OEM Radio Repair was founded by Alex Harmon, whose family has been deeply involved in the car audio industry for several decades. With strong roots in Birmingham, Alabama, Alex carries forward a legacy of passion for car audio systems and quality craftsmanship.
            </p>
            <p className="mb-8 text-lg">
              Growing up in Birmingham, Alex was surrounded by the art and science of car audio. His family has been a trusted name in the industry, known for their expertise and dedication to bringing the best sound experience to every vehicle. Today, OEM Radio Repair embodies the same spirit of innovation, customer focus, and commitment to excellence that Alex's family has always valued.
            </p>
            <p className="mb-8 text-lg">
              At OEM Radio Repair, we specialize in repairing factory radios, touch screens, and amplifiers. We pride ourselves on our meticulous attention to detail, ensuring that each repair is completed to the highest standard. Our mission is to provide Birmingham and the surrounding areas with reliable, high-quality car audio repair services, all while maintaining the family values of integrity, honesty, and dedication that have been at the heart of our business for generations.
            </p>
            <p className="mb-8 text-lg">
              Whether you need a touch screen repaired, an amplifier fixed, or a complete factory radio overhaul, our experienced team is here to help. We treat every job as if it were for our own family, ensuring that your vehicle's audio system performs at its best.
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
