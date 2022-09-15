export const getWhoIsItForData = (oldJson: any) => {
  if (
    !oldJson?.who_is_it_for ||
    !oldJson?.who_is_it_for?.title ||
    !oldJson?.who_is_it_for?.content?.length
  ) {
    return null;
  }
  let temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.who_is_it_for.title,
      },
      widgets: [
        {
          type: "WHO_IS_IT_FOR",
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
  let count = 1;
  oldJson?.who_is_it_for.content.forEach((content: any) => {
    data.push({
      id: `${count}-WHO_IS_IT_FOR`,
      label: content?.text,
      image: content?.icon,
    });
    count++;
  });
  temp.data.widgets[0].data.props.data = data;
  return temp;
};
