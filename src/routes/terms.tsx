import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Vareno" },
      { name: "description", content: "Terms that govern use of vareno.in and our services." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="text-label text-[color:var(--accent)]">Legal</div>
      <h1 className="heading-xl mt-4 text-4xl md:text-6xl">Terms Of Service</h1>
      <div className="mt-10 space-y-6 text-white/70">
        <p>
          By using vareno.in you agree to these terms. The content on this site is provided
          for informational purposes about Vareno Solutions and our e-commerce marketplace
          services.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">Services</h2>
        <p>
          Specific engagements — account management, advertising, web development, content
          creation — are governed by a separate signed agreement or scope of work between
          Vareno and the client.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">Intellectual property</h2>
        <p>
          All logos, copy, code and design on this site are owned by Vareno Solutions and
          may not be reproduced without written permission.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">Liability</h2>
        <p>
          This site is provided "as is". We do our best to keep it accurate, but we make no
          warranty and are not liable for indirect or consequential damages arising from
          your use of it.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">Contact</h2>
        <p>
          Questions? Email <a className="text-[color:var(--accent)]" href="mailto:info@vareno.in">info@vareno.in</a>.
        </p>
      </div>
    </section>
  );
}
