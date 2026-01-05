import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, description, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="bg-blue-50 rounded-xl p-8 md:p-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
      <Link href={ctaLink} className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        {ctaText}
      </Link>
    </div>
  );
}