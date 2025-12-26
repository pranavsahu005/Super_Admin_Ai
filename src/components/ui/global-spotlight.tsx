import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function GlobalSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Ultra-fast response (almost instant)
    const smoothX = useSpring(mouseX, { damping: 10, stiffness: 800, mass: 0.1 });
    const smoothY = useSpring(mouseY, { damping: 10, stiffness: 800, mass: 0.1 });

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            const { clientX, clientY } = e;
            mouseX.set(clientX);
            mouseY.set(clientY);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 opacity-100 transition-opacity duration-300"
            style={{
                background: useMotionTemplate`
          radial-gradient(
            650px circle at ${smoothX}px ${smoothY}px,
            rgba(255, 255, 255, 0.1),
            transparent 40%
          )
        `,
            }}
        />
    );
}
