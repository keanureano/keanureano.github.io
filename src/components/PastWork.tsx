import { ResumeSchema } from "@/types/resumeSchema";
import Link from "next/link";

export default function PastWork({ resume }: { resume: ResumeSchema }) {
  return (
    <>
      <h1>Work</h1>
      <ul className="flex flex-col space-y-2">
        {resume.work?.slice(0, 3).map((work) => (
          <li key={work.name}>
            <Link href={`${work.url}`}>
              <p className="truncate">
                <span className="font-medium">{work.name} - </span>
                {work.summary}
              </p>
            </Link>
          </li>
        ))}
        <li>
          <Link href={`${resume.basics?.profiles?.[0].url}`}>
            <p className="font-medium opacity-80">View More</p>
          </Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
