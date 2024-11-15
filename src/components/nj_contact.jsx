'use client';

import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import ReCAPTCHA from 'react-google-recaptcha';

// Define the libraries array outside of the component to prevent reloading
const libraries = ['places'];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    comments: '',
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [autoComplete, setAutoComplete] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAgGO-4UJ1-wS6aua__cpo1uVcefrlPaGg',
    libraries,
  });

  const handlePlaceChanged = () => {
    if (autoComplete !== null) {
      const place = autoComplete.getPlace();
      setFormData((prevData) => ({
        ...prevData,
        address: place.formatted_address,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    if (value) setCaptchaValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

    try {
      await fetch('https://hooks.zapier.com/hooks/catch/19076579/2dk0oh0/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Thank you for contacting us! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        comments: '',
      });
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative bg-white p-8 w-full md:w-1/2 mx-auto rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-primary-900">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-900">
            Address
          </label>
          <div className="mt-2.5">
            <Autocomplete onLoad={(autocomplete) => setAutoComplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
              />
            </Autocomplete>
          </div>
        </div>
        <div>
          <label htmlFor="comments" className="block text-sm font-semibold text-gray-900">
            Questions / Comments
          </label>
          <div className="mt-2.5">
            <textarea
              id="comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows="4"
              required
              placeholder="Tell us how we can assist you."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <ReCAPTCHA
            sitekey="6LcaNXkqAAAAAHy7hfy7eyh0Wh2GkYL4GNJTSP8d"
            onChange={handleCaptchaChange}
          />
        </div>
        <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
          <button
            type="submit"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
