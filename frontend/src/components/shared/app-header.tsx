'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ShareButton from '../memories/share-button';
import { useParams } from 'next/navigation';

export default function AppHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const params = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 flex w-full items-center justify-between p-4 px-4 text-white backdrop-blur-md transition-all duration-500 md:px-12 ${
        scrollPosition > 100 ? 'bg-black bg-opacity-10' : ''
      }`}
    >
      <h1 className="flex items-center gap-2 text-xl">
        <Image
          src={'/logo.webp'}
          alt="Based Hardware Logo"
          width={68}
          height={64}
          className="h-auto w-[25px]"
        />
        <span className="hidden font-bold md:inline">Omi</span>
      </h1>
      <nav>
        <ul className="flex gap-3 text-sm md:gap-4 md:text-base">
          {params.id && (
            <li>
              <ShareButton />
            </li>
          )}
          <li>
            <Link
              href={`https://basedhardware.com/`}
              target="_blank"
              className="flex items-center gap-2 rounded-md bg-white/90 p-1.5 px-3.5 text-black transition-colors hover:bg-white"
            >
              Order now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
