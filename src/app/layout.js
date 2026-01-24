import { Saira_Condensed } from 'next/font/google'; // Font import thik kora hoyeche
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// Font configuration logic
const sairaCondensed = Saira_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-saira-condensed',
});

export const metadata = {
  title: 'Jabed Hossain | Full Stack Developer',
  description:
    'MERN Stack Developer & Co-Founder of AlgoWave Labs. Specializing in high-performance web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Font variable ebong font-sans class ekhane apply kora hoyeche */}
      <body
        className={`${sairaCondensed.variable} font-sans antialiased selection:bg-cyan-500 selection:text-white bg-[#020617] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
