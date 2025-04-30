'use client';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

// Company logos data with actual relative paths you'll need to update
const companies = [
  { 
    id: 1, 
    name: 'Cocounty', 
    logo: '/assets/images/trusted/image1.png'  // Update with your actual path
  },
  { 
    id: 2, 
    name: 'Gymshark', 
    logo: '/assets/images/trusted/image2.png'  // Update with your actual path
  },
  { 
    id: 3, 
    name: 'Tudonge', 
    logo: '/assets/images/trusted/image3.png'  // Update with your actual path
  },
  { 
    id: 4, 
    name: 'Nejmet', 
    logo: '/assets/images/trusted/image4.png'  // Update with your actual path
  },
  { 
    id: 5, 
    name: 'Monka', 
    logo: '/assets/images/trusted/image5.png'  // Update with your actual path
  },
  { 
    id: 6, 
    name: 'Pappy', 
    logo: '/assets/images/trusted/image6.png'  // Update with your actual path
  },
];

export default function TrustedBySection() {

    // Translation
    const t = useTranslations();
  return (
    <Card className="container mx-auto w-full bg-[#ffecf2] my-10 rounded-lg border-none py-12 px-4 shadow-none">
      <div>
        {/* Heading with highlighted number - using proper styling from image */}
        <h2 className="text-center font-bold text-2xl md:text-3xl text-neutral-800 mb-10 md:mb-16">
          <span className="inline-block relative">
            {t('trusted-by-over')} <span className="text-pink-500">4.5k+</span> {t("companies")}
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 w-36 bg-pink-600"></span>
          </span>
        </h2>

        {/* Logo grid with proper spacing and responsiveness */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="w-full max-w-[120px] md:max-w-[160px] h-10 md:h-16 flex items-center justify-center"
            >
              {/* For demonstration purposes using placeholder - replace with your actual logos */}
              <div className="relative w-full h-full">
                
                {/* Placeholder for preview */}
                <Image
                  src={`${company.logo}`}
                  alt={`${company.name} logo`}
                  fill
                  className="opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}