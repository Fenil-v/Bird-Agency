import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-[#fafafa] px-6 py-10 md:mx-auto md:px-0">
      <div className="mx-auto flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%]">
        <h1 className="text-3xl font-medium md:text-5xl">
          <Image
            src={'/logo/logo.webp'}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{' '}
        </h1>
        <p className="text-left text-xl text-gray-500">333-333-3333</p>
        <p className="text-left text-xl text-gray-500">abc@gmail.com</p>
      </div>

      <div className="mt-10 flex gap-x-4 md:justify-center">
        © 2024 Bird. All Rights Reserved.
        <Link href="/" className="font-medium text-orange-50">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
