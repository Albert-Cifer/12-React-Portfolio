import Project from "../Project";
const data = [
  {
    id: 1,
    title: "Readme Generator",
    description: "This is a professional Readme generator to facilitate your work and save time!",
    github: "https://github.com/Albert-Cifer/7-Readme-Generator",
    deployed: "https://www.youtube.com/watch?v=wMnU7WhVIkU",
  },
  {
    id: 2,
    title: "Vehicle Builder",
    description: "This is an app to create and edit different vehicles",
    github: "https://github.com/Albert-Cifer/8-Vehicle-Builder",
    deployed: "https://www.youtube.com/watch?v=W9LfWonmIDc",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "This is a Weather Dashboard that allows us to verify weather in any city you want!",
    github: "https://github.com/Albert-Cifer/09-Weather-Dashboard",
    deployed: "https://zero9-weather-dashboard-gdfd.onrender.com",
  },
  {
    id: 4,
    title: "Employee Tracker",
    description: "This is a tracker to manage your employees",
    github: "https://github.com/Albert-Cifer/10-Employee-Tracker",
    deployed: "https://youtu.be/hE4WCx0PHso",
  },
  {
    id: 5,
    title: "Social Network API",
    description: "This is a social network API, where you can create users, add friends and reactions",
    github: "https://github.com/Albert-Cifer/17-Social-Network-API",
    deployed: "https://youtu.be/1ZczWFM6l1M",
  },
  {
    id: 6,
    title: "Tech Quiz Test Suite",
    description: "This is a test suite for a tech quiz",
    github: "https://github.com/Albert-Cifer/19-Tech-Quiz-Test-Suite",
    deployed: "https://youtu.be/bNPT2UVr87Q",
  },
];

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      {data.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}
