import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex items-center py-16">
      <Image
        src="https://pbs.twimg.com/profile_images/1521267985154936832/wHliysQK_400x400.jpg"
        alt="elijahdr.eth"
        className="rounded-full"
        height={100}
        width={100}
      />
      <div className="font-bold pl-5">elijah dr</div>
    </div>
  );
}
