import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomeClient from "@/components/HomeClient";

export const dynamic = 'force-dynamic';

const VALID_AREAS = [
  { slug: 'bandra-west', name: 'Bandra West' },
  { slug: 'bandra-east', name: 'Bandra East' },
  { slug: 'pali-hill', name: 'Pali Hill' },
  { slug: 'khar-west', name: 'Khar West' },
  { slug: 'santacruz-west', name: 'Santacruz West' },
  { slug: 'mahim', name: 'Mahim' },
  { slug: 'mumbai', name: 'Mumbai' }
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = VALID_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return { title: 'Area Not Found' };
  }

  return {
    title: `[2026] Best Dentist in ${area.name} | Dr. Saachi Shingrani`,
    description: `Looking for the best dentist near ${area.name}? Experience painless treatments, invisible aligners, and dental implants at SRS Dental Care. Book today!`,
    keywords: [`dentist in ${area.name.toLowerCase()}`, `best dental clinic near ${area.name.toLowerCase()}`, `invisible aligners ${area.name.toLowerCase()}`],
    alternates: {
      canonical: `/areas/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = VALID_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  // We reuse the HomeClient but pass the area name down as a prop
  // to dynamically update the hero text (e.g. "Your Trusted Dentist in Pali Hill")
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Dr. Saachi Shingrani's Dental Care",
            "url": `https://www.srsdentalcare.in/areas/${slug}`,
            "areaServed": {
              "@type": "Place",
              "name": area.name
            }
          })
        }}
      />
      <HomeClient locationName={area.name} />
    </>
  );
}
