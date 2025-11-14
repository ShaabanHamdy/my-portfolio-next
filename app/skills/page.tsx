export default function Skills() {
    const skills = [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "REST APIs"
    ];
  
    return (
      <section>
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="card text-center font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  