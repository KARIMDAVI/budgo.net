'use client';

import { ContactCLI } from '../organisms/ContactCLI';

export function ContactSection(): JSX.Element {
  return (
    <section id="contact" className="relative z-10 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
            ~/init-project
          </h2>
          <p className="font-mono text-slate-600 dark:text-gray-400">
            Configure your project parameters to begin
          </p>
        </div>

        <ContactCLI />
      </div>
    </section>
  );
}

