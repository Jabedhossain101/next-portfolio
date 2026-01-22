import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Showcasing my work and experience as a software engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-cyan-500 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
