import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vareno" },
      { name: "description", content: "How Vareno collects, uses, and protects your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="text-label text-[color:var(--accent)]">Legal</div>
      <h1 className="heading-xl mt-4 text-4xl md:text-6xl">Privacy Policy</h1>
      <div className="mt-10 space-y-6 text-white/70">
        <p>
          Vareno Solutions ("we", "us") respects your privacy. This policy explains what we
          collect through this website and how we use it.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">What we collect</h2>
        <p>
          When you submit our contact form we collect your name, email, optional phone number
          and the message you send us. We use this only to reply to your inquiry and provide
          the services you requested.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">How we store it</h2>
        <p>
          Inquiries are delivered to our team email via a transactional email provider and
          retained for as long as needed to answer you and keep a business record.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">Third parties</h2>
        <p>
          We do not sell your information. We share it only with providers strictly required
          to operate the site (email delivery, hosting) and only for that purpose.
        </p>
        <h2 className="heading-lg mt-8 text-xl text-white">Your rights</h2>
        <p>
          Email <a className="text-[color:var(--accent)]" href="mailto:info@vareno.in">info@vareno.in</a> to access, correct or delete any data you have shared.
        </p>
      </div>
    </section>
  );
}
