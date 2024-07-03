import { ResumeSchema } from "@/types/resumeSchema";
import { promises as fs } from "fs";
import Link from "next/link";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/resume.json", "utf8");
  const data: ResumeSchema = JSON.parse(file);

  return (
    <main className="flex-grow">
      <h1 className="text-5xl">Hi there!</h1>
      <p>{data.basics?.summary}</p>
      <h1>Work</h1>
      <ul className="flex flex-col space-y-2">
        {data.work?.slice(0, 3).map((work) => (
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
          <Link href={`${data.basics?.profiles?.[0].url}`}><p className="font-medium opacity-80">View More</p></Link>
        </li>
      </ul>
    </main>
  );
}
