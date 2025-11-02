import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          New: Agency templates now included
        </div>
        <h1 className="mt-6 mx-auto max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">Scale your agency</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">without the tool sprawl</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-700">
          Bizcult unifies CRM, funnels, email, SMS, scheduling, and automations—so you can focus on growth, not glue.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:brightness-110 transition"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/70 px-6 py-3 text-slate-700 font-semibold backdrop-blur hover:bg-white transition"
          >
            Explore Features
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-600">No credit card required.</p>
      </div>

      <div className="relative border-y border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-sm md:text-base">
              Trusted by <span className="font-semibold text-slate-900">1,000+ agencies and marketers</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-80">
              <div className="h-6 w-24 rounded bg-slate-200" />
              <div className="h-6 w-24 rounded bg-slate-200" />
              <div className="h-6 w-24 rounded bg-slate-200" />
              <div className="h-6 w-24 rounded bg-slate-200" />
              <div className="h-6 w-24 rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
