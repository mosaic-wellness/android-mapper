export const getProductSwitchWidget = (oldJson: any) => {
  if (
    !oldJson?.multiple_switches ||
    !oldJson?.multiple_switches?.items?.length
  ) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.multiple_switches?.title,
        config: {
          title: "SMALL",
        },
      },
      widgets: [
        {
          type: "SLIDER",
          data: {
            hardCode: false,
            content: "PRODUCTS",
            props: {
              Slide: "PRODUCT_SWITCH",
              noOfSlidesInView: 2,
              data: getProductSwitchData(oldJson),
            },
          },
        },
      ],
    },
  };

  return temp;
};

export const getProductSwitchData = (oldJson?: any) => {
  const temp: number[] = [];
  for (const i of oldJson?.multiple_switches.items) {
    temp.push(+i.p_id);
  }
  return temp;
};
