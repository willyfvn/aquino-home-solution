import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTAForm from "@/components/CTAForm";
import GoogleReviews from "@/components/GoogleReviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import VanImage from "@/components/VanImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import ServiceSections from "@/components/ServiceSections";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="relative overflow-hidden">
            {/* Background image */}
            <Image
              src="/aquino-working.jpeg"
              alt="Aquino Home Solutions technician working on an HVAC system"
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Contrast overlays */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(125deg, rgba(5,10,24,0.88) 0%, rgba(10,28,70,0.7) 42%, rgba(130,15,20,0.38) 72%, rgba(5,10,24,0.82) 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(56,96,180,0.16),rgba(4,8,20,0.68))]" />

            <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 sm:py-28 md:py-36">
              <h1 className="animate-fade-in mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Expert <span className="text-[#e23635]">HVAC & Plumbing</span>
                <br />
                You Can Trust
              </h1>

              <p className="animate-fade-in [animation-delay:300ms] mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
                From emergency repairs to full installations. Quality guaranteed.
              </p>
            </div>

            {/* Stats bar */}
            <div className="relative bg-black/30 backdrop-blur-sm">
              <div className="mx-auto grid max-w-4xl grid-cols-3 py-6 text-center">
                {[
                  { target: 10, suffix: "+", label: "Years Experience" },
                  { target: 500, suffix: "+", label: "Happy Customers" },
                  { target: 100, suffix: "%", label: "Satisfaction" },
                ].map(({ target, suffix, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-white sm:text-3xl">
                      <AnimatedCounter target={target} suffix={suffix} />
                    </div>
                    <div className="mt-1 text-xs font-medium text-white/70 sm:text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Request Appointment */}
      <section
        id="appointment"
        className="overflow-x-hidden bg-[linear-gradient(180deg,rgba(238,244,255,0.8)_0%,rgba(255,255,255,1)_58%,rgba(255,240,242,0.72)_100%)] py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: van image + text */}
            <div className="space-y-6">
            <VanImage />
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Request an Appointment
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We respond within 1 hour during business hours — no obligation, always free.
                </p>
              </div>

              {/* Van image */}
            
               

            
            </div>

            {/* Right: form */}
            <CTAForm />
          </div>
        </div>
      </section>

      <div className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(242,247,255,0.82)_100%)]">
        <ServiceSections />
      </div>

      <WhyChooseUs />

      {/* Google Reviews */}
      <div className="bg-[linear-gradient(180deg,rgba(248,251,255,0.9)_0%,rgba(255,246,248,0.78)_100%)]">
        <GoogleReviews />
      </div>

      {/* Service areas */}
      <section className="border-t bg-[linear-gradient(180deg,rgba(240,246,255,0.88)_0%,rgba(255,255,255,1)_65%,rgba(255,240,244,0.76)_100%)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Areas We Serve
            </h2>
          </div>
          <div className="mx-auto max-w-md overflow-hidden rounded-xl border shadow-sm">
            <Image
              src="/service-area-map.webp"
              alt="Map showing Aquino Home Solutions service area — Lowell MA and surrounding communities within ~30 miles"
              width={928}
              height={928}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
