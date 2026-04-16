const experience = [
  {
    company: "Apyhub",
    role: "Senior Frontend Engineer",
    period: "Jan 2026 – Present",
    description:
      "Working on frontend development and maintenance of AI-driven learning solution that upskill individuals through hyper-personalized, hyper-contextualized training experiences.",
  },
  {
    company: "Segwitz",
    role: "Senior Frontend Engineer",
    period: "Jun 2025 – Jan 2026",
    description:
      "I was responsible for leading the Frontend Development of the LMS platform. I developed and integrated web streaming module, avatar customization module, designed and developed complex class scheduling module and connected with web streaming module, making sure performance of the application is up to the mark!",
  },
  {
    company: "Ryaz",
    role: "Frontend Engineer",
    period: "Nov 2021 – Jul 2024",
    description:
      "Developed reusable component libraries in React and TypeScript, integrated REST APIs, and contributed to migrating a legacy jQuery codebase to a modern React architecture.",
  },
];

function Experience() {
  return (
    <div className="flex flex-col gap-8">
      {experience.map((job) => (
        <div key={job.company} className="flex flex-col gap-1">
          <div className="flex justify-between items-baseline">
            <h4 className="font-semibold">{job.company}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {job.period}
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{job.role}</p>
          <p className="text-gray-500 dark:text-gray-400 text-[15px] mt-1">
            {job.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
