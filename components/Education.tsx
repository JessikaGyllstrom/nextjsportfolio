import { Education } from "../typings.d";
import Animation from "./AnimateL";

type Props = {
  education: Education[];
};

export default function Educations({ education }: Props) {
  const sortedEducation = [...education].sort(
    (a, b) => Number(a.popularity) - Number(b.popularity)
  );

  return (
    <div id="education">
      <Animation>
        {sortedEducation.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col border p-3 my-2 border-gray-700 rounded-sm  dark:bg-gray-800 bg-opacity-20 dark:text-white"
          >
            <h5 className="text-xs font-bold"> {skill.title}</h5>
            <h5 className="text-xs"> {skill.description}</h5>
          </div>
        ))}
      </Animation>
    </div>
  );
}
