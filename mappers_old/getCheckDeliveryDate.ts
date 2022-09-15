export const getCheckDeliveryDate = () => {
  const temp = {
    type: "SECTION",
    data: {
      props: {},
      widgets: [
        {
          type: "CHECK_DELIVERY_PINCODE",
          data: {
            props: {
              title: "Check Delivery Date",
              subtitle: "Enter pincode to check the delivery date of your kit",
              placeholder: "Type here...",
              ctaButtonText: "Submit",
            },
          },
        },
      ],
    },
  };
  return temp;
};
