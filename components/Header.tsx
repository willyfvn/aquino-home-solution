"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pushGTMEvent } from "@/lib/gtm";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/65 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/aquino-logo.webp"
            alt="Aquino Home Solutions"
            width={256}
            height={256}
            className="rounded-md"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            onClick={() => pushGTMEvent("click_call")}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-900 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/40 bg-white/80 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100/80 hover:text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="mt-2 flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white"
              onClick={() => pushGTMEvent("click_call")}
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
