import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Missing Teeth? Get Back Your<br />
        <span className="text-slate-800">Confident Smile!</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/ckXSC0t8xYU?si=cgiA8IBicWIe82Ss&start=129" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Dental Implants starting 
            <span className="text-yellow-300 block text-3xl md:text-4xl lg:text-5xl">@₹20,000</span>
            <h3 className="text-lg md:text-xl">Easy emi options available from 3 months</h3>
          </h2>
          <button 
            onClick={onBookAppointment}
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-yellow-300 transition-colors pulse-element w-full md:w-auto"
          >
            🎉 Get Offer Now
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors md:min-w-[240px]">
          📞 Book FREE Consultation
        </button>
        <a
          href="tel:+917030399122" 
          className="bg-slate-800 text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:bg-slate-900 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-slate-800">The Dental Ethics?</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "8+ Years Experience", desc: "Expert Prosthodontist" },
            { icon: "/images/heroicons/painless.png", title: "Same Day Implants", desc: "Fix Teeth Same Day" },
            { icon: "/images/heroicons/premium.png", title: "Premium Implants", desc: "International Quality" },
            { icon: "/images/heroicons/team.png", title: "All Teeth in 3 Days", desc: "Complete Treatment" },
            { icon: "/images/heroicons/sterilization.png", title: "100% Sterilization", desc: "Highest Safety Standards" },
            { icon: "/images/heroicons/tech.png", title: "Advanced Technology", desc: "iTero Scanner & More" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <Image src={usp.icon} alt={usp.title} width={48} height={48} className="mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-slate-800 mb-3 md:text-xl">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">8+ years experience in Prosthodontics & Implantology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">10% discount on Full treatment payment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">0% Interest EMI options available</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">Advanced digital technology with in-house digital scanner</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">Same day implant placement - fix teeth immediately</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">Complete all teeth restoration within 3 days</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">500+ successful dental implants placed and restored</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">Modern clinic at NIBM Road, Pune with ethical practice approach</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-rose-400 text-slate-800 py-3 px-6 rounded-lg font-bold w-full hover:bg-rose-300 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Complimentary Consultation & Digital scan (Worth ₹1,000)
        </small>
      </div>
    </section>
  );
}