"use client";

import { Phone, MessageCircle } from "lucide-react";
import { pushGTMEvent } from "@/lib/gtm";
import { BUSINESS } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center gap-3 px-4 pb-5 pt-2 pointer-events-none">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-[#9c0908] px-7 py-3.5 text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-transform active:scale-95"
        onClick={() => pushGTMEvent("click_call")}
      >
        <Phone className="h-5 w-5" fill="white" />
        <span className="text-[15px] font-semibold">Call Now 24h</span>
      </a>
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-transform active:scale-95"
        onClick={() => pushGTMEvent("click_whatsapp")}
      >
        <MessageCircle className="h-5 w-5" fill="white" />
        <span className="text-[15px] font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
