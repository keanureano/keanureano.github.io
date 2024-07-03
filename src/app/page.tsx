import { ResumeSchema } from "@/types/resumeSchema";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/resume.json", "utf8");
  const data: ResumeSchema = JSON.parse(file);

  return (
    <main className="flex-grow">
      <h1>Hi there!</h1>
      <p>{data.basics?.summary}</p>
    </main>
  );
}
