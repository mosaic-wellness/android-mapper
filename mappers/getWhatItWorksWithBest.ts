export const getWhatItWorksWithBest = (oldJson: any) => {
  if (!oldJson?.lifestyle || !oldJson?.lifestyle?.ins?.length) {
    return null;
  }

  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.lifestyle.title,
      },
      widgets: [
        {
          type: "SLIDER",
          data: {
            props: {
              Slide: "HOW_DOES_IT_DO_IT_CARD",
              noOfSlidesInView: 1,
              data: [],
            },
          },
        },
      ],
    },
  };
  const data = [] as any;

  for (const i of oldJson?.lifestyle.ins) {
    data.push({
      background: {
        color: "#fff",
      },
      topImage: {
        image: i.icon,
        size: "LARGE",
      },
      title: {
        text: i.title,
        fontSize: "SMALL",
        color: "#26598F",
      },
      description: {
        text: i.desc,
        color: "#0F1E3D",
      },
    } as any);
  }
  temp.data.widgets[0].data.props.data = data;
  return temp;
};
