/**
 * @deprecated
 *
 */
export const getRatingsAndReview = () => {
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: "Ratings & Reviews",
        // config: {
        //   title: "SMALL",
        // },
      },
      widgets: [
        {
          type: "REVIEW_LISTING",
          data: {
            props: {
              loadMoreButtonText: "Load More",
            },
          },
        },
      ],
    },
  };
  return temp;
};
