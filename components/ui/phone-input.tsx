"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  DEFAULT_PHONE_COUNTRY,
  PHONE_COUNTRIES,
  digitsOnly,
  getCountryByIso,
  type PhoneValue,
} from "@/lib/phone";

type PhoneInputProps = {
  id?: string;
  name?: string;
  value: PhoneValue;
  onChange: (value: PhoneValue) => void;
  onBlur?: () => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  selectClassName?: string;
  inputClassName?: string;
};

export function PhoneInput({
  id,
  name,
  value,
  onChange,
  onBlur,
  required,
  disabled,
  error,
  className,
  selectClassName,
  inputClassName,
}: PhoneInputProps) {
  const country = getCountryByIso(value.countryIso || DEFAULT_PHONE_COUNTRY.iso);
  const maxLen = Math.max(...country.lengths);

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-xl border bg-[#f8f5ee] transition-colors focus-within:bg-white focus-within:ring-2 focus-within:ring-[#a98345]",
        error ? "border-rose-500" : "border-[#a98345]/25",
        disabled && "opacity-60",
        className,
      )}
    >
      <label className="sr-only" htmlFor={id ? `${id}-country` : undefined}>
        Country code
      </label>
      <select
        id={id ? `${id}-country` : undefined}
        aria-label="Country code"
        disabled={disabled}
        value={country.iso}
        onChange={(e) =>
          onChange({
            countryIso: e.target.value,
            national: digitsOnly(value.national).slice(
              0,
              Math.max(...getCountryByIso(e.target.value).lengths),
            ),
          })
        }
        onBlur={onBlur}
        className={cn(
          "shrink-0 border-0 border-r border-[#a98345]/20 bg-transparent py-2.5 pl-2.5 pr-1 text-sm text-[#22201d] outline-none focus:ring-0",
          selectClassName,
        )}
      >
        {PHONE_COUNTRIES.map((c) => (
          <option key={c.iso} value={c.iso}>
            {c.flag} +{c.dial}
          </option>
        ))}
      </select>

      <span
        aria-hidden
        className="hidden items-center pl-2 text-sm font-medium text-[#8e6d3e] md:inline-flex"
      >
        +{country.dial}
      </span>

      <input
        id={id}
        name={name}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        required={required}
        disabled={disabled}
        value={value.national}
        maxLength={maxLen}
        placeholder={country.placeholder}
        onChange={(e) =>
          onChange({
            countryIso: country.iso,
            national: digitsOnly(e.target.value).slice(0, maxLen),
          })
        }
        onBlur={onBlur}
        className={cn(
          "min-w-0 flex-1 border-0 bg-transparent px-3 py-2.5 text-sm text-[#22201d] outline-none placeholder:text-[#746d63]/70 focus:ring-0",
          inputClassName,
        )}
      />
    </div>
  );
}

export const emptyPhoneValue = (): PhoneValue => ({
  countryIso: DEFAULT_PHONE_COUNTRY.iso,
  national: "",
});
