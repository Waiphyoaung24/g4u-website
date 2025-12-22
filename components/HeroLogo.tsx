"use client";

import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function HeroLogo() {
  const { theme } = useTheme();

  return (
    <div className="mb-8 flex justify-center">
      <Image
        src={theme === "light"
          ? "https://res.cloudinary.com/dkk8ylzhy/image/upload/v1765793784/3_p3n8dy.png"
          : "https://res.cloudinary.com/dkk8ylzhy/image/upload/v1765793785/4_ppqo5r.png"
        }
        alt="Grow4U Logo"
        width={150}
        height={150}
        className="object-contain"
        priority
      />
    </div>
  );
}
