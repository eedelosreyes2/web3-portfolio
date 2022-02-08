import { jobs } from '../clientData/work.json';

export default function Work() {
  return (
    <div>
      <div className="font-bold">Work Experience</div>
      <hr className="pb-5 w-10" />
      {jobs.map((job) => (
        <div className="pb-10">
          <div className="flex-column pb-2">
            <div className="flex justify-between items-end">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-500"
              >
                {job.company}
              </a>
              <div className="text-sm">{job.time}</div>
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
