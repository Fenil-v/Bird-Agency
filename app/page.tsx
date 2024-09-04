'use client';

import { AnimatedBeamMultipleOutputDemo } from '@/components/demos/animated-beam-demo';
import { AnimatedShinyTextDemo } from '@/components/demos/animated-shiny-text-demo';
import BoxRevealDemo from '@/components/demos/box-reveal-demo';
import { CoverDemo } from '@/components/demos/cover-demo';
import { ScrollBasedVelocityDemo } from '@/components/demos/scroll-based-velocity-demo';
import { WordPullUpDemo } from '@/components/demos/word-pull-up-demo';
import BoxReveal from '@/components/magicui/box-reveal';
import NumberTicker from '@/components/magicui/number-ticker';
import { InfiniteMovingLogos } from '@/components/ui/infinite-moving-logos';
import Image from 'next/image';
import Link from 'next/link';
import { PiCheckBold } from 'react-icons/pi';
import { Link as ScrollLink, Element } from 'react-scroll';
import { IconStarFilled } from '@tabler/icons-react';
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/demos/shooting-stars-demo';
import LetsMakeThingsHappenSection from '@/components/ui/lets-make-things-happen';

const services = [
  {
    icon: '/images/s_6.png',
    title: 'Web Design + Development',
    description:
      'Take your business to the next level with our web design and development services',
  },
  {
    icon: '/images/s_1.png',
    title: 'Search Engine Optimization',
    description: 'Get your website to the top of search engine results with our SEO services',
  },
  {
    icon: '/images/s_5.png',
    title: 'Content Creation',
    description: "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: '/images/s_3.png',
    title: 'Social Media Marketing',
    description:
      'Interact with your customers and increase sales with our email marketing services',
  },
  {
    icon: '/images/s_4.png',
    title: 'Email Marketing',
    description: 'With our content creation services, we help businesses drive results',
  },
  {
    icon: '/images/s_2.png',
    title: 'Pay-Per-Click Advertising',
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

export default function Home() {
  return (
    <div className="inset-0 -z-10 h-full w-full overflow-clip bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element
        name="top"
        className="sticky top-5 z-50 mx-6 flex items-center justify-between overflow-hidden rounded-[6px] bg-white px-4 py-6 md:mx-auto md:px-8 xl:w-4/5 2xl:w-[68%]"
      >
        <Link href={'/'}>
          <Image src={'/logo/logo.webp'} alt="Logo" width={1000} height={1000} className="w-28" />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden cursor-pointer items-center gap-x-10 text-lg font-medium text-gray-700 md:flex">
            <Link href={'/showcase'} className="font-medium hover:text-orange-50">
              Showcase
            </Link>

            <ScrollLink to="services" smooth={true} className="font-medium hover:text-orange-50">
              Services
            </ScrollLink>

            <ScrollLink to="process" smooth={true} className="font-medium hover:text-orange-50">
              Process
            </ScrollLink>

            <ScrollLink to="guarentees" smooth={true} className="font-medium hover:text-orange-50">
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          {/* <a href="tel:333333333" className="hidden lg:flex">
            <button className="flex items-center gap-x-3 rounded-md px-4 py-2">
              (333)-333-333
            </button>
          </a> */}

          <Link
            href={'/meeting'}
            className="rounded-[6px] border-2 border-black bg-BlackShade-100 px-6 py-3 text-lg text-white transition duration-200 hover:bg-orange-50 hover:shadow-custom dark:shadow-dark"
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="mx-6 mt-14 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p className="mx-auto my-6 text-xl text-gray-500 md:my-10 md:w-4/5 md:text-center md:text-2xl">
            Schedule a call with us to discuss your project and get a quote in minutes
          </p>

          <div className="flex items-center gap-x-4 md:justify-center">
            <Link
              href="/meeting"
              className="rounded-[6px] border-2 border-black bg-BlackShade-100 px-10 py-3 text-white transition duration-200 hover:bg-orange-50 hover:shadow-custom dark:border-white dark:shadow-dark md:px-16 md:text-xl"
            >
              Book a Call
            </Link>
            <Link
              href={'/showcase'}
              className="dark:dark rounded-[6px] border-4 border-black bg-white px-10 py-3 hover:shadow-custom md:px-16 md:text-xl"
            >
              Showcase
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center gap-4 text-left md:mx-auto md:mt-16 md:grid-cols-4 md:justify-items-center">
            <BoxReveal boxColor={'#d79761'} duration={0.5}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl font-medium text-orange-50" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={'#d79761'} duration={0.5}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl font-medium text-orange-50" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={'#d79761'} duration={0.5}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl font-medium text-orange-50" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={'#d79761'} duration={0.5}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl font-medium text-orange-50" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="mx-auto my-10 items-center justify-between gap-x-28 gap-y-4 md:flex">
            <div className="md:w-2/5">
              <h1 className="w-4/5 text-2xl font-medium text-gray-600">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="my-6 flex w-full gap-x-5">
                <div>
                  <h1 className="text-3xl font-medium text-orange-50 md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="md:text-md text-sm text-gray-500">Happy Clients</p>
                  </h1>
                </div>

                <div className="w-px self-stretch bg-gray-300"></div>

                <div className="min-w-0 flex-1">
                  <h1 className="overflow-hidden whitespace-nowrap text-3xl font-medium text-orange-50 md:text-5xl">
                    <NumberTicker value={100} /> +
                    <p className="md:text-md text-sm text-gray-500">Projects Completed</p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="mt-10 overflow-hidden md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: '/logo/logo.webp',
                    name: 'Logo',
                  },
                  {
                    logo: '/logo/logo.webp',
                    name: 'Logo',
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="mx-6 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="mx-auto py-4 text-xl text-gray-500 md:w-1/2 md:text-center md:text-2xl">
            All of our services are designed to help your business stand out
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full cursor-pointer flex-col justify-between space-y-4 rounded-md bg-gray-100 p-4 text-center transition-transform hover:scale-105"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="h-40 w-full rounded-md bg-gray-100 object-contain p-4"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="mx-6 md:mx-auto md:px-0">
          <h1 className="mx-auto flex items-center justify-center gap-x-2 text-3xl font-medium md:text-center md:text-5xl">
            Our{' '}
            <span className="flex items-center gap-x-1 font-medium text-orange-50">
              {' '}
              <Image
                src={'/icons/squiggle.svg'}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={'/icons/star.svg'}
                width={10000}
                height={10000}
                className="mb-8 w-6"
                alt="image"
              />
            </span>{' '}
            Process
          </h1>

          <p className="mx-auto py-4 text-center text-xl text-gray-500 md:w-1/2 md:text-2xl">
            All of our services are designed to help your business to get noticed.
          </p>

          <div className="mx-auto flex w-full flex-col items-center justify-center md:w-1/2 md:flex-row">
            <div className="order-2 w-full md:order-1 md:w-1/2">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="order-1 w-full md:order-2 md:ml-0 md:w-1/2">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="mx-auto items-center justify-center space-y-6 px-6 md:flex md:gap-x-20 md:space-y-0 md:px-0 xl:w-4/5 2xl:w-[68%]">
          <Image
            src={'/logo/logo.webp'}
            width={10000}
            height={10000}
            className="rounded-md md:w-1/3"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl">
              &quot;We&apos;ve been working with Bird for over 2 years and they&apos;ve been amazing
              to work with. They&apos;ve helped us grow our business and we couldn&apos;t be happier
              with the results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:mx-auto md:py-20 xl:w-4/5 2xl:w-[68%]">
        <LetsMakeThingsHappenSection />
      </section>

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
          © 2025 Bird. All Rights Reserved.
          <Link href="/" className="font-medium text-orange-50">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
