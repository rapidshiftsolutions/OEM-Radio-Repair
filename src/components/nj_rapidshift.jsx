import React from 'react';

export default function EngineeredWithLove() {
  return (
    <div className="bg-neutral-900 text-center py-4">
      <p className="text-white text-sm">
        Engineered by 
        <a 
          href="https://rapidshiftsolutions.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold text-orange-400 hover:text-orange-300 ml-1"
        >
          RapidShift
        </a>
        , your local nerds.
      </p>
    </div>
  );
}
