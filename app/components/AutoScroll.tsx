import { useEffect, useState } from "react";

export default function AutoScroll({
  targetId,
  scrollThreshold = 700,
}: {
  targetId: string;
  scrollThreshold?: number;
}) {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const scrollY = window.scrollY;

      // If scrolled up to top, reset
      if (scrollY < 300) {
        setHasScrolledDown(false);
        return;
      }

      // Trigger scroll to target only if scrolled down past threshold
      if (scrollY > scrollThreshold && !hasScrolledDown) {
        setHasScrolledDown(true);
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId, scrollThreshold, hasScrolledDown]);

  return null; // No UI, just an effect
}
