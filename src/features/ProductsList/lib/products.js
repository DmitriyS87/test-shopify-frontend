export const transformProduct = ({ description, html, name, images, id }) => ({
  id,
  img: images ? images[0] : null,
  title: name,
  description,
  descriptionHtml: html,
});
