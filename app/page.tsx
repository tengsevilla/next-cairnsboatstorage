import ContactMe from "@/components/ContactMe";
import { DataFacility } from "@/data/Facility";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="relative h-[500px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1718052952182-2842ede17d36?q=80&w=2070&auto=format&f[…]0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-semi-bold text-white drop-shadow-lg">
            The best value boat storage in Cairns
          </h1>
        </div>
      </section>

      {/* Sticky Contact me */}
      <ContactMe />

      {/* Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light">
            We offer the <strong className="font-bold">best value boat storage</strong> in Cairns
          </h2>
          <p className="text-3xl font-semibold mt-4">
            Safe, secure and accessible 24/7
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/icons/boat-storage.png"
                alt="Boat Storage"
                width={200}
                height={200}
              />
              <p className="text-xl font-medium">
                Long & Short Term Secure<br />Boat Storage
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/icons/boat-trailer.png"
                alt="Boat Trailer Parking"
                width={200}
                height={200}
              />
              <p className="text-xl font-medium">
                Boat Trailer &<br />Vehicle Parking
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/icons/container-storage.jpg"
                alt="Container Storage"
                width={200}
                height={200}
              />
              <p className="text-xl font-medium">
                Industrial & Container<br />Storage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="relative h-auto bg-fixed bg-center bg-no-repeat bg-cover text-white"
        style={{
          backgroundImage:
            "url('waterpanel-01-scaled.jpg')",
        }}
      >
        <div className="bg-black/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Whatever the size of your boat, we can arrange storage for you.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto text-white">
              {/* Column 1 */}
              <ul className="space-y-2 list-disc list-inside">
                <li>24 hour 7 Days access</li>
                <li>Main gate just 8 metres from boat ramp</li>
                <li>Boat ramp usable in all tides</li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2 list-disc list-inside">
                <li>Fresh water wash down facilities</li>
                <li>No height or size restrictions</li>
                <li>Direct access to reef &amp; islands</li>
              </ul>

              {/* Column 3 */}
              <ul className="space-y-2 list-disc list-inside">
                <li>20 minutes from Cairns CBD</li>
                <li>24 hour security monitoring</li>
                <li>Cranes by appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Our Facility
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DataFacility.slice(0, 6).map((item, index) => (
              <div
              key={index}
              className="overflow-hidden rounded shadow hover:shadow-lg transition-shadow duration-300"
              >
              <Image
                src={item.image}
                alt={`Facility ${index + 1}`}
                width={1024}
                height={597}
                className="w-full h-auto object-cover"
              />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
