import { sanitize } from "dompurify";

export const loggerFn = (fn) => {
  console.log(fn);
  return fn;
};

export const removeImageLinks = (html) => {
  try {
    const regex =
      /(?:&nbsp;|<span.*?>|<img.*?src="|>)(https?:\/\/.*?\.(?:png|jpg|jpeg|gif|bmp|svg|webp))(?:<\/span>|".*?>|)/gi;
    const result = html.replace(regex, "");
    return result;
  } catch (error) {
    //! TODO error logger
    return html;
  }
};

export const sanitizeHtml = (html) => {
  const sanitizedHtml = sanitize(html);
  return sanitizedHtml;
};
