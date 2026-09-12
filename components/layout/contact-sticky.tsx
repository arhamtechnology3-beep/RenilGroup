"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  X,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PhoneInput, emptyPhoneValue } from "@/components/ui/phone-input";
import { siteConfig } from "@/content/site";
import {
  isContactFormValid,
  validateContactField,
  type ContactFieldErrors,
} from "@/lib/form-validation";
import { type PhoneValue } from "@/lib/phone";
import { useFloaterGate } from "@/hooks/use-floater-gate";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-[#a98345]/25 bg-[#f8f5ee] px-3.5 py-2.5 text-sm text-[#22201d] placeholder:text-[#746d63]/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345]";

const inputErrorClass =
  "w-full rounded-xl border border-rose-500 bg-[#f8f5ee] px-3.5 py-2.5 text-sm text-[#22201d] placeholder:text-[#746d63]/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-400";

/**
 * Left-edge vertical sticky Contact Us strip (may overlap content).
 * Opens a centered popup contact form. Visible after homepage vision section.
 */
export function ContactSticky() {
  const gateActive = useFloaterGate();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFieldErrors, boolean>>
  >({});
  const [phone, setPhone] = useState<PhoneValue>(emptyPhoneValue);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const panelId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const setFieldError = (field: keyof ContactFieldErrors, value?: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (value) next[field] = value;
      else delete next[field];
      return next;
    });
  };

  const runFieldValidation = (
    field: keyof ContactFieldErrors,
    data = formData,
    phoneValue = phone,
  ) => {
    const err = validateContactField(field, data, phoneValue);
    setFieldError(field, err ?? undefined);
    return err;
  };

  const updateField = (key: "name" | "email" | "subject" | "message", value: string) => {
    const next = { ...formData, [key]: value };
    setFormData(next);

    // Email: validate live as soon as the user types
    if (key === "email") {
      setTouched((prev) => ({ ...prev, email: true }));
      runFieldValidation("email", next, phone);
      return;
    }

    if (key !== "subject" && touched[key as keyof ContactFieldErrors]) {
      runFieldValidation(key as keyof ContactFieldErrors, next, phone);
    }
  };

  const handleBlur = (field: keyof ContactFieldErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    runFieldValidation(field);
  };

  const canSubmit = isContactFormValid(formData, phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const nameErr = runFieldValidation("name");
    const emailErr = runFieldValidation("email");
    const phoneErr = runFieldValidation("phone");
    const messageErr = runFieldValidation("message");
    if (nameErr || emailErr || phoneErr || messageErr) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setTouched({});
    setPhone(emptyPhoneValue());
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const FieldError = ({ message }: { message?: string }) =>
    message ? (
      <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-600">
        <AlertCircle className="h-3 w-3 shrink-0" />
        {message}
      </p>
    ) : null;

  return (
    <>
      {/* Vertical sticky Contact Us strip — left edge */}
      <div
        className={cn(
          "pointer-events-none fixed top-1/2 z-[70] -translate-y-1/2 transition-all duration-500",
          gateActive
            ? "translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-full opacity-0",
        )}
        style={{
          left: "env(safe-area-inset-left, 0px)",
        }}
        aria-hidden={!gateActive}
      >
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
          tabIndex={gateActive ? 0 : -1}
          className={cn(
            "pointer-events-auto flex h-[8.5rem] w-11 flex-col items-center justify-center gap-2 rounded-r-xl border border-l-0 border-[#a98345]/45 bg-[#201e1a] text-[#f8f5ee] shadow-[8px_0_28px_-12px_rgba(32,30,26,0.55)] transition-colors hover:bg-[#2a2722] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a98345] sm:h-[10.5rem] sm:w-12",
            open && "bg-[#2a2722]",
          )}
          aria-label="Open contact form"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#a98345]/50 bg-[#a98345]/15 text-[#b99a68]">
            <Mail className="h-3.5 w-3.5" />
          </span>
          <span
            className="select-none text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b99a68]"
            style={{ writingMode: "vertical-rl" }}
          >
            Contact Us
          </span>
        </button>
      </div>

      {/* Popup contact form modal */}
      <div
        className={cn(
          "fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close contact form backdrop"
          onClick={close}
          className={cn(
            "absolute inset-0 bg-[#201e1a]/55 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          id={panelId}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          className={cn(
            "relative z-10 flex max-h-[min(92dvh,100%)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-[#a98345]/30 bg-[#fffdf9] shadow-[0_28px_80px_-24px_rgba(32,30,26,0.65)] transition-all duration-300 sm:rounded-3xl",
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-95 opacity-0 sm:translate-y-4",
          )}
        >
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#a98345]/15 bg-[#201e1a] px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b99a68]">
                Corporate inquiry
              </p>
              <h2 className="mt-1 font-serif text-xl text-[#fffdf9] sm:text-2xl">
                Contact Renil Groups
              </h2>
              <p className="mt-1 break-words text-xs text-[#d8c7ad]/80">
                <span className="block sm:inline">{siteConfig.contact.email}</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">{siteConfig.contact.phone}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              className="shrink-0 rounded-full p-2 text-[#d8c7ad] transition-colors hover:bg-white/10 hover:text-[#fffdf9]"
              aria-label="Close contact form"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#a98345]/15 text-[#8e6d3e]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#22201d]">
                  Message sent
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-[#746d63]">
                  Thank you, {formData.name}. Your inquiry has been received and
                  will be routed to the appropriate desk.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <ShimmerButton
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={resetForm}
                  >
                    Send another
                  </ShimmerButton>
                  <button
                    type="button"
                    onClick={close}
                    className="text-sm font-medium text-[#8e6d3e] underline-offset-4 hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#22201d]">
                      Your name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="Full name"
                      className={errors.name ? inputErrorClass : inputClass}
                      aria-invalid={Boolean(errors.name)}
                    />
                    <FieldError message={errors.name} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#22201d]">
                      Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="name@company.com"
                      className={errors.email ? inputErrorClass : inputClass}
                      aria-invalid={Boolean(errors.email)}
                    />
                    <FieldError message={errors.email} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#22201d]">
                      Mobile <span className="text-rose-600">*</span>
                    </label>
                    <PhoneInput
                      id="sticky-contact-phone"
                      value={phone}
                      error={Boolean(errors.phone)}
                      onChange={(next) => {
                        setPhone(next);
                        if (touched.phone) {
                          runFieldValidation("phone", formData, next);
                        }
                      }}
                      onBlur={() => handleBlur("phone")}
                    />
                    <FieldError message={errors.phone} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#22201d]">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                      placeholder="Partnership inquiry"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#22201d]">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Share a brief overview of your inquiry..."
                    className={errors.message ? inputErrorClass : inputClass}
                    aria-invalid={Boolean(errors.message)}
                  />
                  <FieldError message={errors.message} />
                </div>

                <div className="pt-1">
                  <ShimmerButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    showArrow
                    className="w-full"
                    disabled={!canSubmit}
                  >
                    Send message
                  </ShimmerButton>
                  {!canSubmit ? (
                    <p className="mt-2 text-center text-[11px] text-[#746d63]">
                      Complete required fields to send.
                    </p>
                  ) : null}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
