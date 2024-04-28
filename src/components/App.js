// App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  // Assigning unique ids to each project
  const projectsWithIds = user.projects.map((project, index) => ({
    ...project,
    id: index + 1 // Assuming ids start from 1
  }));

  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={projectsWithIds} />
    </div>
  );
}

export default App;