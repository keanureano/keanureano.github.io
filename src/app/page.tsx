import Certifications from "@/components/Certifications";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import { ResumeSchema } from "@/types/resumeSchema";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/resume.json", "utf8");
  const resume: ResumeSchema = JSON.parse(file);

  return (
    <>
      <Summary resume={resume} />
      <Experience resume={resume} />
      <Education resume={resume} />
      <Certifications resume={resume} />
      <Projects resume={resume} />
    </>
  );
}
