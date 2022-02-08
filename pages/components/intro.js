import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex justify-center items-center pb-32">
      <a
        href="https://opensea.io/assets/0x88091012eedf8dba59d08e27ed7b22008f5d6fe5/3489"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://lh3.googleusercontent.com/ixJ_mA0TcrVHAbRUWxxs2OVyQ5ixcfOrsANcqMNkAeEbtSqxgFVSM7T9cXPGz-6hA3yyIQlaCC-rlfv8tkxVWPMreChA0t604htM=s0"
          alt="elijahdr.eth"
          className="rounded-xl"
          height={300}
          width={300}
        />
      </a>
    </div>
  );
}
