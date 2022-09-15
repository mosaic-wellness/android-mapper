export const getProduct = (oldJson: any) => {
  const temp = {
    id: "<BACKEND_FILL>",
    urlKey: "<BACKEND_FILL>",
    sku: "<BACKEND_FILL>",
    title: oldJson?.prod_name,
    image: oldJson?.prod_img,
    pricing: {
      actualPrice: "<BACKEND_FILL>",
      discountedPrice: "<BACKEND_FILL>",
      discountText: "<BACKEND_FILL>",
    },
    category: CATEGORIES[oldJson?.prod_cat] || oldJson?.prod_cat,
    rating: {
      rating: oldJson?.rating || 4.5,
    },
    concerns: [
      { label: "For", text: oldJson?.card_for_with?.For },
      { label: "With", text: oldJson?.card_for_with?.With },
    ],
  };
  return temp;
};

const CATEGORIES:any = {
  hm: "hair",
  skm: "skin",
  wm: "weight",
  bm: "beard",
  hym: "hygiene",
  nm: "nutrition",
  pm: "performance",
  sm: "sleep",
};

export const transformCategory = (category: string): string => {
  return CATEGORIES[category] || category;
};
