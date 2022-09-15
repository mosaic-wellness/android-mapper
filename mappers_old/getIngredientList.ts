export const getIngredientList = (oldJson: any) => {
  if (
    !oldJson?.ingredients_list ||
    !oldJson?.ingredients_list?.title ||
    !oldJson?.ingredients_list?.list
  ) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.ingredients_list?.title,
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
              label: oldJson?.ingredients_list.list[0].ingr,
            },
          },
        },
        {
          type: "ACTION_CARD", // TODO: confirm its existence
          data: {
            props: {
              config: {
                marginHorizontal: 5,
                marginTop: 10,
                marginBottomBanner: 5,
                paddingBottomButton: 0,
              },
              background: {
                color: "#4A90DA",
              },
              floatingImage: {
                identifier: "BANNER_IMAGE",
                image:
                  "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1659348724/Man%20Matters/Random/Arrow_Btn_Small.png", // needs to replace
                position: "center",
              },
              title:
                "Learn More about all the ingredients used in our products",
            },
          },
        },
      ],
    },
  };

  return temp;
};
