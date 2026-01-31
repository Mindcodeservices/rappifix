// components/LottieAnimation.tsx
import React, { useEffect, useRef } from 'react';

import type { AnimationItem } from 'lottie-web'

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  width?: string;
  height?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadLottie = async () => {
      try {
        const lottieModule = await import('lottie-web');
        const lottie = lottieModule.default;

        if (containerRef.current && isMounted) {
          // Destroy previous instance if it exists
          if (animationInstanceRef.current) {
            animationInstanceRef.current.destroy();
          }

          animationInstanceRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop,
            autoplay,
            animationData,
          });
        }
      } catch (error) {
        console.error("Error loading lottie-web:", error);
      }
    };

    loadLottie();

    return () => {
      isMounted = false;
      animationInstanceRef.current?.destroy();
    };
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className="lottie-animation"
    />
  );
};

export default LottieAnimation;
