"use client";

import { ReactNode, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
