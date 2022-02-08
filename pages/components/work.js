import { jobs } from '../clientData/work.json';

export default function Work() {
  return (
    <div>
      <div className="font-bold">Work Experience</div>
      <hr className="pb-5 w-9" />
      {jobs.map(({ id, company, title, dates, description, skills, url }) => (
        <div key={id} className="pb-10">
          <div className="flex-column pb-2">
            <div className="flex justify-between items-end">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-500"
              >
                {company}
              </a>
              <div className="text-sm">{dates}</div>
            </div>
            <div className="font-bold text-2xl">{title}</div>
          </div>
          <div className="mb-2">{description}</div>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <div
                key={skill}
                className="font-bold text-violet-600 text-sm pr-3"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
