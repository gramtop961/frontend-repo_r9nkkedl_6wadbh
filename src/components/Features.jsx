import React from 'react';
import { Users, Rocket, Mail, MessageSquare, Calendar, Star, Globe, Settings } from 'lucide-react';

const features = [
  { icon: Users, title: 'CRM & Pipelines', desc: 'Track leads, deals, and revenue with clarity.' },
  { icon: Rocket, title: 'Funnels & Sites', desc: 'Launch high‑converting pages with drag‑and‑drop.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Automate campaigns and broadcasts at scale.' },
  { icon: MessageSquare, title: 'Two‑Way SMS', desc: 'Start real conversations where customers are.' },
  { icon: Calendar, title: 'Calendars', desc: 'Reduce no‑shows with smart booking links.' },
  { icon: Star, title: 'Reputation', desc: 'Generate reviews and showcase social proof.' },
  { icon: Globe, title: 'Website Builder', desc: 'Publish responsive, branded sites in minutes.' },
  { icon: Settings, title: 'Automations', desc: 'Connect everything with powerful workflows.' },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-slate-600">One platform to replace 10+ tools. Faster setup, lower costs, better results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 grid place-items-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
