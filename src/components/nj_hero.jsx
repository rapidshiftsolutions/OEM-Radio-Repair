'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Dynamic import for SSR compatibility
const Select = dynamic(() => import('react-select'), { ssr: false });

// Car, year, and vehicle type options
const carOptions = [
  { value: 'acura', label: 'Acura' },
  { value: 'bmw', label: 'BMW' },
  { value: 'audi', label: 'Audi' },
  // ...other car options
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

  // Gradient animation effect
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

  // Handling form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (field) => (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: selectedOption?.value || '',
    }));
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <HeroForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleCarChange={handleSelectChange('car')}
        handleYearChange={handleSelectChange('year')}
        handleVehicleTypeChange={handleSelectChange('vehicleType')}
        gradientRef={gradientRef}
        setFormData={setFormData}
      />
    </GoogleReCaptchaProvider>
  );
};

const HeroForm = ({
  formData,
  handleInputChange,
  handleCarChange,
  handleYearChange,
  handleVehicleTypeChange,
  gradientRef,
  setFormData,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Handle form submission with Google reCAPTCHA
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error('Execute reCAPTCHA not yet available');
      alert('reCAPTCHA is not ready yet. Please try again shortly.');
      return;
    }

    try {
      const token = await executeRecaptcha('submit');

      await fetch('https://hooks.zapier.com/hooks/catch/19076579/2rh6o5x/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
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
          <h1 className="mb-4 text-3xl text-white md:text-6xl">
            <b className="text-primary-100 font-bold">OEM Radio Repairs</b>
            <br /> <span className="text-3xl md:text-5xl font-sm">for Factory Radios<br /> and Amplifiers.</span>
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
