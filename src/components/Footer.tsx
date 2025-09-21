import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image 
            src="/images/logo.png" 
            alt="The Dental Ethics Logo" 
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-slate-800 mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+917030399122" className="block text-slate-800 font-bold md:text-lg hover:text-slate-800-light transition-colors">+91 7030399122</a>
            <p className="text-slate-800">Emergency: +91 9890353922</p>
            <p className="text-slate-800">www.thedentalethics.com</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2 md:text-lg">Open Hours</h3>
            <p className="text-slate-800 md:text-lg">Mon-Sat: 10 AM – 2 PM</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2 md:text-lg">Location</h3>
            <p className="text-slate-800 font-bold">
              📍 Office no 204, Gagan Ela, NIBM Road, next to Runwal Diamond, Diagonally opposite to California Society, Pune 411048
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2756147924823!2d73.90089431496994!3d18.48890008746926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0457f6de343%3A0x5e8c5c4b8b8b8b8b!2sNIBM%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1748115653813!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Dental Ethics Location - NIBM Road, Pune"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}