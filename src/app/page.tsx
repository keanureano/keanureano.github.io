import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Image
        src="/profile-picture.png"
        alt="Profile Picture"
        width={100}
        height={100}
        priority
      />
    </main>
  );
}
