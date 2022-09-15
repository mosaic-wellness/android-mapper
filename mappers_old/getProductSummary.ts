export const getProductSummary = (oldJson: any) => {
  if (!oldJson?.prod_desc) {
    return null;
  }
  const label = oldJson?.prod_desc;
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: "Product Summary",
        config: {
          title: "SMALL",
        },
      },
      widgets: [
        {
          type: "TEXT_COMPONENT",
          data: {
            hardCode: true,
            props: {
              label: label,
            },
          },
        },
      ],
    },
  };
  return temp;
};
