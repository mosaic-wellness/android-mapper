export const getFaqAccordion = () => ({
  type: "SECTION",
  data: {
    props: {},
    widgets: [
      {
        type: "FAQ_ACCORDIOUN",
        data: {
          props: {
            title: "We’ve got answers",
          },
        },
      },
    ],
  },
});
