import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Dr. Saachi Shingrani's Dental Care | Dentist in Bandra, Mumbai",
  description: "Visit Dr. Saachi Shingrani's Dental Care in Bandra West, Mumbai for world-class, painless dental care. Smile design, implants, root canals, and invisible aligners.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["MedicalClinic", "Dentist"],
              "@id": "https://www.srsdentalcare.in/#clinic",
              "name": "Dr. Saachi Shingrani's Dental Care",
              "image": "https://res.cloudinary.com/dswvmoboh/image/upload/q_auto/f_auto/v1775975864/03b2bf11-e510-43ef-96cd-872fde8826b1_yhsftd.png",
              "url": "https://www.srsdentalcare.in",
              "telephone": "+919004402797",
              "email": "srsdentalcare@gmail.com",
              "medicalSpecialty": ["Dentistry", "Cosmetic Dentistry", "Orthodontics"],
              "availableService": [
                { "@type": "MedicalTest", "name": "Dental X-Ray" },
                { "@type": "MedicalProcedure", "name": "Dental Implants" },
                { "@type": "MedicalProcedure", "name": "Invisible Aligners" }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-1 Nutan Nagar Society, Gurunanak Rd, opposite Bandra Talao",
                "addressLocality": "Bandra West, Mumbai",
                "postalCode": "400050",
                "addressCountry": "IN"
              },
              "areaServed": [
                { "@type": "City", "name": "Bandra West" },
                { "@type": "City", "name": "Bandra East" },
                { "@type": "City", "name": "Khar West" },
                { "@type": "City", "name": "Santacruz West" },
                { "@type": "City", "name": "Mahim" },
                { "@type": "City", "name": "Pali Hill" },
                { "@type": "City", "name": "Juhu" }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0563638,
                "longitude": 72.8362814
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "19:30"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "121"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              "@id": "https://www.srsdentalcare.in/#physician",
              "name": "Dr. Saachi Shingrani",
              "url": "https://www.srsdentalcare.in/about",
              "image": "https://res.cloudinary.com/dswvmoboh/image/upload/f_auto,q_auto/v1786965339/IMG_2462_vak3t7.avif",
              "jobTitle": "Lead Dentist",
              "worksFor": {
                "@id": "https://www.srsdentalcare.in/#clinic"
              },
              "medicalSpecialty": ["Dentistry", "Cosmetic Dentistry"],
              "sameAs": [
                "https://www.practo.com/mumbai/doctor/saachi-shingrani-dentist"
              ]
            }
          ])
        }}
      />
      <HomeClient />
    </>
  );
}
