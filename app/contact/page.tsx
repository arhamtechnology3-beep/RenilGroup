"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PhoneInput, emptyPhoneValue } from "@/components/ui/phone-input";
import {
  isContactFormValid,
  validateContactField,
  type ContactFieldErrors,
} from "@/lib/form-validation";
import { type PhoneValue } from "@/lib/phone";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-[#a98345]/25 bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345]";
const fieldErrorClass =
  "w-full rounded-xl border border-rose-500 bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-400";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-600">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {message}
    </p>
  );
}

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [phone, setPhone] = useState<PhoneValue>(emptyPhoneValue);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFieldErrors, boolean>>
  >({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    {
      id: "general",
      title: "General Enquiries",
      description: "Corporate, media, business and group ecosystem inquiries.",
    },
    {
      id: "investment",
      title: "Investment Opportunities",
      description:
        "Present your business or investment proposal to Renil Ventures.",
    },
    {
      id: "project",
      title: "Project Enquiries",
      description:
        "Real estate development, construction, and property partnerships.",
    },
  ];

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

  const updateField = (
    key: "name" | "email" | "subject" | "message",
    value: string,
  ) => {
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

  return (
    <div className="pt-24 min-h-screen bg-[#f8f5ee]">
      <section className="py-20 lg:py-28 border-b border-[#a98345]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#a98345]" />
              <span className="section-eyebrow">Corporate Inquiries</span>
            </div>
            <h1 className="heading-1 text-[#22201d] mb-6">
              Let’s build <br />
              <span className="italic text-[#8e6d3e]">together.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#746d63] leading-relaxed">
              Whether you have a business opportunity, a development project, a
              partnership proposal or an inquiry about Renil Groups — we look
              forward to connecting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#a98345] font-bold block mb-2">
                  Inquiry Routing
                </span>
                <h2 className="heading-2 text-[#22201d] mb-4">
                  Select Your Inquiry Type
                </h2>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                        selectedCategory === cat.id
                          ? "border-[#a98345] bg-[#fffdf9] shadow-md ring-1 ring-[#a98345]"
                          : "border-[#a98345]/20 bg-[#f8f5ee] hover:bg-white"
                      }`}
                    >
                      <h3 className="font-serif text-base text-[#22201d] font-medium">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#746d63] mt-1">
                        {cat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#a98345]/20 bg-[#fffdf9] p-6 space-y-4">
                <h3 className="font-serif text-lg text-[#22201d]">
                  Official Group Contacts
                </h3>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#746d63]">
                  <Mail className="h-4 w-4 text-[#a98345] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201d] block">Email:</strong>
                    <span>{siteConfig.contact.email}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#746d63]">
                  <Phone className="h-4 w-4 text-[#a98345] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201d] block">Telephone:</strong>
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#746d63]">
                  <MapPin className="h-4 w-4 text-[#a98345] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#22201d] block">Address:</strong>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#a98345]/15 text-[11px] text-[#746d63] italic">
                  * Note: Official verified registered corporate address and
                  direct lines will be updated upon final company registration
                  filings.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-3xl border border-[#a98345]/30 bg-[#fffdf9] p-8 sm:p-12 text-center shadow-xl">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#a98345]/15 text-[#8e6d3e]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="heading-3 text-[#22201d] mb-2">
                    Message Sent
                  </h3>
                  <p className="mx-auto mb-6 max-w-md text-sm text-[#746d63]">
                    Thank you, {formData.name}. Your inquiry regarding{" "}
                    <strong className="capitalize text-[#22201d]">
                      {selectedCategory}
                    </strong>{" "}
                    has been routed to the appropriate corporate desk.
                  </p>
                  <ShimmerButton
                    onClick={() => {
                      setSubmitted(false);
                      setPhone(emptyPhoneValue());
                      setErrors({});
                      setTouched({});
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    variant="secondary"
                    size="md"
                  >
                    Send Another Message
                  </ShimmerButton>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6 rounded-3xl border border-[#a98345]/25 bg-[#fffdf9] p-6 shadow-xl sm:p-10"
                >
                  <div className="border-b border-[#a98345]/15 pb-4">
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-[#a98345]">
                      Direct Message
                    </span>
                    <h3 className="heading-3 text-[#22201d]">
                      Transmit An Inquiry
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#22201d]">
                        Your Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="John Doe"
                        className={cn(errors.name ? fieldErrorClass : fieldClass)}
                        aria-invalid={Boolean(errors.name)}
                      />
                      <FieldError message={errors.name} />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#22201d]">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="name@company.com"
                        className={cn(
                          errors.email ? fieldErrorClass : fieldClass,
                        )}
                        aria-invalid={Boolean(errors.email)}
                      />
                      <FieldError message={errors.email} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#22201d]">
                        Mobile Number <span className="text-rose-600">*</span>
                      </label>
                      <PhoneInput
                        id="contact-page-phone"
                        value={phone}
                        error={Boolean(errors.phone)}
                        onChange={(next) => {
                          setPhone(next);
                          if (touched.phone) {
                            runFieldValidation("phone", formData, next);
                          }
                        }}
                        onBlur={() => handleBlur("phone")}
                        inputClassName="py-3"
                        selectClassName="py-3"
                      />
                      <FieldError message={errors.phone} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#22201d]">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => updateField("subject", e.target.value)}
                        placeholder="e.g. Strategic Opportunity Inquiry"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#22201d]">
                      Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      placeholder="Please share details of your inquiry or message..."
                      className={cn(
                        errors.message ? fieldErrorClass : fieldClass,
                      )}
                      aria-invalid={Boolean(errors.message)}
                    />
                    <FieldError message={errors.message} />
                  </div>

                  <div className="pt-2">
                    <ShimmerButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow
                      className="w-full sm:w-auto"
                      disabled={!canSubmit}
                    >
                      Send Message
                    </ShimmerButton>
                    {!canSubmit ? (
                      <p className="mt-2 text-xs text-[#746d63]">
                        Enter a valid name, email, mobile, and message to send.
                      </p>
                    ) : null}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
