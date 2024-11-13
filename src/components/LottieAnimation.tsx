// components/LottieAnimation.tsx
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
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
  let animationInstance: AnimationItem | null = null;

  useEffect(() => {
    console.log("animationData:", animationData); // Verifica que esto muestre el JSON correctamente
    if (containerRef.current) {
      animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
      });
    }

    return () => {
      animationInstance?.destroy(); // Limpia la animación cuando se desmonta el componente
    };
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      style={{ width, height}}
      className="lottie-animation"
    />
  );
};

export default LottieAnimation;
