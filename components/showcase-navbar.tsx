import Image from 'next/image';
import Link from 'next/link';

const ShowcaseNavbar = () => {
  return (
    <div className="sticky top-5 z-50 mx-6 flex transform items-center justify-between overflow-hidden rounded-[6px] bg-white p-10 px-4 py-6 md:mx-auto md:px-8 xl:w-4/5 2xl:w-[68%]">
      <Link href="/">
        <Image src="/logo/logo.webp" alt="Bird Logo" width={1000} height={1000} className="w-28" />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden items-center gap-x-10 text-lg font-medium text-gray-700 md:flex 2xl:gap-x-10">
          <Link href="/showcase" className="hover:text-blue-500">
            Showcase
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Process
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Guarentees
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <a href="tel:3333333333" className="hidden xl:flex">
          {/* <button className="flex items-center gap-x-3 rounded-md px-4 py-2">(333)-333-3333</button> */}
        </a>

        <Link
          href={'/meeting'}
          className="rounded-[6px] border-2 border-black bg-BlackShade-100 px-6 py-3 text-lg text-white transition duration-200 hover:bg-orange-50 hover:shadow-custom dark:border-white dark:shadow-dark"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
