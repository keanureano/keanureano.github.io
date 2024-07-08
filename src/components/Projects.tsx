import { ResumeSchema } from "@/types/resumeSchema";
import Link from "next/link";

export default function Projects({ resume }: { resume: ResumeSchema }) {
  const githubUrl = resume.basics?.url as string;
  return (
    <>
      <h1>Projects</h1>
      <ul className="flex flex-col space-y-2">
        {resume.projects?.slice(0, 3).map((project) => {
          const name = project.name;
          const url = project.summary?.match(/https?:\/\/[^\s]+/)?.[0] ?? "#";
          const description = project.summary?.substring(
            project.summary?.indexOf("\n") + 1
          );
          return (
            <li key={name}>
              <Link href={url}>
                <p className="truncate">
                  <span className="font-medium">{name} - </span>
                  {description}
                </p>
              </Link>
            </li>
          );
        })}
        <Link href={githubUrl}>
          <p className="opacity-75">View More</p>
        </Link>
      </ul>
    </>
  );
}
