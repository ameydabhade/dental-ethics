import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <Image 
            src="/images/logo.png" 
            alt="The Dental Ethics Logo" 
            width={192}
            height={48}
            className="h-auto mx-auto mb-4 md:mb-0 md:mx-0"
          />
          <a 
            href="https://www.google.com/maps/place/Dr.+Umang+Shah%E2%80%99s+The+Dental+Ethics+%7C+Braces+%7C+Aligner+%7C+Implant+%7C+Dentist+%7C+Undri/@18.4635204,73.9001882,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bed8154ac8a3:0xdfda32bcda5ded3b!8m2!3d18.4635204!4d73.9023631!16s%2Fg%2F11q8q8q8q8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#0c4c2d] mb-4 md:mb-0 hover:text-[#0a3f26] transition-colors cursor-pointer"
          >
            📍 Office no 204, Gagan Ela, NIBM Road, next to Runwal Diamond, Pune 411048
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-[#c8a871] text-[#0c4c2d] px-6 py-3 rounded-lg font-bold hover:bg-[#b89a6a] transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+917030399122" className="bg-[#0c4c2d] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0a3f26] transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}