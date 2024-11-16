'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Select from 'react-select';

const carOptions = [
  { value: 'acura', label: 'Acura' },
  { value: 'alfa_romeo', label: 'Alfa Romeo' },
  { value: 'aston_martin', label: 'Aston Martin' },
  { value: 'audi', label: 'Audi' },
  { value: 'bentley', label: 'Bentley' },
  { value: 'bmw', label: 'BMW' },
  { value: 'bugatti', label: 'Bugatti' },
  { value: 'buick', label: 'Buick' },
  { value: 'cadillac', label: 'Cadillac' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'chrysler', label: 'Chrysler' },
  { value: 'citroen', label: 'Citroën' },
  { value: 'dacia', label: 'Dacia' },
  { value: 'daewoo', label: 'Daewoo' },
  { value: 'daihatsu', label: 'Daihatsu' },
  { value: 'dodge', label: 'Dodge' },
  { value: 'ferrari', label: 'Ferrari' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'fisker', label: 'Fisker' },
  { value: 'ford', label: 'Ford' },
  { value: 'genesis', label: 'Genesis' },
  { value: 'geo', label: 'Geo' },
  { value: 'gmc', label: 'GMC' },
  { value: 'haval', label: 'Haval' },
  { value: 'honda', label: 'Honda' },
  { value: 'hummer', label: 'Hummer' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'infiniti', label: 'Infiniti' },
  { value: 'isuzu', label: 'Isuzu' },
  { value: 'jaguar', label: 'Jaguar' },
  { value: 'jeep', label: 'Jeep' },
  { value: 'karma', label: 'Karma' },
  { value: 'kia', label: 'Kia' },
  { value: 'koenigsegg', label: 'Koenigsegg' },
  { value: 'lada', label: 'Lada' },
  { value: 'lamborghini', label: 'Lamborghini' },
  { value: 'lancia', label: 'Lancia' },
  { value: 'land_rover', label: 'Land Rover' },
  { value: 'lexus', label: 'Lexus' },
  { value: 'lincoln', label: 'Lincoln' },
  { value: 'lotus', label: 'Lotus' },
  { value: 'lucid', label: 'Lucid' },
  { value: 'maserati', label: 'Maserati' },
  { value: 'maybach', label: 'Maybach' },
  { value: 'mazda', label: 'Mazda' },
  { value: 'mclaren', label: 'McLaren' },
  { value: 'mercedes', label: 'Mercedes-Benz' },
  { value: 'mercury', label: 'Mercury' },
  { value: 'mini', label: 'Mini' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'noble', label: 'Noble' },
  { value: 'opel', label: 'Opel' },
  { value: 'pagani', label: 'Pagani' },
  { value: 'peugeot', label: 'Peugeot' },
  { value: 'plymouth', label: 'Plymouth' },
  { value: 'polestar', label: 'Polestar' },
  { value: 'pontiac', label: 'Pontiac' },
  { value: 'porsche', label: 'Porsche' },
  { value: 'ram', label: 'Ram' },
  { value: 'renault', label: 'Renault' },
  { value: 'rolls_royce', label: 'Rolls-Royce' },
  { value: 'saab', label: 'Saab' },
  { value: 'saturn', label: 'Saturn' },
  { value: 'scion', label: 'Scion' },
  { value: 'seat', label: 'SEAT' },
  { value: 'skoda', label: 'Škoda' },
  { value: 'smart', label: 'Smart' },
  { value: 'ssangyong', label: 'SsangYong' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'suzuki', label: 'Suzuki' },
  { value: 'tata', label: 'Tata' },
  { value: 'tesla', label: 'Tesla' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'triumph', label: 'Triumph' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'volvo', label: 'Volvo' },
  { value: 'alpine', label: 'Alpine' },
  { value: 'ariel', label: 'Ariel' },
  { value: 'arrinera', label: 'Arrinera' },
  { value: 'ascari', label: 'Ascari' },
  { value: 'bajaj', label: 'Bajaj' },
  { value: 'bollinger', label: 'Bollinger' },
  { value: 'brilliance', label: 'Brilliance' },
  { value: 'caterham', label: 'Caterham' },
  { value: 'changan', label: 'Changan' },
  { value: 'chery', label: 'Chery' },
  { value: 'daihatsu', label: 'Daihatsu' },
  { value: 'ds', label: 'DS Automobiles' },
  { value: 'eagle', label: 'Eagle' },
  { value: 'faraday_future', label: 'Faraday Future' },
  { value: 'geely', label: 'Geely' },
  { value: 'great_wall', label: 'Great Wall' },
  { value: 'holden', label: 'Holden' },
  { value: 'hongqi', label: 'Hongqi' },
  { value: 'jensen', label: 'Jensen' },
  { value: 'jetta', label: 'Jetta' },
  { value: 'koenigsegg', label: 'Koenigsegg' },
  { value: 'lagonda', label: 'Lagonda' },
  { value: 'maruti', label: 'Maruti' },
  { value: 'maxus', label: 'Maxus' },
  { value: 'mg', label: 'MG' },
  { value: 'morgan', label: 'Morgan' },
  { value: 'nio', label: 'NIO' },
  { value: 'oldsmobile', label: 'Oldsmobile' },
  { value: 'panoz', label: 'Panoz' },
  { value: 'perodua', label: 'Perodua' },
  { value: 'proton', label: 'Proton' },
  { value: 'qoros', label: 'Qoros' },
  { value: 'radical', label: 'Radical' },
  { value: 'reliant', label: 'Reliant' },
  { value: 'rimac', label: 'Rimac' },
  { value: 'rivian', label: 'Rivian' },
  { value: 'rossion', label: 'Rossion' },
  { value: 'saic', label: 'SAIC' },
  { value: 'scania', label: 'Scania' },
  { value: 'shelby', label: 'Shelby' },
  { value: 'spyker', label: 'Spyker' },
  { value: 'ssc', label: 'SSC North America' },
  { value: 'tvr', label: 'TVR' },
  { value: 'uaz', label: 'UAZ' },
  { value: 'vauxhall', label: 'Vauxhall' },
  { value: 'vector', label: 'Vector' },
  { value: 'vinfast', label: 'VinFast' },
  { value: 'w_motors', label: 'W Motors' },
  { value: 'wiesmann', label: 'Wiesmann' },
  { value: 'xpeng', label: 'XPeng' },
  { value: 'zhongtong', label: 'Zhongtong' },
  { value: 'zenvo', label: 'Zenvo' },
  { value: 'zotye', label: 'Zotye' },
];

const yearOptions = Array.from({ length: 100 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year.toString(), label: year.toString() };
});

const vehicleTypeOptions = [
  { value: 'car', label: 'Car' },
  { value: 'truck', label: 'Truck' },
  { value: 'suv', label: 'SUV' },
];

const Hero = () => {
  const gradientRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    year: '',
    vehicleType: '',
  });

  useEffect(() => {
    let directionX = 1;
    let directionY = 1;
    let gradientPositionX = 0;
    let gradientPositionY = 0;

    const animateGradient = () => {
      gradientPositionX += directionX * 0.2;
      gradientPositionY += directionY * 0.2;

      if (gradientPositionX >= 100 || gradientPositionX <= 0) {
        directionX *= -1;
      }
      if (gradientPositionY >= 100 || gradientPositionY <= 0) {
        directionY *= -1;
      }

      if (gradientRef.current) {
        gradientRef.current.style.backgroundPosition = `${gradientPositionX}% ${gradientPositionY}%`;
      }
      requestAnimationFrame(animateGradient);
    };

    animateGradient();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCarChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      car: selectedOption?.value || '',
    }));
  };

  const handleYearChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      year: selectedOption?.value || '',
    }));
  };

  const handleVehicleTypeChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicleType: selectedOption?.value || '',
    }));
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <HeroForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleCarChange={handleCarChange}
        handleYearChange={handleYearChange}
        handleVehicleTypeChange={handleVehicleTypeChange}
        gradientRef={gradientRef}
      />
    </GoogleReCaptchaProvider>
  );
};

const HeroForm = ({ formData, handleInputChange, handleCarChange, handleYearChange, handleVehicleTypeChange, gradientRef }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error('Execute recaptcha not yet available');
      return;
    }

    try {
      const token = await executeRecaptcha('submit');

      await fetch('https://hooks.zapier.com/hooks/catch/19076579/2rh6o5x/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // This bypasses CORS checks but limits response handling
        body: JSON.stringify({ ...formData, token }),
      });

      alert('Thank you for contacting us! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        car: '',
        year: '',
        vehicleType: '',
      });
    } catch (error) {
      console.error('Form submission failed', error);
      alert('There was an issue submitting the form. Please try again later.');
    }
  };

  return (
    <section
      className="relative flex h-full items-center bg-cover bg-center pt-10 md:h-screen md:py-10 md:pt-0"
      style={{
        backgroundImage: "url('/OEMRadioRepair/marketing/bmw.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-light-900 via-primary-900 to-transparent opacity-80"
        style={{ backgroundSize: '200% 200%' }}
      ></div>

      <div className="relative z-10 flex w-full flex-col md:flex-row">
        <div className="w-full max-w-lg px-6 text-left md:w-2/3 md:max-w-4xl md:pl-16 md:mr-16">
          <h1 className=" mb-4 text-3xl text-white md:text-6xl">
            <b className="text-primary-100 font-bold">OEM Radio Repairs</b>
            <br /> <a className="text-3xl md:text-5xl font-sm">for Factory Radios<br></br> and Amplifiers.</a>
          </h1>
          <p className="text-lg text-light-100 pb-6 md:mb-12 md:pb-0 md:text-xl">
            OEM Radio Repair offers expert solutions for factory radios, touch screens, and amplifiers. Fast, reliable, and quality service you can trust.
          </p>
          <h2 className="mb-4 hidden text-2xl text-white md:block">Why Choose OEM Radio Repair?</h2>
          <ul className="hidden list-disc pl-6 text-lg text-light-100 md:block">
            <li className="mb-2">Specialists in OEM radio, amplifier, and touch screen repair.</li>
            <li className="mb-2">Certified technicians with years of experience.</li>
            <li className="mb-2">High-quality parts and guaranteed workmanship.</li>
            <li className="mb-2">Quick turnaround times for minimal downtime.</li>
            <li>Customer satisfaction is our top priority.</li>
          </ul>
          <div className="mt-10 flex -mb-24 md:-mb-0">
            <a
              href="/locations"
              className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Locations <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="mt-10 w-full bg-white p-8 shadow-lg md:mx-8 md:my-10 md:ml-10 md:mr-16 md:mt-0 md:w-1/3 md:self-start md:rounded-lg">
          <h2 className="mb-6 text-lg md:text-2xl font-semibold text-primary-900">Request a Free Consultation Today!</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="E.g., John Doe"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="E.g., john.doe@example.com"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.g., (123) 456-7890"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="car" className="block text-sm font-semibold text-gray-900">
                  Vehicle Brand
                </label>
                <div className="mt-2.5">
                  <Select
                    id="car"
                    options={carOptions}
                    value={carOptions.find((option) => option.value === formData.car)}
                    onChange={handleCarChange}
                    placeholder="Brand"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-900">
                  Vehicle Type
                </label>
                <div className="mt-2.5">
                  <Select
                    id="vehicleType"
                    options={vehicleTypeOptions}
                    value={vehicleTypeOptions.find((option) => option.value === formData.vehicleType)}
                    onChange={handleVehicleTypeChange}
                    placeholder="Type"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-gray-900">
                Year
              </label>
              <div className="mt-2.5">
                <Select
                  id="year"
                  options={yearOptions}
                  value={yearOptions.find((option) => option.value === formData.year)}
                  onChange={handleYearChange}
                  placeholder="Select year"
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
              <button
                type="submit"
                className="rounded-md bg-primary-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;



