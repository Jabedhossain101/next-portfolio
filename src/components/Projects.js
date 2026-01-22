import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="p-6 bg-slate-900 border border-white/10 rounded-2xl hover:border-cyan-400/50 transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="text-xs text-cyan-500 font-mono">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                className="text-sm font-bold hover:underline text-cyan-400"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="text-sm font-bold hover:underline text-slate-400"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
