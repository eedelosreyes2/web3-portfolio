import { education } from '../clientData/education.json';

export default function Education() {
  return (
    <div>
      <div className="font-bold">Education</div>
      <hr className="pb-5 w-10" />
      <div className="flex justify-between items-end">
        <a
          href={education.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-cyan-500"
        >
          {education.school}
        </a>
        <div className="text-sm">{education.date}</div>
      </div>
      <div className="font-bold text-2xl pb-2">{education.degree}</div>
      <div className="flex flex-wrap">
        {education.courses.map((skill) => (
          <div className="font-bold text-violet-600 pr-3">{skill}</div>
        ))}
      </div>
    </div>
  );
}
