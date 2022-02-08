import { jobs } from '../clientData/work.json';

export default function Work() {
  return (
    <div>
      {jobs.map((job) => (
        <div className="py-5">
          <div className="flex-column items-end pb-2">
            <div>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-500"
              >
                {job.company}
              </a>
            </div>
            <div className="font-bold text-2xl">{job.title}</div>
          </div>
          <div className="mb-2">{job.description}</div>
          <div className="flex flex-wrap">
            {job.skills.map((skill) => (
              <div className="font-bold text-violet-600 text-sm pr-3">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
