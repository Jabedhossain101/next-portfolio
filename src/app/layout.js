import { Sansita } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// Sansita Font Configuration
const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-sansita',
});

export const metadata = {
  title: 'Jabed Hossain | Full Stack Developer',
  description:
    'MERN Stack Developer & Co-Founder of AlgoWave Labs. Specializing in high-performance web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sansita.variable} font-sans antialiased selection:bg-cyan-500 selection:text-white bg-[#020617] text-white`}
      >
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
