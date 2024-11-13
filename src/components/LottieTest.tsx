import React, { useEffect, useRef } from 'react';

interface LottieAnimationProps {
  width?: string;
  height?: string;
}

const LottieTest: React.FC<LottieAnimationProps> = ({
  width = "100%",
  height = "100%",
}) => {
    console.log("useEffect is running");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect is running2");
    console.log("containerRef:", containerRef.current);

    // Puedes agregar más lógica aquí después de confirmar que esto funciona

  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width, height, border: "1px solid red" }} // Agrega un borde para verificar visualmente el contenedor
    />
  );
};

export default LottieTest;
