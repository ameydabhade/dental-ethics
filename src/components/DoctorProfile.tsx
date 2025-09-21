import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Meet Our Chief Endodontist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image src="/doc.png" alt="Dr. Kavitarani Rudagi" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-600">Dr. Kavitarani Rudagi</h3>
            <p className="text-orange-500 font-medium">Founder & Chief Endodontist</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Kavitarani Rudagi is the Founder & Chief Endodontist at Dr. Rudagi&apos;s Dental Centre of Xcellence, 
              with an extensive experience of 15+ years.
            </p>
            
            <p className="md:text-lg">
              She has done her BDS and further completed her training as Diplomate of Indian Board of Endodontics. 
              She has extensively trained in Advanced Root Canal techniques & Implantology.
            </p>

            <p className="md:text-lg">
              Her passion for precision dentistry and patient care has made her one of the most trusted 
              endodontists in Pune.
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-blue-600 mb-3 md:text-lg">Professional Achievements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">🏅</span>
                    <span className="md:text-lg">Diplomate of Indian Board of Endodontics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">🏅</span>
                    <span className="md:text-lg">15+ years of specialized experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">🏅</span>
                    <span className="md:text-lg">Expert in Painless Root Canal Treatment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-blue-600 mt-6 mb-3 md:mt-0 md:text-lg">Expertise & Innovation</h3>
                <p className="md:text-lg">
                  At her practice, she concentrates on endodontics, implants, digital dentistry, 
                  and is a pioneer in painless dental procedures using latest technology like iTero scanner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. RUDAGI
        </button>
      </div>
    </section>
  );
}