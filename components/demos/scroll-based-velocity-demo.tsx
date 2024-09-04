import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Bird Digital Marketing Studio"
      default_velocity={5}
      className="font-display text-center text-4xl font-normal tracking-[-0.02em] text-orange-50 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
