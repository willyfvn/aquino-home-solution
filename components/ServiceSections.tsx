import Link from "next/link";
import GalleryCarousel from "@/components/GalleryCarousel";
import {
  Wind,
  Flame,
  Gauge,
  Droplets,
  Zap,
  AlertTriangle,
  CheckCircle,
  ShieldCheck,
  Wrench,
  ArrowRightCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "air-conditioning",
    badge: "Heat Pump · Mini-Split · Air Conditioning",
    category: "Installation & Maintenance",
    tagline: "Total comfort solutions for homes & businesses",
    title: "AC – Air Conditioning",
    highlight: "Cool air. Lower bills. Reliable performance.",
    description:
      "High-efficiency air conditioning installation and maintenance designed for long-term comfort and savings.",
    icon: <Wind className="h-10 w-10" />,
    gallery: [
      { src: "/aquino-ac-01.jpeg", alt: "AC unit installation" },
      { src: "/aquino-ac-02.jpeg", alt: "Mini-split system" },
      { src: "/aquino-ac-03.jpeg", alt: "AC maintenance work" },
      { src: "/aquino-ac-04.jpeg", alt: "Heat pump outdoor unit" },
      { src: "/aquino-ac-05.jpeg", alt: "AC system setup" },
      { src: "/aquino-ac-06.jpeg", alt: "Completed AC install" },
    ],
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
    highlight: "Expert furnace installation and maintenance.",
    description:
      "Expert furnace installation and maintenance to keep your property warm, efficient, and protected all winter long.",
    icon: <Flame className="h-10 w-10" />,
    gallery: [
      { src: "/aquino-furnace-01.jpeg", alt: "Furnace installation" },
      { src: "/aquino-furnace-02.jpeg", alt: "Furnace system close-up" },
      { src: "/aquino-furnace-03.jpeg", alt: "Furnace maintenance work" },
      { src: "/aquino-furnace-04.jpeg", alt: "Completed furnace install" },
    ],
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
    highlight:
      "High-performance boiler systems for demanding environments.",
    description:
      "High-performance boiler systems designed to deliver powerful, consistent heat for demanding residential and commercial environments.",
    icon: <Gauge className="h-10 w-10" />,
    gallery: [
      { src: "/boiler-1-768x1024.webp", alt: "Boiler system installation" },
      { src: "/boiler-2-768x1024.webp", alt: "Boiler maintenance" },
      { src: "/aquino-plumbing-001.jpeg", alt: "Boiler plumbing work" },
    ],
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
    id: "plumbing",
    badge: "Residential · Commercial",
    category: "Installation & Repair",
    tagline: "Reliable pipes. Clean water. Zero leaks.",
    title: "Plumbing Installation",
    highlight: "Full-service plumbing for new builds and upgrades.",
    description:
      "Professional plumbing installation and repair for kitchens, bathrooms, laundry rooms, and more. Code-compliant work you can trust.",
    icon: <Droplets className="h-10 w-10" />,
    gallery: [
      { src: "/aquino-plumbing-01.jpeg", alt: "Plumbing installation work" },
      { src: "/aquino-plumbing-001.jpeg", alt: "Pipe fitting and connections" },
      { src: "/aquino-plumbing-03.jpeg", alt: "Bathroom plumbing setup" },
      { src: "/aquino-plumbing-04.jpeg", alt: "Plumbing fixture install" },
      { src: "/aquino-pumbling-img01-1229x1536.webp", alt: "Professional plumbing service" },
    ],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "New Plumbing Installation",
        description:
          "Complete pipe installation for new construction, renovations, and fixture upgrades — done to code every time.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "Plumbing Repairs",
        description:
          "Leaks, clogs, burst pipes, and fixture replacements diagnosed and resolved quickly to minimize disruption.",
      },
    ],
  },
  {
    id: "emergency",
    badge: "24 / 7 Availability",
    category: "Emergency Response",
    tagline: "No heat. No hot water. We're on the way.",
    title: "Emergency Service",
    highlight: "Urgent response for heating and hot water failures.",
    description:
      "Urgent response when you have no heat or no hot water. We prioritize emergency calls and dispatch fast.",
    icon: <AlertTriangle className="h-10 w-10" />,
    gallery: [
      { src: "/aquino-working.jpeg", alt: "Emergency HVAC repair" },
      { src: "/aquino-furnace-02.webp", alt: "Emergency furnace repair" },
      { src: "/aquino-plumbing-04.jpeg", alt: "Emergency plumbing work" },
      { src: "/Tankless-water-heater-2.webp", alt: "Emergency water heater service" },
    ],
    subServices: [
      {
        icon: <Flame className="h-5 w-5" />,
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

export default function ServiceSections() {
  return (
    <div>
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-10 md:py-14 ${i % 2 === 1 ? "bg-muted/40" : ""}`}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div
                className="mb-5 inline-flex items-center justify-center rounded-2xl text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.28 0.12 250) 0%, oklch(0.42 0.18 240) 100%)",
                  padding: "1.1rem",
                }}
              >
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {service.title}
              </h3>

              <div className="mt-4 flex flex-col items-center justify-center gap-2.5">
                <span
                  className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white"
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

              <div className="mt-8 w-full">
                <GalleryCarousel images={service.gallery} />
              </div>

              <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.title}
                    className="rounded-2xl border border-border/60 bg-white p-5 text-left shadow-sm"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {sub.icon}
                    </span>
                    <h4 className="mb-1.5 text-sm font-bold text-foreground">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="w-[400px] gap-3 rounded-full bg-[#9c0908] px-7 py-6 text-base font-extralight text-white shadow-lg hover:bg-[#7a0706]"
                >
                  <Link href={`?service=${service.id}#appointment`}>
                    <ArrowRightCircle className="!size-4" />
                    Schedule {service.title} Service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          </section>
        ))}
      </div>
  );
}
