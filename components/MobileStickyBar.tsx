"use client";

import { Phone, MessageCircle } from "lucide-react";
import { pushGTMEvent } from "@/lib/gtm";
import { BUSINESS } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 px-4 pb-5 pt-2">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/45 bg-white/70 p-2 shadow-[0_18px_48px_-26px_rgba(15,23,42,0.65)] backdrop-blur-xl">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="pointer-events-auto flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-red-600 to-blue-600 px-4 py-3 text-white shadow-[0_12px_28px_-14px_rgba(190,24,93,0.75)] transition-transform active:scale-95"
        onClick={() => pushGTMEvent("click_call")}
        aria-label="Call Aquino Home Solutions now"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <Phone className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold sm:text-[15px]">Call Now</span>
      </a>
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-emerald-500 to-green-600 px-4 py-3 text-white shadow-[0_12px_28px_-14px_rgba(21,128,61,0.8)] transition-transform active:scale-95"
        onClick={() => pushGTMEvent("click_whatsapp")}
        aria-label="Message Aquino Home Solutions on WhatsApp"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold sm:text-[15px]">WhatsApp</span>
      </a>
      </div>
    </div>
  );
}
