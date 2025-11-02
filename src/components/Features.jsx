import React from 'react';
import { Users, Filter, Mail, MessageSquare, Calendar, Star, Globe, Settings } from 'lucide-react';

const features = [
  { icon: Users, title: 'CRM & Pipeline Management', desc: 'Manage your leads and deals.' },
  { icon: Filter, title: 'Funnel Builder', desc: 'Build high-converting funnels with our drag-and-drop editor.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Create and automate unlimited email campaigns.' },
  { icon: MessageSquare, title: 'SMS Marketing', desc: 'Connect with customers directly via text.' },
  { icon: Calendar, title: 'Booking & Calendars', desc: 'Automate appointment scheduling.' },
  { icon: Star, title: 'Reputation Management', desc: 'Generate and manage reviews easily.' },
  { icon: Globe, title: 'Website Builder', desc: 'Create full websites and landing pages.' },
  { icon: Settings, title: 'Workflow Automations', desc: 'Connect all the tools together.' },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Finally, The Only Platform You'll Ever Need.
          </h2>
          <p className="mt-4 text-slate-600">
            Stop paying for 10+ different tools. Bizcult replaces everything.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-md bg-blue-50 text-blue-700 grid place-items-center">
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
