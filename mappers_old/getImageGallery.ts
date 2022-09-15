export const getImageGallery = () => {
  const temp = {
    type: "SECTION",
    data: {
      props: {
        config: {
          topMargin: 8,
        },
      },
      widgets: [
        {
          type: "IMAGE_GALLERY",
          data: {
            hardCode: true,
            props: {},
          },
        },
      ],
    },
  };
  return temp;
};
