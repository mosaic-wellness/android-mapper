export const getWhatWeWontData = (oldJson: any) => {
  if (!oldJson?.things_to_note || !oldJson?.things_to_note?.things?.length) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.things_to_note?.title ?? "What it won't do",
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
  for (const i of oldJson?.things_to_note?.things || []) {
    if (!i) return;
    data.push({
      background: {
        color: "#E1EFF8",
      },
      topImage: {
        image: i.icon,
        size: "MEDIUM",
      },
      title: {
        text: i.title,
        fontSize: "MEDIUM",
        color: "#26598F",
      },
      description: {
        text: i.desc,
        color: "#0F1E3D",
      },
    });
  }
  temp.data.widgets[0].data.props.data = data;
  return temp;
};
