import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      initials: "PS",
      date: "May 12, 2023",
      review: "It was a very pain free comfortable experience. The doctor is patient friendly and will answer all queries. Latest advance dental technology and services available here. Highly recommended for any dental services and treatment."
    },
    {
      name: "Rajesh Patil", 
      initials: "RP",
      date: "April 7, 2023",
      review: "The dental implant procedure was clear, fast & precise. The doctor explains well and does excellent treatment. They handled my dental implant with expertise and without any pain. Kudos to their excellence. One of the best experiences I have had."
    },
    {
      name: "Anita Deshmukh",
      initials: "AD", 
      date: "January 22, 2023",
      review: "Amazing and fast service, latest technology and expert prosthodontists make The Dental Ethics the best dental clinic in Pune. The team was very courteous and professional and I look forward to visiting them for all my dental needs. Thank you!"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image 
            src="/images/google.png" 
            alt="Google Logo" 
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain" 
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}