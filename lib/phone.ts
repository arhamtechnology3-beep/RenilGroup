export type PhoneCountry = {
  iso: string;
  name: string;
  dial: string;
  /** Flag emoji */
  flag: string;
  /** Expected national mobile digit length(s) */
  lengths: number[];
  /** Optional national mobile prefix pattern (digits only) */
  pattern?: RegExp;
  placeholder: string;
};

/** Common dial codes — India first (default for Renil Groups). */
export const PHONE_COUNTRIES: PhoneCountry[] = [
  {
    iso: "IN",
    name: "India",
    dial: "91",
    flag: "🇮🇳",
    lengths: [10],
    pattern: /^[6-9]\d{9}$/,
    placeholder: "98765 43210",
  },
  {
    iso: "AE",
    name: "UAE",
    dial: "971",
    flag: "🇦🇪",
    lengths: [9],
    pattern: /^5\d{8}$/,
    placeholder: "50 123 4567",
  },
  {
    iso: "US",
    name: "United States",
    dial: "1",
    flag: "🇺🇸",
    lengths: [10],
    placeholder: "201 555 0123",
  },
  {
    iso: "GB",
    name: "United Kingdom",
    dial: "44",
    flag: "🇬🇧",
    lengths: [10],
    pattern: /^7\d{9}$/,
    placeholder: "7400 123456",
  },
  {
    iso: "SG",
    name: "Singapore",
    dial: "65",
    flag: "🇸🇬",
    lengths: [8],
    pattern: /^[89]\d{7}$/,
    placeholder: "8123 4567",
  },
  {
    iso: "SA",
    name: "Saudi Arabia",
    dial: "966",
    flag: "🇸🇦",
    lengths: [9],
    pattern: /^5\d{8}$/,
    placeholder: "50 123 4567",
  },
  {
    iso: "QA",
    name: "Qatar",
    dial: "974",
    flag: "🇶🇦",
    lengths: [8],
    placeholder: "3312 3456",
  },
  {
    iso: "AU",
    name: "Australia",
    dial: "61",
    flag: "🇦🇺",
    lengths: [9],
    pattern: /^4\d{8}$/,
    placeholder: "412 345 678",
  },
  {
    iso: "CA",
    name: "Canada",
    dial: "1",
    flag: "🇨🇦",
    lengths: [10],
    placeholder: "416 555 0123",
  },
  {
    iso: "DE",
    name: "Germany",
    dial: "49",
    flag: "🇩🇪",
    lengths: [10, 11],
    placeholder: "1512 3456789",
  },
];

export const DEFAULT_PHONE_COUNTRY =
  PHONE_COUNTRIES.find((c) => c.iso === "IN") ?? PHONE_COUNTRIES[0];

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function getCountryByIso(iso: string): PhoneCountry {
  return PHONE_COUNTRIES.find((c) => c.iso === iso) ?? DEFAULT_PHONE_COUNTRY;
}

export type PhoneValue = {
  countryIso: string;
  national: string;
};

export function formatE164(value: PhoneValue): string {
  const country = getCountryByIso(value.countryIso);
  const national = digitsOnly(value.national);
  if (!national) return "";
  return `+${country.dial}${national}`;
}

export function validateMobile(
  value: PhoneValue,
  options?: { required?: boolean },
): string | null {
  const required = options?.required ?? false;
  const country = getCountryByIso(value.countryIso);
  const national = digitsOnly(value.national);

  if (!national) {
    return required ? "Please enter a mobile number." : null;
  }

  if (!/^\d+$/.test(national)) {
    return "Mobile number must contain digits only.";
  }

  if (!country.lengths.includes(national.length)) {
    const expected = country.lengths.join(" or ");
    return `Enter a valid ${country.name} mobile number (${expected} digits).`;
  }

  if (country.pattern && !country.pattern.test(national)) {
    if (country.iso === "IN") {
      return "Indian mobiles must start with 6, 7, 8, or 9.";
    }
    return `Enter a valid ${country.name} mobile number.`;
  }

  return null;
}
