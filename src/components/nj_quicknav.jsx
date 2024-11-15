'use client'

import {
  PlusIcon,
  MinusIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

const StickyButtons = () => {
  const [fontSize, setFontSize] = useState(100); // Set base font size percentage
  const [isVisible, setIsVisible] = useState(false); // State to control visibility based on scroll
  const [showCallOptions, setShowCallOptions] = useState(false); // State to control visibility of call options

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 10, 150)); // Cap font size at 150%
  };

  const resetFontSize = () => {
    setFontSize(100); // Reset font size to 100%
  };

  // Scroll event listener to show component after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800); // Show when scrolled past 800px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 top-1/2 z-50 transform -translate-y-1/2 flex-col gap-3 transition-opacity duration-300 hidden md:flex ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="group relative">
        <button
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-500 text-white shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
          onClick={increaseFontSize}
          title="Increase font size"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-500 px-2 py-1 text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          Larger
        </span>
      </div>
      <div className="group relative">
        <button
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-500 text-white shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
          onClick={resetFontSize}
          title="Reset font size"
        >
          <MinusIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-500 px-2 py-1 text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          Reset
        </span>
      </div>
      <div className="group relative">
        <button
          onClick={() => setShowCallOptions(!showCallOptions)}
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-500 text-white shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
          title="Call us"
        >
          <PhoneIcon className="h-6 w-6" />
        </button>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-500 px-2 py-1 text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          Call
        </span>
        {showCallOptions && (
          <div className="absolute -left-[280px] -top-2 w-64 rounded-lg bg-primary-600 p-4 text-white shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">Contact OEM Radio Repair</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                Birmingham Area: <a href="tel:+12055221162" className="hover:underline">+1 (205) 522-1162</a>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="group relative">
        <a
          href="mailto:info@oemradiorepair.com"
          className="flex h-12 w-12 transform items-center justify-center rounded-md bg-primary-500 text-white shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
          title="Email"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 transform rounded-md bg-primary-500 px-2 py-1 text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          Email
        </span>
      </div>
    </div>
  );
};

export default StickyButtons;
