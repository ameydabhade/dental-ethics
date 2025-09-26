'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are dental implants?",
      answer: "Dental implants are artificial tooth roots, usually made of titanium or zirconia, that are surgically placed into the jawbone. They support crowns, bridges, or dentures to replace missing teeth and restore function and aesthetics."
    },
    {
      question: "Am I a candidate for dental implants?",
      answer: "Most healthy adults with missing teeth are good candidates. You need healthy gums, good overall health, and enough jawbone to support the implant. Even if you have bone loss, procedures like bone grafting can often make implants possible."
    },
    {
      question: "Are dental implants safe?",
      answer: "Yes. Dental implants are a proven and safe treatment when placed by trained professionals. They have a high success rate — typically above 95% — when done with proper planning and care."
    },
    {
      question: "How long do dental implants last?",
      answer: "With good oral hygiene and regular dental checkups, dental implants can last 15–25 years or longer. They are considered a long-term or even permanent solution for tooth loss."
    },
    {
      question: "Is the procedure painful?",
      answer: "No. The implant surgery is usually done under local anesthesia and is painless. Post-surgery, mild discomfort or swelling is normal but manageable with prescribed pain relievers."
    },
    {
      question: "How long does the dental implant process take?",
      answer: "The full process can take 3 to 6 months, depending on healing time. Immediate implants and same-day teeth options are also available for suitable candidates."
    },
    {
      question: "What is the success rate of dental implants?",
      answer: "The success rate is typically 95–98%, especially when placed by specialists using modern techniques and proper planning."
    },
    {
      question: "What if I don't have enough bone for implants?",
      answer: "If you've lost bone in your jaw, you may need a bone graft or sinus lift to create a stable foundation. We use advanced diagnostic tools to assess and plan the most suitable approach."
    },
    {
      question: "Can smokers get dental implants?",
      answer: "Yes, but smoking can reduce healing and increase the risk of implant failure. We strongly advise quitting smoking before and after the procedure for best results."
    },
    {
      question: "How do I care for my implants?",
      answer: "Dental implants require daily brushing, flossing, and regular dental visits — just like natural teeth. With good oral hygiene, they can last for many years."
    },
    {
      question: "Are dental implants expensive?",
      answer: "Dental implants are an investment in your health and quality of life. While the initial cost may be higher than dentures or bridges, implants are more durable and offer better long-term value."
    },
    {
      question: "Will my insurance cover dental implants?",
      answer: "Some insurance plans may cover part of the implant cost. We can help you check your policy and offer flexible payment or financing options if needed."
    },
    {
      question: "What are the risks or complications?",
      answer: "As with any surgery, there are small risks such as infection, nerve damage, or implant failure. However, with expert care and proper hygiene, these risks are minimal."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
          Frequently Asked Questions about Dental Implants
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left font-bold hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="flex-grow pr-4 md:text-lg">{faq.question}</span>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''} flex-shrink-0`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-4 md:p-6 border-t bg-gray-50">
                  <p className="text-gray-700 italic md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}