'use client';

import Image from 'next/image';

export default function OEMRadioHero() {
  return (
    <div className="overflow-hidden bg-light-100 py-16 md:py-32 z-auto">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-xl font-semibold tracking-tight text-primary-900 md:text-4xl">
              <b className="font-black text-primary-500">OEM Radio Repair</b>, <br />
              <span className="text-primary-900">Your Trusted Partner</span>.
            </h2>
            <p className="mt-6 text-xl leading-8 text-light-700">
              At OEM Radio Repair, we specialize in repairing factory radios, touch screens, and amplifiers. Our expert team is dedicated to providing fast, reliable, and high-quality services to get your vehicles audio system back to top performance.
            </p>
            <div className="mt-10 flex -mb-24 md:-mb-0">
              <a
                href="/contact"
                className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Get Your Free Estimate <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents -mb-96 md:-mb-0">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt="Factory radio repair in action"
                src="/OEMRadioRepair/marketing/audi.webp"
                width={592}
                height={420}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-accent-100 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt="Repairing vehicle amplifiers"
                  src="/OEMRadioRepair/marketing/mercedes-2.webp"
                  width={384}
                  height={288}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-accent-100 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt="Diagnosing factory touch screen issues"
                  src="/OEMRadioRepair/marketing/tesla.webp"
                  width={592}
                  height={420}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-accent-100 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt="Our team working on a car audio system"
                  src="/OEMRadioRepair/marketing/cherokee.webp"
                  width={384}
                  height={288}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-accent-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
