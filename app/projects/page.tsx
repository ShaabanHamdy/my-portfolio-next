export default function Projects() {
    const projects = [
      { name: "Facebook Clone", desc: "Social media app with posts, chat, notifications." },
      { name: "Messenger App", desc: "Real-time chat using Socket.io + MongoDB." },
      { name: "E-commerce Dashboard", desc: "Admin dashboard for products & orders." },
    ];
  
    return (
      <section>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
  
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="card">
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  