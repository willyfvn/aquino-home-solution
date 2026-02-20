"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { pushGTMEvent } from "@/lib/gtm";
import { BUSINESS } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white shadow-lg md:hidden">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="flex flex-col items-center justify-center gap-1 py-3 text-primary hover:bg-slate-50 transition-colors"
        onClick={() => pushGTMEvent("click_call")}
      >
        <Phone className="h-5 w-5" />
        <span className="text-xs font-medium">Call</span>
      </a>

      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-1 bg-primary py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        <FileText className="h-5 w-5" />
        <span className="text-xs font-medium">Get Estimate</span>
      </Link>

      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 text-green-600 hover:bg-slate-50 transition-colors"
        onClick={() => pushGTMEvent("click_whatsapp")}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-xs font-medium">WhatsApp</span>
      </a>
    </div>
  );
}
