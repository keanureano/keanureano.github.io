import { ResumeSchema } from "@/types/resumeSchema";
import Link from "next/link";

export default function Certifications({ resume }: { resume: ResumeSchema }) {
  const linkedinUrl = resume.basics?.profiles?.[0].url as string;
  return (
    <>
      <h1>Certifications</h1>
      <ul className="flex flex-col space-y-2">
        {resume.certificates
          ?.slice(0, 3)
          .reverse()
          .map((certificate) => {
            const name = certificate.name as string;
            const url = certificate.url as string;
            return (
              <li key={name}>
                <Link href={url}>{name}</Link>
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
