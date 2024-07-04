import { ResumeSchema } from "@/types/resumeSchema";
import Link from "next/link";

export default function Certifications({ resume }: { resume: ResumeSchema }) {
  return (
    <>
      <h1>Certifications</h1>
      <ul className="flex flex-col space-y-2">
        {resume.certificates
          ?.slice(0, 3)
          .reverse()
          .map((certificate) => {
            const name = certificate.name as string;
            const issuer = certificate.issuer as string;
            const url = certificate.url as string;
            return (
              <li key={name}>
                <Link href={url}>
                  <p className="font-medium">{name}</p>
                  <p>{issuer}</p>
                </Link>
              </li>
            );
          })}
      </ul>
      <hr />
    </>
  );
}
