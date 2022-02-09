import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex items-center pt-16 pb-32">
      <a
        href="https://opensea.io/assets/0x88091012eedf8dba59d08e27ed7b22008f5d6fe5/3489"
        target="_blank"
        rel="noopener noreferrer"
        className="pr-5"
      >
        <Image
          src="https://lh3.googleusercontent.com/ixJ_mA0TcrVHAbRUWxxs2OVyQ5ixcfOrsANcqMNkAeEbtSqxgFVSM7T9cXPGz-6hA3yyIQlaCC-rlfv8tkxVWPMreChA0t604htM=s0"
          alt="elijahdr.eth"
          className="rounded-full"
          height={100}
          width={100}
        />
      </a>
      <div className="font-bold">Elijah Delos Reyes / elijahdr.eth</div>
    </div>
  );
}
