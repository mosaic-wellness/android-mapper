// FIXME: this naming convention doesn't make any sense need to fix in future
export const getProductDescription = (oldJson: any) => {
  //   console.log("getProductDescription", oldJson?.purchase_prod_slide.subtitle);
  const temp = {
    type: "SECTION",
    data: {
      props: {
        config: {
          topMargin: 5,
        },
      },
      widgets: [
        {
          type: "PRODUCT_DESCRIPTION",
          data: {
            hardCode: false,
            content: "PDP_DESCRIPTION",
            props: {
              data: {
                unitsSold: "<BACKEND_FILL>", // this should be a type of number
                usersReviewed: "<BACKEND_FILL>",
                giftOffer: {
                  label: oldJson?.purchase_prod_slide?.subtitle ?? "",
                  leadingImage: "<BACKEND_FILL>", // TODO: GET this image
                },
              },
            },
          },
        },
      ],
    },
  };
  return temp;
};
