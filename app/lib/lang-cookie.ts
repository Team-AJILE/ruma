export type Lang = "en" | "bm";

export const LANG_COOKIE = "ruma_legal_lang";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function readLangCookie(request: Request): Lang {
  const header = request.headers.get("Cookie");
  if (!header) return "en";
  for (const part of header.split(";")) {
    const trimmed = part.trim();
    if (trimmed.startsWith(`${LANG_COOKIE}=`)) {
      const value = trimmed.slice(LANG_COOKIE.length + 1);
      return value === "bm" ? "bm" : "en";
    }
  }
  return "en";
}

export function langCookieAttributes(): string {
  return `Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
}
