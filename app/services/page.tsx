import type { Metadata } from "next";
import Link from "next/link";
import {
  Wind,
  Flame,
  Gauge,
  Droplets,
  Zap,
  AlertTriangle,
  Phone,
  CheckCircle,
  CalendarCheck,
  ShieldCheck,
  Thermometer,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HVAC & Water Heater Services | Lowell, MA",
  description:
    "Full-service HVAC installation, repair, and maintenance plus water heater services in Lowell, MA. Licensed & insured. Same-day availability.",
};

const services = [
  {
    id: "air-conditioning",
    badge: "Heat Pump · Mini-Split · Air Conditioning",
    category: "Installation & Maintenance",
    tagline: "Cool air. Lower bills. Reliable performance.",
    title: "AC – Air Conditioning",
    description:
      "High-efficiency air conditioning installation and maintenance designed for long-term comfort and savings. Total comfort solutions for homes & businesses.",
    icon: <Wind className="h-8 w-8" />,
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "AC Installation",
        description:
          "Professional installation of central AC, mini-splits, and heat pumps — sized correctly for your space and budget.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "AC Maintenance & Tune-Up",
        description:
          "Seasonal tune-ups and inspections to maximize efficiency, prevent breakdowns, and extend the life of your system.",
      },
    ],
  },
  {
    id: "furnace",
    badge: "Gas · Oil · Electric",
    category: "Installation & Maintenance",
    tagline: "Powerful heat. Safe operation. Winter-ready.",
    title: "Furnace",
    description:
      "Expert furnace installation and maintenance to keep your property warm, efficient, and protected all winter long.",
    icon: <Flame className="h-8 w-8" />,
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Professional Furnace Installation",
        description:
          "Expert furnace installation services designed to deliver powerful, consistent heat while ensuring safe and efficient operation during winter.",
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Furnace Maintenance & Safety Checks",
        description:
          "Comprehensive maintenance and safety inspections to protect your property, improve efficiency, and extend the lifespan of your furnace system.",
      },
    ],
  },
  {
    id: "boiler",
    badge: "Residential · Commercial",
    category: "Installation & Maintenance",
    tagline: "Heavy-duty boiler solutions built to perform.",
    title: "Boiler Systems",
    description:
      "High-performance boiler systems designed to deliver powerful, consistent heat for demanding residential and commercial environments.",
    icon: <Gauge className="h-8 w-8" />,
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Boiler Installation",
        description:
          "Complete boiler installation services ensuring safe operation, energy efficiency, and long-term reliability.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "Boiler Maintenance",
        description:
          "Professional maintenance and inspections to protect your system, prevent failures, and extend boiler lifespan.",
      },
    ],
  },
  {
    id: "water-heater",
    badge: "Tank · Tankless",
    category: "Installation & Repair",
    tagline: "Hot water, fast. Every time.",
    title: "Water Heater",
    description:
      "Tank and tankless water heater installation and repair with same-day service available. We work with all major brands.",
    icon: <Droplets className="h-8 w-8" />,
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Water Heater Installation",
        description:
          "Tank and tankless installs done right — efficient, code-compliant, and built to last.",
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: "Water Heater Repair",
        description:
          "Leaks, pilot issues, no hot water — diagnosed and fixed fast so your day isn't disrupted.",
      },
    ],
  },
  {
    id: "emergency",
    badge: "24 / 7 Availability",
    category: "Emergency Response",
    tagline: "No heat. No hot water. We're on the way.",
    title: "Emergency Service",
    description:
      "Urgent response when you have no heat or no hot water. We prioritize emergency calls and dispatch fast.",
    icon: <AlertTriangle className="h-8 w-8" />,
    subServices: [
      {
        icon: <Thermometer className="h-5 w-5" />,
        title: "Heating Emergencies",
        description:
          "Boiler failures, furnace outages, and heat pump issues handled urgently — especially on freezing nights.",
      },
      {
        icon: <Droplets className="h-5 w-5" />,
        title: "Water Heater Emergencies",
        description:
          "Burst tanks, major leaks, and total outages addressed with priority scheduling and fast repairs.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From new installations to emergency repairs — licensed, insured, and
            serving Lowell, MA and surrounding communities.
          </p>
        </div>

        {/* Service sections */}
        <div className="space-y-24">
          {services.map((service, i) => (
            <section key={service.id} id={service.id}>
              <div
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start ${
                  i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left / Info column */}
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.28 0.12 250) 0%, oklch(0.42 0.18 240) 100%)",
                      }}
                    >
                      {service.badge}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {service.category}
                    </span>
                  </div>

                  <div
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.28 0.12 250) 0%, oklch(0.42 0.18 240) 100%)",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p
                    className="mt-2 text-base font-semibold"
                    style={{ color: "oklch(0.55 0.22 250)" }}
                  >
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/#appointment">Schedule Now</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`tel:${BUSINESS.phoneRaw}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {BUSINESS.phone}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right / Sub-service cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.subServices.map((sub) => (
                    <div
                      key={sub.title}
                      className="rounded-2xl border border-blue-400/20 p-6"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.28 0.12 250) 0%, oklch(0.38 0.16 240) 100%)",
                        boxShadow: "0 4px 16px oklch(0.28 0.12 250 / 0.30)",
                      }}
                    >
                      <span
                        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"
                        style={{ color: "#9c0908" }}
                      >
                        {sub.icon}
                      </span>
                      <h3
                        className="mb-2 text-base font-bold"
                        style={{ color: "#9c0908" }}
                      >
                        {sub.title}
                      </h3>
                      <p className="text-sm text-blue-100/80">
                        {sub.description}
                      </p>
                    </div>
                  ))}

                  {/* Schedule card */}
                  <div
                    className="rounded-2xl p-6 sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(156 9 8 / 0.15) 0%, rgb(156 9 8 / 0.08) 100%)",
                      border: "1px solid rgb(156 9 8 / 0.30)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <CalendarCheck
                        className="h-6 w-6 shrink-0"
                        style={{ color: "#9c0908" }}
                      />
                      <p className="text-sm font-medium">
                        Ready to book{" "}
                        <span className="font-semibold">{service.title}</span>{" "}
                        service? We respond within 1 hour.
                      </p>
                    </div>
                    <Button asChild size="sm" className="shrink-0">
                      <Link href="/#appointment">Schedule Now!</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Divider — skip after last item */}
              {i < services.length - 1 && (
                <hr className="mt-24 border-border/50" />
              )}
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-24 rounded-2xl p-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.13 250) 0%, oklch(0.40 0.18 245) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Get a free estimate for any of our services. We respond within 1
            business hour.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/#appointment">Get Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${BUSINESS.phoneRaw}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
