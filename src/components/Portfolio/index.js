import React, { useState } from 'react';
import PortfolioProject from "../PortfolioProject";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'test-proj-1',
      description: 'A test project 1',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'test-proj-2',
      description: 'A test project 2',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'test-proj-3',
      description: 'A test project 3',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <PortfolioProject
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
