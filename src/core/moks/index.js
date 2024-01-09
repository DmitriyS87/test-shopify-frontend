export const imitateServerResponse = (data, timeout = 3000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Response(data));
    }, timeout);
  });
};

export const productsApiResponse = () => {
  return imitateServerResponse(formatProducts(products));
};

const formatProducts = (responseProducts) => {
  function getUrlId(url) {
    const regex = /(\d+)(?!.*\d)/;
    const match = url.match(regex);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  return JSON.stringify(
    responseProducts.data.products.edges.map(({ node }) => {
      return {
        id: node.id,
        title: node.title,
        description: node.description,
        descriptionHtml: node.descriptionHtml,
        featuredImage: node.featuredImage,
        images: node.images.nodes,
        urlId: getUrlId(node.id),
      };
    }),
  );
};

const products = [
  {
    id: 1,
    html: '<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>\n<p><strong data-mce-fragment="1">_image</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>\n<p><strong data-mce-fragment="1">View - Back</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment="1"><strong data-mce-fragment="1">View - Front</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>\n<p><strong data-mce-fragment="1">Text - RMBG123</strong><span data-mce-fragment="1"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment="1"><span data-mce-fragment="1">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment="1"><span data-mce-fragment="1">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>',
    name: "Demo T-Shirt | Automatic recoloring | Out of stock | test product",
    status: "ACTIVE",
    type: "cpb_product",
    description:
      "SKULatching Switches - Choose a switch Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)Latching Switches - Choose a color Green (8)CABLES - _1_0_0 Choice 1CABLES - _1_1_1 NOMomentary Switches - Choose a switch Aluminum Illuminated Halo Ring SPDT 12V Pushbutton SwitchMomentary Switches - Choose a Color Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illuminationATC FUSES - Choose a Fuse Assorted illumination glow fuses 12V ATC automotiveATC FUSES - Choose a Product 15A Blue ATC Glow FuseCustom Acrylic Option - Purple-Mirror-Acrylic-RBX-4CHbase_priceis_calculated trueconfigId -afmAdvpRxrB3hQOTJ8uNms _image https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png View - Back https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.pngView - Front https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png Text - RMBG123 Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.pngBeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpgimageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.pngproductUrl https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product",
    shop_id: "gid://shopify/Product/7853744816306",
    createdAt: "2024-01-08T23:24:35.096Z",
    updatedAt: "2024-01-09T18:04:00.991Z",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054",
      },
    ],
  },
  {
    id: 2,
    html: '<p>DEMO - X-Box Controller | Rendered Images for each color</p>\n<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>\n<p><strong data-mce-fragment="1">_image</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>\n<p><strong data-mce-fragment="1">View - Back</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment="1"><strong data-mce-fragment="1">View - Front</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>\n<p><strong data-mce-fragment="1">Text - RMBG123</strong><span data-mce-fragment="1"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment="1"><span data-mce-fragment="1">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment="1"><span data-mce-fragment="1">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>',
    name: "DEMO - X-Box Controller | Rendered Images for each color",
    status: "DRAFT",
    type: "cpb_product",
    description:
      "DEMO - X-Box Controller | Rendered Images for each color SKULatching Switches - Choose a switch Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)Latching Switches - Choose a color Green (8)CABLES - _1_0_0 Choice 1CABLES - _1_1_1 NOMomentary Switches - Choose a switch Aluminum Illuminated Halo Ring SPDT 12V Pushbutton SwitchMomentary Switches - Choose a Color Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illuminationATC FUSES - Choose a Fuse Assorted illumination glow fuses 12V ATC automotiveATC FUSES - Choose a Product 15A Blue ATC Glow FuseCustom Acrylic Option - Purple-Mirror-Acrylic-RBX-4CHbase_priceis_calculated trueconfigId -afmAdvpRxrB3hQOTJ8uNms _image https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png View - Back https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.pngView - Front https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png Text - RMBG123 Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.pngBeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpgimageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.pngproductUrl https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product",
    shop_id: "gid://shopify/Product/7853744849074",
    createdAt: "2024-01-08T23:24:35.103Z",
    updatedAt: "2024-01-09T18:04:00.999Z",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/customproductbuilder-11130041100-fAUnuygKRKLfEXSEoMYS18G.png?v=1699438054",
      },
    ],
  },
  {
    id: 3,
    html: '<p>Demo - All Customizations</p>\n<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>\n<p><strong data-mce-fragment="1">_image</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>\n<p><strong data-mce-fragment="1">View - Back</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment="1"><strong data-mce-fragment="1">View - Front</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>\n<p><strong data-mce-fragment="1">Text - RMBG123</strong><span data-mce-fragment="1"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment="1"><span data-mce-fragment="1">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment="1"><span data-mce-fragment="1">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>',
    name: "Demo - All Customizations",
    status: "DRAFT",
    type: "cpb_product",
    description:
      "Demo - All Customizations SKULatching Switches - Choose a switch Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)Latching Switches - Choose a color Green (8)CABLES - _1_0_0 Choice 1CABLES - _1_1_1 NOMomentary Switches - Choose a switch Aluminum Illuminated Halo Ring SPDT 12V Pushbutton SwitchMomentary Switches - Choose a Color Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illuminationATC FUSES - Choose a Fuse Assorted illumination glow fuses 12V ATC automotiveATC FUSES - Choose a Product 15A Blue ATC Glow FuseCustom Acrylic Option - Purple-Mirror-Acrylic-RBX-4CHbase_priceis_calculated trueconfigId -afmAdvpRxrB3hQOTJ8uNms _image https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png View - Back https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.pngView - Front https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png Text - RMBG123 Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.pngBeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpgimageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.pngproductUrl https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product",
    shop_id: "gid://shopify/Product/7853744881842",
    createdAt: "2024-01-08T23:24:35.105Z",
    updatedAt: "2024-01-09T18:04:01.003Z",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL_d4199767-663a-41d5-aa70-e2cdcc1bbc80.png?v=1699438054",
      },
    ],
  },
];
