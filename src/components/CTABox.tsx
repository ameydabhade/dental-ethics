interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-slate-800 text-white p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        <em>Grab the Offer before it expires</em>
      </h2>
      <hr className="border-rose-400 mb-4" />
      
      <p className="text-lg text-rose-400 mb-4 text-center">
        <u><strong>Get a Complimentary Consultation & Digital scan (Worth ₹1,000) with Our Expert Prosthodontist on visiting the clinic within 48 hours.</strong></u>
      </p>

      <p className="text-lg mb-4 text-center">
        <u><strong>0% Interest EMI options available for all treatments</strong></u>
      </p>

      <p className="text-rose-400 mb-6 text-center font-bold">
        <em>&ldquo;ONLY VALID FOR FIRST 10 PATIENTS&rdquo;</em>
      </p>

      <button onClick={onBookAppointment} className="bg-rose-400 text-slate-800 py-3 px-6 rounded-lg font-bold w-full">
        Request a Call back ➤
      </button>
      <small className="block text-center mt-2">
        Complimentary Consultation & Digital scan (Worth ₹1,000)
      </small>
    </section>
  );
} 