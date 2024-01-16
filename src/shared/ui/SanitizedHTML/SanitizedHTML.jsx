import { sanitizeHtml } from "../../lib";

export const SanitizedHTML = ({ html }) => {
  const sanitizedDescriptionHtml = sanitizeHtml(html);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedDescriptionHtml }} />;
};
