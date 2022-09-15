export const getWhatDoesProductDo = (oldJson: any) => {
  if (
    !oldJson?.visible_effects2 ||
    !oldJson?.visible_effects2?.title ||
    !oldJson?.visible_effects2?.effects?.length
  ) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.visible_effects2?.title,
        config: {
          title: "LARGE",
        },
      },
      widgets: [
        {
          type: "SLIDER",
          data: {
            props: {
              hardCode: true,
              Slide: "WHAT_DOES_PRODUCT_DO",
              noOfSlidesInView: 1,
              data: [],
            },
          },
        },
      ],
    },
  };

  let data = [] as any;
  for (const i of oldJson?.visible_effects2.effects) {
    data.push({
      image: i?.icon,
      text: i?.contents[0].desc,
      title: i?.contents[0].name,
      duration: i?.effect_name,
    });
  }
  temp.data.widgets[0].data.props.data = data;
  return temp;
};
