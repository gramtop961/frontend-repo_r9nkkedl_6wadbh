import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold shadow-sm">B</div>
          <span className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Bizcult</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full border border-slate-300/80 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
