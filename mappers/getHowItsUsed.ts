export const getHowItsUsed = (oldJson: any) => {
  if (!oldJson?.how_its_used || !oldJson?.how_its_used?.ins?.length) {
    return null;
  }

  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: "How It's Used",
        // title: oldJson?.how_its_used?.title || "How It's Used",
      },
      widgets: [
        {
          type: "HOW_ITS_USED",
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
  let index = 1;
  for (const i of oldJson?.how_its_used.ins) {
    if (!i) return;
    data.push({
      id: index.toString(),
      image: i?.icon,
      text: i?.desc,
    });
    index++;
  }

  temp.data.widgets[0].data.props.data = data;
  return temp;
};
