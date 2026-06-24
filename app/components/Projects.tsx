const projects = [
  {
    name: "Hissa",
    description:
      "A React Native mobile app that makes group spending effortless — track shared expenses, split bills, and settle up with friends, all wrapped in a clean, intuitive interface.",
  },
  {
    name: "RCS Message Designer",
    description:
      "A rich message authoring tool for creating interactive RCS experiences with rich cards, carousels, media attachments, and actionable user interactions.",
  },
  {
    name: "Visual Flow Editor",
    description:
      "A drag-and-drop workflow builder that enables businesses to design, automate, and manage complex communication and IVR journeys through an intuitive visual interface.",
  },
  {
    name: "Mazzolari",
    description:
      "A luxury Italian e-commerce store offering premium perfumes, skincare, grooming essentials, and home products with elegant design.",
  },
  {
    name: "Benvenuto",
    description:
      "A web application built for an Italian restaurant chain, streamlining events and dinner bookings while enhancing family experiences with dedicated child care features.",
  },
  {
    name: "Bondium",
    description:
      "A session booking system for psycho-physical wellbeing with Google calendar and simplybook integration.",
  },
  {
    name: "AC Nautica",
    description:
      "A website for Barcelona-based dealing with boats and various other things in marine Industry.",
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div
          key={project.name}
          className="slide-on-hover"
        >
          <h4 className="font-semibold cursor-pointer">{project.name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-[15px]">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
