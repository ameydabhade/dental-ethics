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
          <p className="text-sm text-slate-800 mb-4 md:mb-0">
            📍 Office no 204, Gagan Ela, NIBM Road, next to Runwal Diamond, Pune 411048
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-rose-400 text-slate-800 px-6 py-3 rounded-lg font-bold hover:bg-rose-300 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+917030399122" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}