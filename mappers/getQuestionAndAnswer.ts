export const getQuestionAndAnswer = () => {
  return {
    type: "SECTION",
    data: {
      props: {
        title: "Question & Answers",
        config: {
          topMargin: 5,
          titleBottomMargin: 2,
        },
      },
      widgets: [
        {
          type: "QNA_LISTING",
          data: {
            props: {
              loadMoreButtonText: "Load More",
              askAQuestionButtonText: "Ask a Question",
              queries: [],
            },
          },
        },
      ],
    },
  };
};
