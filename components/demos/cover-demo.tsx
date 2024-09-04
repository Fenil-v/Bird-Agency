import React from 'react';
import { Cover } from '@/components/ui/cover';

export function CoverDemo() {
  return (
    <div>
      <h1 className="relative z-20 mx-auto max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text text-3xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-center md:text-6xl">
        Elevate your brand with <br /> <Cover>Bird Marketing Services</Cover>
      </h1>
    </div>
  );
}
