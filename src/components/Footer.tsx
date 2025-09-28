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
            <h3 className="font-bold text-[#0c4c2d] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+917030399122" className="block text-[#0c4c2d] font-bold md:text-lg hover:text-[#0a3f26] transition-colors">+91 7030399122</a>
            <p className="text-[#0c4c2d]">Emergency: +91 9890353922</p>
            <p className="text-[#0c4c2d]">www.thedentalethics.com</p>
          </div>

          <div>
            <h3 className="font-bold text-[#0c4c2d] mb-2 md:text-lg">Open Hours</h3>
            <p className="text-[#0c4c2d] md:text-lg">Mon-Sat: 10 AM – 2 PM</p>
          </div>

          <div>
            <h3 className="font-bold text-[#0c4c2d] mb-2 md:text-lg">Location</h3>
            <a 
              href="https://www.google.com/maps/place/Dr.+Umang+Shah%E2%80%99s+The+Dental+Ethics+%7C+Braces+%7C+Aligner+%7C+Implant+%7C+Dentist+%7C+Undri/@18.4635204,73.9001882,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bed8154ac8a3:0xdfda32bcda5ded3b!8m2!3d18.4635204!4d73.9023631!16s%2Fg%2F11q8q8q8q8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c4c2d] font-bold hover:text-[#0a3f26] transition-colors cursor-pointer"
            >
              📍 Office no 204, Gagan Ela, NIBM Road, next to Runwal Diamond, Diagonally opposite to California Society, Pune 411048
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.44436612999!2d73.9001881780467!3d18.463520437803222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bed8154ac8a3%3A0xdfda32bcda5ded3b!2sDr.%20Umang%20Shah%E2%80%99s%20The%20Dental%20Ethics%20%7C%20Braces%20%7C%20Aligner%20%7C%20Implant%20%7C%20Dentist%20%7C%20Undri!5e0!3m2!1sen!2sin!4v1759043868274!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Dental Ethics Location - Dr. Umang Shah's Clinic, Undri, Pune"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}