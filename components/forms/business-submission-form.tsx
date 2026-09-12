"use client";

import React, { useState, useRef } from "react";
import { z } from "zod";
import confetti from "canvas-confetti";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PhoneInput, emptyPhoneValue } from "@/components/ui/phone-input";
import {
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  Lock,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import {
  formatE164,
  validateBusinessPhone,
  validateEmail,
  validateZodField,
} from "@/lib/form-validation";
import { type PhoneValue } from "@/lib/phone";

const submissionSchema = z.object({
  founderName: z.string().min(2, "Founder / Contact name is required"),
  businessEmail: z.string().superRefine((val, ctx) => {
    const err = validateEmail(val);
    if (err) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: err });
    }
  }),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  businessName: z.string().min(2, "Business / Project name is required"),
  industry: z.string().min(2, "Please select or enter your industry"),
  stage: z.string().min(1, "Please select your business stage"),
  whatAreYouBuilding: z
    .string()
    .min(20, "Please provide at least 20 characters describing what you are building"),
  requirement: z
    .string()
    .min(10, "Please specify your investment or partnership requirement"),
  traction: z.string().optional(),
  whyRenil: z
    .string()
    .min(20, "Please explain why Renil Groups should consider this opportunity"),
  termsAccepted: z.literal(true, {
    message: "You must accept the submission disclaimer",
  }),
});

type FormValues = z.infer<typeof submissionSchema>;

export function BusinessSubmissionForm() {
  const [formData, setFormData] = useState<Partial<FormValues>>({
    stage: "Early Revenue",
    industry: "Real Estate & PropTech",
  });
  const [phone, setPhone] = useState<PhoneValue>(emptyPhoneValue);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setFieldError = (name: string, message?: string | null) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  const validateField = (name: string, value: unknown, phoneValue = phone) => {
    if (name === "phone") {
      const err = validateBusinessPhone(phoneValue);
      setFieldError("phone", err);
      return err;
    }
    if (name === "businessEmail") {
      const err = validateEmail(String(value ?? ""));
      setFieldError("businessEmail", err);
      return err;
    }
    if (name === "termsAccepted") {
      const err =
        value === true
          ? null
          : "You must accept the submission disclaimer";
      setFieldError("termsAccepted", err);
      return err;
    }
    const err = validateZodField(submissionSchema, name, value);
    setFieldError(name, err);
    return err;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    let nextValue: unknown = value;
    if (type === "checkbox") {
      nextValue = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: nextValue as boolean }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Email: always validate live while typing
    if (name === "businessEmail") {
      setTouched((prev) => ({ ...prev, businessEmail: true }));
      validateField("businessEmail", nextValue);
      return;
    }

    if (touched[name] || errors[name]) {
      validateField(name, nextValue);
    }
  };

  const handleBlur = (name: string, value: unknown) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "File size exceeds 25MB limit",
        }));
        return;
      }
      setSelectedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1) + " MB",
      });
      setErrors((prev) => {
        const next = { ...prev };
        delete next.file;
        return next;
      });
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requiredFields = [
      "founderName",
      "businessEmail",
      "businessName",
      "industry",
      "stage",
      "whatAreYouBuilding",
      "requirement",
      "whyRenil",
      "termsAccepted",
    ] as const;

    setTouched((prev) => {
      const next: Record<string, boolean> = { ...prev, phone: true };
      requiredFields.forEach((f) => {
        next[f] = true;
      });
      return next;
    });

    const mobileErr = validateBusinessPhone(phone);
    const fieldErrors: Record<string, string> = {};
    if (mobileErr) fieldErrors.phone = mobileErr;

    requiredFields.forEach((name) => {
      const value = formData[name];
      if (name === "businessEmail") {
        const err = validateEmail(String(value ?? ""));
        if (err) fieldErrors.businessEmail = err;
        return;
      }
      if (name === "termsAccepted") {
        if (value !== true) {
          fieldErrors.termsAccepted =
            "You must accept the submission disclaimer";
        }
        return;
      }
      const err = validateZodField(submissionSchema, name, value);
      if (err) fieldErrors[name] = err;
    });

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      phone: formatE164(phone),
    };

    const result = submissionSchema.safeParse(payload);

    if (!result.success) {
      const zodErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          zodErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(zodErrors);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a98345", "#b99a68", "#d8c7ad"],
      });
    } catch {
      // confetti fallback
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-[#a98345]/30 bg-[#fffdf9] p-8 sm:p-14 text-center shadow-xl">
        <div className="h-16 w-16 rounded-full bg-[#a98345]/15 text-[#8e6d3e] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <span className="section-eyebrow block mb-2">
          Submission Received
        </span>
        <h2 className="heading-2 text-[#22201d] mb-4">
          Thank you for presenting your opportunity.
        </h2>
        <p className="text-sm sm:text-base text-[#746d63] max-w-lg mx-auto leading-relaxed mb-8">
          Your proposal for{" "}
          <strong className="text-[#22201d]">
            {formData.businessName || "your venture"}
          </strong>{" "}
          has been safely registered with our investment review committee. If the
          opportunity aligns with Renil Groups&apos; strategic roadmap, our team
          will reach out to initiate exploratory discussions.
        </p>

        <div className="rounded-2xl border border-[#a98345]/20 bg-[#f8f5ee] p-4 text-xs text-[#746d63] max-w-md mx-auto mb-8 text-left">
          <p className="font-medium text-[#22201d] mb-1">Notice:</p>
          <p>{siteConfig.disclaimers.submission}</p>
        </div>

        <ShimmerButton
          onClick={() => {
            setIsSubmitted(false);
            setPhone(emptyPhoneValue());
            setErrors({});
            setTouched({});
            setFormData({
              stage: "Early Revenue",
              industry: "Real Estate & PropTech",
            });
            setSelectedFile(null);
          }}
          variant="secondary"
          size="md"
        >
          Submit Another Proposal
        </ShimmerButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-[#a98345]/25 bg-[#fffdf9] p-6 sm:p-12 shadow-xl space-y-8"
    >
      <div className="border-b border-[#a98345]/15 pb-6">
        <h3 className="heading-3 text-[#22201d] mb-1">
          Opportunity Intake Questionnaire
        </h3>
        <p className="text-xs sm:text-sm text-[#746d63]">
          Please complete all mandatory parameters. All submissions are held in
          strict commercial confidence.
        </p>
      </div>

      {/* Row 1: Founder & Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Founder / Contact Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            name="founderName"
            value={formData.founderName || ""}
            onChange={handleInputChange}
            onBlur={(e) => handleBlur("founderName", e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className={`w-full rounded-xl border bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345] ${
              errors.founderName ? "border-rose-500" : "border-[#a98345]/25"
            }`}
          />
          {errors.founderName && (
            <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.founderName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Business Email <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            inputMode="email"
            autoComplete="email"
            value={formData.businessEmail || ""}
            onChange={handleInputChange}
            onBlur={(e) => handleBlur("businessEmail", e.target.value)}
            placeholder="founder@company.com"
            className={`w-full rounded-xl border bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345] ${
              errors.businessEmail ? "border-rose-500" : "border-[#a98345]/25"
            }`}
            aria-invalid={Boolean(errors.businessEmail)}
          />
          {errors.businessEmail && (
            <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.businessEmail}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Mobile / WhatsApp <span className="text-rose-600">*</span>
          </label>
          <PhoneInput
            id="business-phone"
            name="phone"
            value={phone}
            required
            error={Boolean(errors.phone)}
            onChange={(next) => {
              setPhone(next);
              if (touched.phone || errors.phone) {
                validateField("phone", next.national, next);
              }
            }}
            onBlur={() => handleBlur("phone", phone.national)}
            inputClassName="py-3"
            selectClassName="py-3"
          />
          {errors.phone && (
            <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Business Identity & Stage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Business / Project Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName || ""}
            onChange={handleInputChange}
            onBlur={(e) => handleBlur("businessName", e.target.value)}
            placeholder="e.g. Apex Living Ventures"
            className={`w-full rounded-xl border bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345] ${
              errors.businessName ? "border-rose-500" : "border-[#a98345]/25"
            }`}
          />
          {errors.businessName && (
            <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.businessName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Industry / Category <span className="text-rose-600">*</span>
          </label>
          <select
            name="industry"
            value={formData.industry || ""}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-[#a98345]/25 bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345]"
          >
            <option value="Real Estate & PropTech">
              Real Estate, Development & Construction
            </option>
            <option value="Hospitality & F&B">
              Hospitality, Food & Experiences
            </option>
            <option value="Logistics & Supply Chain">
              Logistics & Distribution
            </option>
            <option value="Enterprise Services & Tech">
              Enterprise & Commercial Services
            </option>
            <option value="Consumer & Retail">Consumer Brand</option>
            <option value="Other">Other Category</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Business Stage <span className="text-rose-600">*</span>
          </label>
          <select
            name="stage"
            value={formData.stage || ""}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-[#a98345]/25 bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345]"
          >
            <option value="Concept / Idea">Concept / Idea</option>
            <option value="MVP / Pre-Revenue">MVP / Pilot / Pre-Revenue</option>
            <option value="Early Revenue">Early Commercial Revenue</option>
            <option value="Growth / Scaling">Established / Scaling</option>
          </select>
        </div>
      </div>

      {/* Field: What Are You Building? */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
          What Are You Building? <span className="text-rose-600">*</span>
        </label>
        <textarea
          name="whatAreYouBuilding"
          rows={3}
          value={formData.whatAreYouBuilding || ""}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur("whatAreYouBuilding", e.target.value)}
          placeholder="Briefly describe the product, commercial service, problem you solve, and target customer."
          className={`w-full rounded-xl border bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345] ${
            errors.whatAreYouBuilding ? "border-rose-500" : "border-[#a98345]/25"
          }`}
        />
        {errors.whatAreYouBuilding && (
          <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.whatAreYouBuilding}
          </p>
        )}
      </div>

      {/* Row 3: Requirement & Traction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Investment / Partnership Requirement{" "}
            <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            name="requirement"
            value={formData.requirement || ""}
            onChange={handleInputChange}
            onBlur={(e) => handleBlur("requirement", e.target.value)}
            placeholder="e.g. ₹2 Cr growth capital or strategic distribution alliance"
            className={`w-full rounded-xl border bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345] ${
              errors.requirement ? "border-rose-500" : "border-[#a98345]/25"
            }`}
          />
          {errors.requirement && (
            <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.requirement}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
            Current Traction or Revenue (Optional)
          </label>
          <input
            type="text"
            name="traction"
            value={formData.traction || ""}
            onChange={handleInputChange}
            placeholder="e.g. ₹15L monthly run-rate, 30 enterprise clients"
            className="w-full rounded-xl border border-[#a98345]/25 bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345]"
          />
        </div>
      </div>

      {/* Field: Why Should Renil Consider This Opportunity? */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
          Why Should Renil Groups Consider This Opportunity?{" "}
          <span className="text-rose-600">*</span>
        </label>
        <textarea
          name="whyRenil"
          rows={3}
          value={formData.whyRenil || ""}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur("whyRenil", e.target.value)}
          placeholder="How does this align with Renil’s ecosystem? What strategic synergy or unfair advantage do you offer?"
          className={`w-full rounded-xl border bg-[#f8f5ee] px-4 py-3 text-sm text-[#22201d] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#a98345] ${
            errors.whyRenil ? "border-rose-500" : "border-[#a98345]/25"
          }`}
        />
        {errors.whyRenil && (
          <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.whyRenil}
          </p>
        )}
      </div>

      {/* Pitch Deck Upload Zone */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#22201d] mb-2">
          Upload Pitch Deck or Executive Summary (PDF / PPTX, max 25MB)
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative cursor-pointer rounded-2xl border-2 border-dashed border-[#a98345]/40 bg-[#f8f5ee]/60 p-6 text-center transition-colors hover:border-[#a98345] hover:bg-[#a98345]/5"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.pptx,.ppt,.key"
            onChange={handleFileChange}
            className="hidden"
          />

          {!selectedFile ? (
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-[#a98345]/15 text-[#8e6d3e] flex items-center justify-center">
                <UploadCloud className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-[#22201d]">
                Click or drag & drop your presentation deck
              </p>
              <p className="text-xs text-[#746d63]">
                Supports PDF, PPTX up to 25MB
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3 bg-white rounded-xl p-3 border border-[#a98345]/30">
              <div className="flex min-w-0 items-center gap-3">
                <FileText className="h-6 w-6 shrink-0 text-[#a98345]" />
                <div className="min-w-0 text-left">
                  <p className="truncate text-xs font-semibold text-[#22201d]">
                    {selectedFile.name}
                  </p>
                  <p className="text-[10px] text-[#746d63]">{selectedFile.size}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="shrink-0 rounded-full p-1 text-[#746d63] hover:bg-rose-50 hover:text-rose-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
        {errors.file && (
          <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.file}
          </p>
        )}
      </div>

      {/* Consent & Disclaimer Checkbox */}
      <div className="rounded-2xl border border-[#a98345]/20 bg-[#f8f5ee] p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={!!formData.termsAccepted}
            onChange={handleInputChange}
            onBlur={(e) =>
              handleBlur("termsAccepted", (e.target as HTMLInputElement).checked)
            }
            className="mt-1 h-4 w-4 rounded border-[#a98345] text-[#a98345] focus:ring-[#a98345]"
          />
          <span className="text-xs text-[#746d63] leading-relaxed">
            I understand and agree that submitting this proposal does not guarantee
            investment or strategic partnership from Renil Groups. All submissions
            are evaluated internally on their commercial and strategic merits.
          </span>
        </label>
        {errors.termsAccepted && (
          <p className="text-[11px] text-rose-600 mt-2 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.termsAccepted}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <div className="flex items-center gap-2 text-xs text-[#746d63]">
          <Lock className="h-3.5 w-3.5 text-[#a98345]" />
          <span>Confidential Submission • Internal Assessment Only</span>
        </div>

        <ShimmerButton
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          showArrow
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Submitting Opportunity..." : "Submit Your Business"}
        </ShimmerButton>
      </div>
    </form>
  );
}
