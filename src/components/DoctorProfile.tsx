import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Meet Our Expert Prosthodontist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image src="/doc.png" alt="Dr. Umang Shah" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0c4c2d]">Dr. Umang Shah | Dr Jyoti Shah</h3>
            <p className="text-[#c8a871] font-medium">Prosthodontist | Implantologist | Certified Invisalign Provider</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              With over 8 years of clinical experience, Dr. Umang Shah is a highly skilled prosthodontist and implantologist known for delivering precise, predictable, and patient-centered dental care.
            </p>
            
            <p className="md:text-lg">
              He has successfully placed and restored more than 500 dental implants, ranging from single-tooth replacements to complex full mouth rehabilitation cases.
            </p>

            <p className="md:text-lg">
              Dr. Shah integrates advanced digital technology into his practice, including the use of an in- house digital scanner, ensuring greater accuracy, efficiency, and patient comfort in diagnosis and treatment planning.
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#0c4c2d] mb-3 md:text-lg">Professional Credentials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0c4c2d]">🏅</span>
                    <span className="md:text-lg">AFAAID (USA), ACDI and AACD(USA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0c4c2d]">🏅</span>
                    <span className="md:text-lg">Member of Indian Prosthodontist Society</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0c4c2d]">🏅</span>
                    <span className="md:text-lg">Member of Academy of Cosmetic Dentistry India</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0c4c2d]">🏅</span>
                    <span className="md:text-lg">Member of Indian Society of Oral Implantology</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#0c4c2d] mt-6 mb-3 md:mt-0 md:text-lg">Expertise & Innovation</h3>
                <p className="md:text-lg">
                  As a certified Invisalign provider, Dr. Shah offers modern, minimally invasive orthodontic solutions. His commitment to excellence is evident in his consistent treatment outcomes and focus on functional and aesthetic restoration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-[#c8a871] text-[#0c4c2d] py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. SHAH
        </button>
      </div>
    </section>
  );
}