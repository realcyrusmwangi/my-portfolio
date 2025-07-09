function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Tracker App',
      description: 'A simple web app to track tasks, deadlines, and progress. Built with React and Node.js.',
      link: '#'
    },
    {
      id: 2,
      title: 'Custom CRM System',
      description: 'A customer relationship management tool to help businesses manage leads and sales pipelines.',
      link: '#'
    },
    {
      id: 3,
      title: 'Performance Dashboard',
      description: 'A dashboard to visualize system performance metrics with real-time data.',
      link: '#'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
