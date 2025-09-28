import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
        <u>Transforming Smiles</u>
      </h2>
      <p className="text-center text-[#c8a871] font-bold mb-6 md:text-lg">
        Witness the before and after the magic of our Painless Dental Implants!
      </p>

      {/* Before & After Videos */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { video: "beforeafter1.mp4", title: "Transformation 1" },
          { video: "beforeafter2.mp4", title: "Transformation 2" },
          { video: "beforeafter3.mp4", title: "Transformation 3" }
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-4">
            <div className="bg-white rounded-xl p-2 w-full">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <video 
                  src={`/videos/${item.video}`}
                  controls
                  className="w-full h-full object-cover"
                  poster={`/images/results/${index + 1}before.png`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <h3 className="text-center text-sm mt-3 text-[#0c4c2d] font-bold">{item.title}</h3>
          </div>
        ))}
      </div>

      <p className="text-center my-6 md:text-lg max-w-3xl mx-auto">
        Ready to witness the enchanting before-and-after journey?<br />
        Explore the magic of your potential new smile today!
      </p>

      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-center text-[#0c4c2d] mb-6">
          More Patient Success Stories
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            { video: "test1.mp4", title: "Success Story 1" },
            { video: "test2.mp4", title: "Success Story 2" },
            { video: "beforeafter1.mp4", title: "Complete Transformation" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-xl overflow-hidden relative" style={{ paddingBottom: '177.78%' }}>
              <video 
                src={`/videos/${item.video}`}
                controls
                className="absolute inset-0 w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <button onClick={onBookAppointment} className="bg-[#c8a871] text-[#0c4c2d] py-3 px-6 rounded-lg font-bold w-full mb-2">
          Request a Call back ➤
        </button>
        <small className="block text-center text-gray-600">
          Complimentary Consultation & Digital scan (Worth ₹1,000)
        </small>
      </div>
    </section>
  );
}