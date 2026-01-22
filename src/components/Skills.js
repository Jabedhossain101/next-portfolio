export default function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'C#',
    'Tailwind CSS',
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-6 py-2 bg-slate-800 rounded-full text-cyan-400 border border-cyan-400/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
