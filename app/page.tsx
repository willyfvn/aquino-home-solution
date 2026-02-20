import Link from "next/link";
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
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-200/20 shadow-[0_25px_80px_-30px_rgba(30,64,175,0.7)]">
            {/* Background video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/aquino-herovideo.mp4" type="video/mp4" />
            </video>

            {/* Color overlays */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.45),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.4),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-950/85 via-blue-950/80 to-red-900/70" />

            <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20 md:py-24">
              <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-md sm:p-10">
                <p className="inline-flex items-center rounded-full border border-blue-200/40 bg-blue-300/15 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                  Licensed & Insured Local Experts
                </p>

                <h1 className="mt-5 animate-fade-in text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Reliable{" "}
                  <span className="bg-linear-to-r from-blue-300 via-sky-200 to-red-300 bg-clip-text text-transparent">
                    HVAC & Plumbing
                  </span>
                  <br />
                  for Every Season
                </h1>

                <p className="animate-fade-in [animation-delay:250ms] mx-auto mt-6 max-w-2xl text-base text-slate-100/90 sm:text-lg md:text-xl">
                  Fast repairs, clean installations, and honest service for homes
                  across Lowell and nearby communities.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-linear-to-r from-blue-500 to-red-500 text-white shadow-lg shadow-blue-950/35 transition hover:from-blue-400 hover:to-red-400 sm:w-auto"
                  >
                    <Link href="#appointment">Book Free Estimate</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-white/60 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                  >
                    <Link href={`tel:+${BUSINESS.phoneRaw}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call {BUSINESS.phone}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="relative border-t border-blue-100/20 bg-slate-950/45 backdrop-blur-sm">
              <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-blue-100/20 py-6 text-center">
                {[
                  { target: 10, suffix: "+", label: "Years Experience" },
                  { target: 500, suffix: "+", label: "Homes Served" },
                  { target: 100, suffix: "%", label: "Commitment" },
                ].map(({ target, suffix, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-blue-100 sm:text-3xl">
                      <AnimatedCounter target={target} suffix={suffix} />
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-200/80 sm:text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Appointment */}
      <section
        id="appointment"
        className="overflow-x-hidden bg-linear-to-b from-red-50 via-white to-blue-50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: van image + text */}
            <div className="space-y-6">
              <VanImage />
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Request an Appointment
                </h2>
                <p className="mt-3 text-slate-600">
                  We respond within 1 hour during business hours — no obligation, always free.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <CTAForm />
          </div>
        </div>
      </section>

      <ServiceSections />

      <WhyChooseUs />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Service areas */}
      <section className="border-t border-blue-100 bg-linear-to-b from-blue-50/60 to-red-50/70 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Areas We Serve
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Based in Lowell, MA, we serve surrounding communities with fast
              response times and reliable scheduling.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-blue-200/70 bg-white/70 p-4 shadow-[0_20px_55px_-30px_rgba(30,64,175,0.45)] backdrop-blur-sm md:grid-cols-[0.9fr_1.1fr] md:p-6">
            <div className="flex flex-col justify-center rounded-2xl bg-linear-to-b from-blue-50 to-red-50 p-5">
              <p className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase">
                Service Radius
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                Serving communities across Massachusetts
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Need to confirm your town? Call us and we will verify
                availability right away.
              </p>
              <Button asChild className="mt-5 w-fit bg-linear-to-r from-blue-500 to-red-500 text-white hover:from-blue-400 hover:to-red-400">
                <Link href={`tel:+${BUSINESS.phoneRaw}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {BUSINESS.phone}
                </Link>
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-blue-200/80">
              <iframe
                title="Aquino Home Solutions map showing Massachusetts"
                src="https://www.google.com/maps?q=Massachusetts&z=7&output=embed"
                className="h-[320px] w-full md:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
