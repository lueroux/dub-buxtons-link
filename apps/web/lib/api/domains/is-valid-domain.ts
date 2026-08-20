import { SHORT_DOMAIN, validDomainRegex } from "@dub/utils";

const SHORT_DOMAIN_PATTERN = SHORT_DOMAIN.replace(/\./g, "\\.");

export const isValidDomain = (domain: string) => {
  return (
    validDomainRegex.test(domain) &&
    // make sure the domain isn't dub.co/dub.sh/d.to or the self-host short domain
    !new RegExp(
      `^(dub\\.co|.*\\.dub\\.co|dub\\.sh|.*\\.dub\\.sh|d\\.to|.*\\.d\\.to|${SHORT_DOMAIN_PATTERN}|.*\\.${SHORT_DOMAIN_PATTERN})$`,
      "i",
    ).test(domain)
  );
};

export const isValidDomainFormat = (domain: string) => {
  return validDomainRegex.test(domain);
};

export const isValidDomainFormatWithLocalhost = (domain: string) => {
  const d = domain.trim().toLowerCase();
  return validDomainRegex.test(d) || /^localhost(?::\d{1,5})?$/.test(d);
};
