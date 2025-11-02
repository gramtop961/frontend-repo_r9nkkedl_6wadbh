import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          The All-In-One Platform Your Agency Needs to Scale.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-700">
          Get the tools, support, and resources you need to succeed. Bizcult combines everything you need into one platform.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
            Start Your 14-Day Free Trial
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-600">No credit card required.</p>
      </div>

      <div className="relative border-y border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-sm md:text-base">
              Trusted by <span className="font-semibold text-slate-900">1,000+ Agencies and Marketers</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-80">
              <div className="h-6 w-24 bg-slate-200 rounded" />
              <div className="h-6 w-24 bg-slate-200 rounded" />
              <div className="h-6 w-24 bg-slate-200 rounded" />
              <div className="h-6 w-24 bg-slate-200 rounded" />
              <div className="h-6 w-24 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
