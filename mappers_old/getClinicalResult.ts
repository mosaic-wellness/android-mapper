export const getClinicalResult = (oldJson: any) => {
  // customer_stories
  if (!oldJson?.customer_stories) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: "Clinical Results",
      },
      widgets: [
        {
          type: "SLIDER",
          data: {
            props: {
              Slide: "TESTIMONIAL",
              noOfSlidesInView: 1,
              data: [],
            },
          },
        },
      ],
    },
  };
  const data = [] as any;
  for (const i of oldJson?.customer_stories || []) {
    data.push({
      image: i,
    });
  }
  temp.data.widgets[0].data.props.data = data;
  return temp;
};
