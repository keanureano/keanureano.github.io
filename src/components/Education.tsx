import { ResumeSchema } from "@/types/resumeSchema";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

export default function Education({ resume }: { resume: ResumeSchema }) {
  const institution = resume.education?.[0].institution as string;
  const studyType = resume.education?.[0].studyType as string;
  const area = resume.education?.[0].area as string;
  const score = resume.education?.[0].score;
  const url = "https://www.linkedin.com/school/batstateutheneu/" as string;
  const date = formatDate(
    resume.education?.[0].startDate,
    resume.education?.[0].endDate
  );

  return (
    <>
      <h1>Education</h1>
      <div className="flex flex-col space-y-2">
        <p className="font-medium">
          <Link href={url}>
            {institution} {date?.startEnd}
          </Link>
        </p>
        <p>
          {studyType}, {area}
        </p>
        <p>{score}</p>
      </div>
      <hr />
    </>
  );
}
