import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$49/mo',
    blurb: 'Everything to get moving',
    features: [
      'Core CRM & Pipeline',
      'Funnels & Website Builder',
      'Email Campaigns',
      'Basic Automations',
      'Chat & SMS (usage‑based)'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$149/mo',
    blurb: 'Best for growing teams',
    features: [
      'Everything in Starter',
      'Advanced Automations',
      'Calendars & Booking',
      'Reputation Management',
      'Priority Support'
    ],
    highlighted: true
  },
  {
    name: 'Agency',
    price: '$299/mo',
    blurb: 'Scale with confidence',
    features: [
      'All Professional features',
      'Unlimited Sub‑Accounts',
      'White‑label Branding',
      'Team Roles & Permissions',
      'Dedicated Success Manager'
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when youre ready.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.highlighted ? 'border-transparent bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px]' : 'border-slate-200 bg-white'} shadow-sm transition`}
            >
              <div className={`h-full rounded-2xl ${tier.highlighted ? 'bg-white p-6' : 'p-6'}`}>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{tier.blurb}</p>
                  </div>
                  {tier.highlighted && (
                    <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">Popular</span>
                  )}
                </div>
                <p className="mt-4 text-3xl font-extrabold text-slate-900">{tier.price}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 font-semibold transition ${tier.highlighted ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110' : 'border border-slate-300 text-slate-700 hover:bg-white/60'}`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
