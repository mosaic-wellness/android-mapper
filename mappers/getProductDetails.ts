export const getProductDetails = (oldJson: any) => {
  if (
    !oldJson?.kit_pdp_contents ||
    !oldJson?.kit_pdp_contents?.content?.length
  ) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.kit_pdp_contents.title,
        config: {
          title: "SMALL",
          titleBottomMargin: 2,
        },
      },
      widgets: [
        {
          type: "PRODUCT_DETAILS",
          data: {
            props: {
              data: oldJson?.kit_pdp_contents.content,
            },
          },
        },
      ],
    },
  };
  return temp;
};
