import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import { Star } from 'lucide-react';

function Testimonials() {
  const items = [
    {
      name: 'Alex Carter',
      role: 'Agency Owner',
      quote:
        'We consolidated 9 tools into Bizcult. Our close rate improved and onboarding time was cut in half.',
    },
    {
      name: 'Sofia Nguyen',
      role: 'Marketing Director',
      quote:
        'The automations are powerful yet simple. We launched campaigns in days instead of weeks.',
    },
    {
      name: 'Jordan Lee',
      role: 'Founder, Growth Studio',
      quote:
        'Best decision of the year. Reliable support, beautiful funnels, and a CRM our team actually uses.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Loved by Growing Agencies</h2>
          <p className="mt-4 text-slate-600">Real results from real teams using Bizcult every day.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: 'What is Bizcult?',
      a: 'Bizcult is a white‑label, all‑in‑one marketing and CRM platform built on top of GoHighLevel to help agencies and small businesses scale.',
    },
    {
      q: 'Do I need a credit card for the trial?',
      a: 'No. Start your 14‑day free trial with full access to core features, no credit card required.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, plans are month‑to‑month and you can cancel or change tiers at any time from your dashboard.',
    },
    {
      q: 'Is this white‑label?',
      a: 'Yes. On eligible plans you can add your branding, custom domain, and more to deliver a seamless client experience.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              open={open === idx}
              onClick={(e) => {
                e.preventDefault();
                setOpen((prev) => (prev === idx ? -1 : idx));
              }}
              className="group"
            >
              <summary className="list-none cursor-pointer select-none bg-white px-6 py-5 flex items-center justify-between">
                <span className="text-slate-900 font-medium">{item.q}</span>
                <span className="ml-4 h-6 w-6 rounded-full grid place-items-center border border-slate-300 text-slate-500 group-open:bg-blue-600 group-open:text-white group-open:border-blue-600 transition">
                  {open === idx ? '-' : '+'}
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to Grow Your Business?</h2>
        <p className="mt-3 text-blue-100">Join thousands of marketers switching to Bizcult.</p>
        <a href="#pricing" className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition">
          Start Your 14-Day Free Trial
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Bizcult. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
