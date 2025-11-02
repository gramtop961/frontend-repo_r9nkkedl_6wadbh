import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$49/mo',
    features: [
      'Core CRM & Pipeline',
      'Funnel & Website Builder',
      'Email Campaigns',
      'Basic Automations',
      'Chat & SMS (usage-based)'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$149/mo',
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
    features: [
      'All Professional features',
      'Unlimited Sub-Accounts',
      'White-label Branding',
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Choose the Plan That's Right For You.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlighted ? 'border-blue-600' : 'border-slate-200'} bg-white p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                <span className={`text-xs font-semibold ${tier.highlighted ? 'text-blue-700' : 'text-slate-500'} uppercase tracking-wide`}>
                  {tier.highlighted ? 'Popular' : ''}
                </span>
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
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 font-semibold transition ${tier.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
