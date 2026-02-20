import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Shield,
  Users,
  Clock,
  Star,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTAForm from "@/components/CTAForm";
import GoogleReviews from "@/components/GoogleReviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import VanImage from "@/components/VanImage";
import ServiceSections from "@/components/ServiceSections";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero — contained card with drop shadow */}
      <section className="pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <Image
              src="/aquino-logo.webp"
              alt="Aquino Home Solutions"
              width={180}
              height={180}
              className="rounded-md"
            />
          </div>

          <div
            className="relative overflow-hidden rounded-2xl px-8 py-16 shadow-2xl md:px-14 md:py-20"
          >
            {/* Background image */}
            <Image
              src="/aquino-plumbing-001.jpeg"
              alt=""
              fill
              className="object-cover"
              priority
            />

            {/* Dark gradient overlay using brand blue #0c3795 */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #050e2a 0%, #0c3795ee 60%, #0c3795dd 100%)",
              }}
            />

            <div className="relative max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm text-white/90">
                <Star className="h-3.5 w-3.5 fill-white text-white" />
                Serving Massachusetts Since 2015
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                HVAC & Water Heater
                <br />
                Experts
              </h1>

              <p className="mt-5 text-lg text-blue-100/80 max-w-lg">
                Fast, reliable, and affordable service for your home comfort needs.
                Licensed & insured. Same-day availability.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-base text-white border-0"
                  style={{ backgroundColor: "#980e0b" }}
                >
                  <Link href="#appointment" className="hover:opacity-90">Request Appointment</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a href={`tel:${BUSINESS.phoneRaw}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {BUSINESS.phone}
                  </a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { icon: <Shield className="h-4 w-4" />, text: "Licensed & Insured" },
                  { icon: <Users className="h-4 w-4" />, text: "500+ Happy Customers" },
                  { icon: <Clock className="h-4 w-4" />, text: "Same-Day Service" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-blue-100/90">
                    <span className="text-white">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Appointment */}
      <section id="appointment" className="overflow-x-hidden pb-16 md:pb-24">
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

      <ServiceSections />

      <WhyChooseUs />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Service areas */}
      <section className="border-t py-12 md:py-16">
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
