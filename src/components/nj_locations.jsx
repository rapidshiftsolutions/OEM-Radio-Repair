"use client";

import React, { useState } from 'react';
import cities from '@/data/cities';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const results = cities.filter((city) =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (results.length > 0) {
      setFilteredCities(results);
      setNotFound(false);
    } else {
      setFilteredCities([]);
      setNotFound(true);
    }
  };

  return (
    <section className="bg-primary-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Find Your City
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          Search for your city to see if we offer mail-in or in-person repair services.
        </p>
        <div className="relative flex items-center justify-center">
          <div className="flex w-full max-w-2xl">
            <input
              type="text"
              placeholder="Enter your city name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-gray-800"
            />
            <button
              onClick={handleSearch}
              className="bg-primary-500 text-white px-6 py-3 rounded-r-md hover:bg-primary-600"
            >
              Search
            </button>
          </div>
        </div>

        {filteredCities.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
              Available Locations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCities.map((city) => (
                <div
                  key={city.name}
                  className="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow"
                >
                  <a
                    href={`/locations/cities/${city.name.toLowerCase().replace(/ /g, '-')}-${city.state.toLowerCase()}`}
                    className="text-primary-500 text-lg font-medium hover:underline"
                  >
                    {city.name}, {city.state}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {notFound && (
          <div className="mt-8 text-center">
            <p className="text-red-500 text-lg">
              No results found for &quot;{searchQuery}&quot;.
            </p>
            <p className="text-gray-600 mt-2">
              If your city isn&apos;t listed, don&apos;t worry! We offer mail-in repair services to every city in Alabama.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchComponent;
