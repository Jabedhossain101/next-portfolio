export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/5 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
        Have a project in mind? Let's work together to build something amazing.
      </p>
      <a
        href="mailto:ahmedrafsan101@gmail.com"
        className="inline-block bg-white text-slate-900 font-bold py-4 px-10 rounded-full hover:bg-cyan-400 transition"
      >
        Say Hello
      </a>
    </section>
  );
}
