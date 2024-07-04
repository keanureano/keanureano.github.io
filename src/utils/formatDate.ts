import { Iso8601 } from "@/types/resumeSchema";

export default function formatDate(
  startDate: Iso8601 | undefined,
  endDate: Iso8601 | undefined
): { startEnd: string; duration: string } | undefined {
  if (!startDate || !endDate) {
    return undefined;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate year and month differences
  let diffYears = end.getFullYear() - start.getFullYear();
  let diffMonths = end.getMonth() - start.getMonth() + 1;

  // Handle cases where end month is less than start month
  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  // Construct the formatted duration string
  let duration = "";
  if (diffYears > 0) {
    duration += `${diffYears} ${diffYears > 1 ? "years" : "year"}`;
  }
  if (diffMonths > 0) {
    duration += ` ${duration ? " " : ""}${diffMonths} ${
      diffMonths > 1 ? "months" : "month"
    }`;
  }

  const formattedDate = {
    startEnd: `(${start.getFullYear()}-${end.getFullYear()})`,
    duration: `(${duration.trim()})`,
  };

  return formattedDate;
}
