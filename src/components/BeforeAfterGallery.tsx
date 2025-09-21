import Image from 'next/image';

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  patientNumber: number;
}

const BeforeAfterImage = ({ beforeImage, afterImage, patientNumber }: BeforeAfterImageProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="relative aspect-square w-full md:w-[300px]">
        <Image
          src={beforeImage}
          alt={`Patient ${patientNumber} Before Treatment`}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
          Before
        </div>
      </div>
      <div className="relative aspect-square w-full md:w-[300px]">
        <Image
          src={afterImage}
          alt={`Patient ${patientNumber} After Treatment`}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
          After
        </div>
      </div>
    </div>
  );
};

export default function BeforeAfterGallery() {
  const cases = [
    {
      beforeImage: '/images/3before.png',
      afterImage: '/images/3after.png',
      patientNumber: 3
    },
    {
      beforeImage: '/images/4before.png',
      afterImage: '/images/4after.png',
      patientNumber: 4
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto p-4">
      {cases.map((caseItem) => (
        <BeforeAfterImage
          key={caseItem.patientNumber}
          beforeImage={caseItem.beforeImage}
          afterImage={caseItem.afterImage}
          patientNumber={caseItem.patientNumber}
        />
      ))}
    </div>
  );
} 