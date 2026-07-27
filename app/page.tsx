import ContactMe from "@/components/ContactMe";
import FacilityGallery from "@/components/FacilityGallery";
import HeroSection from "@/components/HeroSection";
import WaterPanelSection from "@/components/WaterPanelSection";
import { DataFacility } from "@/data/Facility";
import Image from "next/image";
import heroImage from "@/public/facility-2/8.jpg";

export default function Page() {
  return (
    <>
      <HeroSection
        image={heroImage}
        alt={DataFacility[7].alt}
        overlayClassName="bg-black/30"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-lg text-balance">
          Cairns Best Value Boat Storage
        </h1>
      </HeroSection>

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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <div className="flex h-full flex-col items-center space-y-4">
              <Image
                src="/icons/boat-storage.png"
                alt="Long and short term secure trailer boat storage"
                width={200}
                height={200}
                sizes="200px"
              />
              <p className="text-xl font-medium">
                Long & Short Term Secure<br />Trailer Boat Storage
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex h-full flex-col items-center space-y-4">
              <Image
                src="/icons/boat-trailer.png"
                alt="Boat trailer and vehicle parking"
                width={200}
                height={200}
                sizes="200px"
              />
              <p className="text-xl font-medium">
                Boat Trailer &<br />Vehicle Parking
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex h-full flex-col items-center space-y-4">
              <Image
                src="/icons/container-storage.png"
                alt="Industrial and container storage"
                width={200}
                height={200}
                sizes="200px"
              />
              <p className="text-xl font-medium">
                Industrial & Container<br />Storage
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex h-full flex-col items-center space-y-4">
              <Image
                src="/icons/truck-machinery.png"
                alt="Truck and machinery storage"
                width={200}
                height={200}
                sizes="200px"
              />
              <p className="text-xl font-medium">
                Truck and Machinery<br/> Storage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <WaterPanelSection>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Whatever the size of your boat on trailer, we can arrange storage for you.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto text-white">
            {/* Column 1 */}
            <ul className="space-y-2 list-disc list-inside">
              <li>24 hour 7 Days access</li>
              <li>Main gate just 8 metres from boat ramp</li>
              <li>Boat ramp usable in all tides</li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2 list-disc list-inside">
              <li>Fresh water wash down</li>
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
      </WaterPanelSection>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Our Facility
          </h2>

          <FacilityGallery limit={6} />
        </div>
      </section>
    </>
  );
}
