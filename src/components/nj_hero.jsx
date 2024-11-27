'use client'

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import Select from 'react-select'

// Dropdown options

// Car, year, and vehicle type options
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
  { value: 'skoda', label: 'Skoda' },
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
]

const yearOptions = Array.from({ length: 100 }, (_, i) => {
  const year = new Date().getFullYear() - i
  return { value: year.toString(), label: year.toString() }
})

export default function OEMContactHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    year: '',
    attachment: null,
    comments: '',
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      attachment: e.target.files[0],
    }))
  }

  const handleSelectChange = (field) => (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: selectedOption?.value || '',
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      const response = await fetch(
        'https://hooks.zapier.com/hooks/catch/19076579/2rh6o5x/',
        {
          method: 'POST',
          body: formDataToSend,
        },
      )

      if (!response.ok) {
        throw new Error('Failed to submit the form')
      }

      alert('Thank you for contacting us! We will get back to you shortly.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        car: '',
        year: '',
        attachment: null,
        comments: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      alert(
        'An error occurred while submitting the form. Please try again later.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative isolate bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
      {/* Background Texture */}
      <div className="animate-slow-scroll absolute inset-0 bg-[url('/texture.webp')] bg-cover bg-fixed opacity-10" />

      <div className="container mx-auto grid grid-cols-1 gap-x-16 px-6 lg:grid-cols-2 lg:px-12">
        {/* Contact Info Section */}
        <div className="relative pb-16 lg:flex lg:flex-col lg:justify-center lg:pb-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
            OEM Radio Repair <br></br>{' '}
            <span className="text-primary-400">Expert Solutions</span>.
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Let us repair your factory radios, amplifiers, and touch screens.
            Reach out today for fast, reliable service you can trust.
          </p>
          <dl className="mt-10 space-y-6 text-base text-gray-300">
            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <BuildingOffice2Icon
                  aria-hidden="true"
                  className="h-7 w-6 text-primary-200"
                />
              </dt>
              <dd>Birmingham, AL</dd>
            </div>
            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <PhoneIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-primary-200"
                />
              </dt>
              <dd>
                <a
                  href="tel:+1 205-522-1162"
                  className="hover:text-primary-400"
                >
                  +1 (205) 522-1162
                </a>
              </dd>
            </div>
            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-primary-200"
                />
              </dt>
              <dd>
                <a
                  href="mailto:info@oemradiorepair.com"
                  className="hover:text-primary-400"
                >
                  info@oemradiorepair.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleFormSubmit}
          className="relative w-full rounded-lg bg-light-100 px-6 py-8 shadow-lg sm:p-16 lg:p-20"
        >
          <h3 className="mb-6 text-xl font-semibold tracking-tight text-gray-900 sm:mb-8">
            Fill out the form and we’ll handle the rest.
          </h3>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-600 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            {/* Email and Phone Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-600 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-600 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Vehicle Brand */}
            <div>
              <label
                htmlFor="car"
                className="block text-sm font-semibold text-gray-900"
              >
                Vehicle Brand
              </label>
              <Select
                id="car"
                options={carOptions}
                value={carOptions.find(
                  (option) => option.value === formData.car,
                )}
                onChange={handleSelectChange('car')}
                placeholder="Select brand"
                className="mt-2"
              />
            </div>

            {/* Vehicle Year */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-semibold text-gray-900"
              >
                Vehicle Year
              </label>
              <Select
                id="year"
                options={yearOptions}
                value={yearOptions.find(
                  (option) => option.value === formData.year,
                )}
                onChange={handleSelectChange('year')}
                placeholder="Select year"
                className="mt-2"
              />
            </div>

            {/* Attachment Field */}
            <div>
              <label
                htmlFor="attachment"
                className="block text-sm font-semibold text-gray-900"
              >
                Attach Image of Radio
              </label>
              <input
                type="file"
                id="attachment"
                onChange={handleFileChange}
                className="mt-2 w-full"
              />
            </div>

            {/* Comments Field */}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-semibold text-gray-900"
              >
                Comments
              </label>
              <textarea
                id="comments"
                rows={4}
                value={formData.comments}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-600 focus:ring-primary-500 sm:text-sm"
                placeholder="Describe your issue here..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-md px-6 py-3 text-lg font-semibold text-white shadow-md ${
                loading
                  ? 'cursor-not-allowed bg-gray-600'
                  : 'bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
