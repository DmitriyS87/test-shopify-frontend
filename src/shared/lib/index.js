import { sanitize } from "dompurify";

export const loggerFn = (fn) => {
  console.log(fn);
  return fn;
};

export const removeImageLinks = (html) => {
  try {
    const regex =
      /<img\s+[^>]*src="[^"]*"[^>]*>|https?:\/\/\S+\.(jpg|jpeg|png|gif)\b/gi;
    return html.replace(regex, "");
  } catch (error) {
    return html;
  }
};

export const sanitizeHtml = (html) => sanitize(html);

export function parsePathname(pathname) {
  const regex = /\/([^/]+)(?:\/([^/]+)(?:\/(\d+))?)?/;
  const match = pathname.match(regex);
  if (match) {
    const [, ...other] = match;
    return other.filter((item) => !!item);
  }

  return [];
}
