export const getFrequentlyPurchased = (oldJson: any) => {
  if (!oldJson?.freq_bought) {
    return null;
  }

  const productIds = getProductsIds(oldJson?.freq_bought);
  if (!productIds.length) {
    return null;
  }

  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: "Frequently Purchased",
        ctaButtonText: "View All",
        from: "FREQUENTLY_PURCHASED",
        config: {
          title: "SMALL",
          titleBottomMargin: 7,
        },
      },
      widgets: [
        {
          type: "GRID",
          data: {
            hardCode: false,
            content: "PRODUCTS",
            props: {
              data: productIds,
              GridItem: "PRODUCT_CARD",
              config: {
                noOfColumns: 2,
              },
            },
          },
        },
      ],
    },
  };
  return temp;
};

const getProductsIds = (items: any) => {
  if (!items || !items.length) {
    return [];
  }

  const productIds = items.map((item: any) => {
    if (item?.prod_id) return item.prod_id;
  });

  return productIds;
};
