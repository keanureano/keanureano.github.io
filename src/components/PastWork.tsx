import { ResumeSchema } from "@/types/resumeSchema";
import Link from "next/link";

export default function PastWork({ resume }: { resume: ResumeSchema }) {
  const linkedinUrl = resume.basics?.profiles?.[0].url as string;
  return (
    <>
      <h1>Work</h1>
      <ul className="flex flex-col space-y-2">
        {resume.work?.slice(0, 3).map((work) => {
          const name = work.name as string;
          const url = work.url as string;
          const summary = work.summary as string;
          return (
            <li key={name}>
              <Link href={url}>
                <p className="truncate">
                  <span className="font-medium">{name} - </span>
                  {summary}
                </p>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href={linkedinUrl}>
            <p className="opacity-75">View More</p>
          </Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
