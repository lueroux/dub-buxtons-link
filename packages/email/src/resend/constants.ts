const DEFAULT_FROM = process.env.EMAIL_FROM || "Dub.co <system@dub.co>";

export const VARIANT_TO_FROM_MAP = {
  primary: DEFAULT_FROM,
  notifications: process.env.EMAIL_FROM_NOTIFICATIONS || DEFAULT_FROM,
  marketing: process.env.EMAIL_FROM_MARKETING || DEFAULT_FROM,
};
