import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { Platforms } from "@/components/sections/Platforms";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionDivider } from "@/components/site/SectionDivider";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Showcase />
      <SectionDivider />
      <Platforms />
      <SectionDivider />
      <CTABanner />
    </>
  );
}
