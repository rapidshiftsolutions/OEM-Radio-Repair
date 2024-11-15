export default function Example() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base font-semibold text-accent-600">Our Services</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Tailored Exterior Solutions
          </p>
          <div className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Gutter Installation / Repair - Spanning all three columns */}
            <div className="relative lg:col-span-3 flex flex-col rounded-lg bg-white shadow-lg">
              <img
                className="h-64 w-full rounded-t-lg object-cover"
                src="/OEM Radio Repair/marketing/gutter+machine.webp"
                alt="Gutter Installation / Repair"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Gutter Installation / Repair</h3>
                <p className="mt-2 text-sm text-gray-600">
                  High-quality seamless gutter installation and expert repair services for both residential and commercial properties.
                </p>
              </div>
            </div>
  
            {/* Gutter Cleaning - Standard column width */}
            <div className="relative flex flex-col rounded-lg bg-white shadow-lg lg:row-start-2 lg:col-span-1 lg:col-start-1">
              <img
                className="h-64 w-full rounded-t-lg object-cover"
                src="/OEM Radio Repair/marketing/truck+trailer+distant.webp"
                alt="Gutter Cleaning"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Gutter Cleaning</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Keep your  clean and free of debris with our reliable cleaning services.
                </p>
              </div>
            </div>
  
            {/* Exterior Lighting - Standard column width */}
            <div className="relative flex flex-col rounded-lg bg-white shadow-lg lg:row-start-2 lg:col-span-1 lg:col-start-2">
              <img
                className="h-64 w-full rounded-t-lg object-cover"
                src="/OEM Radio Repair/marketing/deck.webp"
                alt="Exterior Lighting"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Exterior Lighting</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Bring your home to life at night with our comprehensive exterior lighting solutions.
                </p>
              </div>
            </div>
  
            {/* Pressure Washing - Standard column width */}
            <div className="relative flex flex-col rounded-lg bg-white shadow-lg lg:row-start-2 lg:col-span-1 lg:col-start-3">
              <img
                className="h-64 w-full rounded-t-lg object-cover"
                src="/OEM Radio Repair/marketing/house+away.webp"
                alt="Pressure Washing"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Pressure Washing</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Get your home exterior sparkling clean with our professional pressure washing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  