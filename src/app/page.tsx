import Introduction from "@/components/Introduction";
import PastWork from "@/components/PastWork";
import { ResumeSchema } from "@/types/resumeSchema";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/resume.json", "utf8");
  const resume: ResumeSchema = JSON.parse(file);

  return (
    <main className="flex-grow">
      <Introduction resume={resume} />
      <PastWork resume={resume} />
    </main>
  );
}
