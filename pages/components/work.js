import { jobs } from '../clientData/work.json';

export default function Work() {
  console.log(jobs);

  return (
    <div>
      {jobs.map((job) => (
        <div className="py-5">
          <div className="flex items-end mb-2">
            <div className="font-bold text-2xl mr-2">{job.title}</div>
            <div>at {job.company}</div>
          </div>
          <div className="mb-2">{job.description}</div>
          <div className="flex">
            {job.skills.map((skill) => (
              <div className="font-bold mr-2">{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
