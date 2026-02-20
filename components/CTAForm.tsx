"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadFormSchema, LeadFormValues } from "@/lib/validation";
import { SERVICES } from "@/lib/constants";
import { pushGTMEvent } from "@/lib/gtm";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function CTAForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string>("");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && SERVICES.some((s) => s.id === serviceParam)) {
      setValue("service", serviceParam, { shouldValidate: true });
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: LeadFormValues) => {
    setStatus("submitting");
    setServerError("");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("service", data.service);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        pushGTMEvent("submit_quote_form");
        reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-10 text-center shadow-sm">
        <CheckCircle className="mb-4 h-14 w-14 text-green-500" />
        <h3 className="text-xl font-semibold mb-2">Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          We&apos;ll get back to you within 1 business hour. For urgent needs, call us directly.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border bg-card p-6 shadow-sm space-y-4"
      noValidate
    >
      {/* Name */}
      <div className="space-y-1">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="John Smith"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(508) 555-1234"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div className="space-y-1">
        <Label htmlFor="service">Service Needed *</Label>
        <Select
          onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
          value={watch("service")}
        >
          <SelectTrigger id="service" aria-invalid={!!errors.service}>
            <SelectValue placeholder="Select a service…" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && serverError && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Submit"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We respond within 1 business hour · No spam, ever
      </p>
    </form>
  );
}
