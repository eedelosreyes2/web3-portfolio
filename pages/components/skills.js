import { skills } from '../clientData/skills.json';

export default function Skills() {
  return (
    <div>
      <div className="font-bold">Technical Skills</div>
      <hr className="pb-5 w-9" />
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div key={skill} className="font-bold text-cyan-500 pr-2">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
