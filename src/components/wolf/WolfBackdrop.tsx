import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const WolfScene = lazy(() =>
  import("./WolfScene").then((m) => ({ default: m.WolfScene }))
);

function Fallback() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 55%), #0a0d12",
      }}
    />
  );
}

export function WolfBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <ClientOnly fallback={<Fallback />}>
        <Suspense fallback={<Fallback />}>
          <WolfScene />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
