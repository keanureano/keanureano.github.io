import { ResumeSchema } from "@/types/resumeSchema";
import Link from "next/link";
import React from "react";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Introduction({ resume }: { resume: ResumeSchema }) {
  const emailUrl = ("mailto:" + resume.basics?.email) as string;
  const linkedinUrl = resume.basics?.profiles?.[0].url as string;
  const githubUrl = resume.basics?.url as string;
  return (
    <>
      <h1 className="text-5xl">Hi there!</h1>
      <p>{IntroductionText(resume)}</p>
      <div className="pt-4 flex space-x-2">
        <Link href={emailUrl}>
          <FaEnvelopeSquare />
        </Link>
        <Link href={linkedinUrl}>
          <FaLinkedin />
        </Link>
        <Link href={githubUrl}>
          <FaGithubSquare />
        </Link>
      </div>
      <hr />
    </>
  );
}

const IntroductionText = (resume: ResumeSchema): JSX.Element[] | string => {
  const name = resume.basics?.name;
  const summary = resume.basics?.summary;
  const url = resume.basics?.profiles?.[0].url as string;

  if (!name || !summary) return summary ?? "";
  const regex = new RegExp(name, "gi");
  const parts = summary.split(regex);
  if (parts.length <= 1) return summary;

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {index > 0 && (
        <Link href={url} className="font-medium text-lg">
          {name}
        </Link>
      )}
      {part}
    </React.Fragment>
  ));
};
