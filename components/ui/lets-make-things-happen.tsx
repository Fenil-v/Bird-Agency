import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function LetsMakeThingsHappenSection() {
  return (
    <section className="relative my-10 rounded-[45px] bg-accent p-[50px] md:mx-auto md:p-[60px] md:py-20">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">Let&apos;s make things happen</p>

        <p className="my-10 text-xl">
          Contact us today to learn more about how our digital marketing services can help your
          business grow and succeed online.
        </p>

        <Link
          href="/meeting"
          className="dark:dark rounded-[6px] border-2 border-black bg-BlackShade-100 px-10 py-3 text-white transition duration-200 hover:bg-orange-50 hover:shadow-custom dark:border-white md:px-16 md:text-xl"
        >
          Book a Call
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
