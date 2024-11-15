'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    const banner = document.getElementById('banner');
    banner.classList.add('animate-disappear');
    setTimeout(() => setIsVisible(false), 500); // Remove after animation
  };

  return (
    <>
      {isVisible && (
        <div
          id="banner"
          className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50 border-accent-900 transition-all duration-500"
        >
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-accent-800 px-6 py-3 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm text-white">
              <a href="/contact" className="hover:underline">
                <strong className="font-semibold">Transform Your Home Today!</strong> Book your free consultation—limited spots available!
              </a>
            </p>
            <button type="button" onClick={handleDismiss} className="-m-1.5 flex-none p-1.5" aria-label="Dismiss">
              <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes disappear {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            transform: scale(1.1) rotate(3deg);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        .animate-disappear {
          animation: disappear 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
