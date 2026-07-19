import { useRef, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  strength?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Magnetic<T extends ElementType = "a">({
  as,
  children,
  strength = 0.35,
  className = "",
  ...rest
}: MagneticProps<T>) {
  const Comp = (as || "a") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      style={{ x: sx, y: sy, display: "inline-block" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* @ts-expect-error - polymorphic */}
      <Comp ref={ref} className={className} {...rest}>
        {children}
      </Comp>
    </motion.span>
  );
}
