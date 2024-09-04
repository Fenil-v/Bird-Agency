'use client';

import BoxReveal from '@/components/magicui/box-reveal';
import Link from 'next/link';

const BoxRevealDemo = () => {
  return (
    <div className="ml-10 h-full w-full items-center justify-center space-y-2 overflow-hidden pt-8">
      <BoxReveal boxColor={'#d79761'} duration={0.5}>
        <p className="text-3xl font-semibold">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={'#d79761'} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Connect with us via
          <Link href={'/meeting'} className="text-orange-50">
            {' '}
            meeting{' '}
          </Link>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={'#d79761'} duration={0.5}>
        <p className="text-3xl font-semibold">2. Collaborate</p>
      </BoxReveal>

      <BoxReveal boxColor={'#d79761'} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">Outline the scope of the project</h2>
      </BoxReveal>

      <BoxReveal boxColor={'#d79761'} duration={0.5}>
        <p className="text-3xl font-semibold">3. Create</p>
      </BoxReveal>

      <BoxReveal boxColor={'#d79761'} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">Leave the rest to us</h2>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;
