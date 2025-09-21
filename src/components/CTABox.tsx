interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-blue-600 text-white p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        <em>Grab the Offer before it expires</em>
      </h2>
      <hr className="border-yellow-300 mb-4" />
      
      <p className="text-lg text-yellow-300 mb-4 text-center">
        <u><strong>Get a Complimentary Consultation & Digital scan (Worth ₹1,000) with Our Chief Endodontist on visiting the clinic within 48 hours.</strong></u>
      </p>

      <p className="text-lg mb-4 text-center">
        <u><strong>Dental Implants Financing available for 3 Months Only</strong></u>
      </p>

      <p className="text-yellow-300 mb-6 text-center font-bold">
        <em>&ldquo;ONLY VALID FOR FIRST 10 PATIENTS&rdquo;</em>
      </p>

      <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full">
        Request a Call back ➤
      </button>
      <small className="block text-center mt-2">
        Complimentary Consultation & Digital scan (Worth ₹1,000)
      </small>
    </section>
  );
} 