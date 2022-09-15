export const getSafeAndEffective = (oldJson: any) => {
  if (!oldJson?.icons) {
    return null;
  }

  let temp = {
    type: "SECTION",
    data: {
      props: {
        title: "Safe and Effective",
      },
      widgets: [
        {
          type: "SAFE_AND_EFFECTIVE",
          data: {
            props: {
              data: [],
            },
          },
        },
      ],
    },
  };

  const data = [] as any;
  for (const i of oldJson?.icons) {
    data.push({
      id: i.icon + i.title,
      label: i.title,
      image: i.icon,
    });
  }

  temp.data.widgets[0].data.props.data = data;
  return temp;
};
