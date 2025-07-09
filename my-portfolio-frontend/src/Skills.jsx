function Skills() {
  const skills = [
    { name: 'PHP', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Oracle DB', level: 75 },
    { name: 'System Implementation', level: 95 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">My Skills</h1>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-gray-800">{skill.name}</span>
              <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
