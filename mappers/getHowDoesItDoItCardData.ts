export const getHowDoesItDoItCardData = (oldJson: any) => {
  if (!oldJson?.ingredients || !oldJson?.ingredients?.ingr_items) {
    return null;
  }
  let temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.ingredients?.title,
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
  for (const i of Object.keys(oldJson?.ingredients?.ingr_items)) {
    if (
      !oldJson?.ingredients?.ingr_items[i]?.icon_url ||
      !oldJson?.ingredients?.ingr_items[i]?.ingr_name ||
      !oldJson?.ingredients?.ingr_items[i]?.desc
    ) {
      return;
    }
    data.push({
      background: {
        color: "#26598F",
        overlayImage:
          "https://s3-alpha-sig.figma.com/img/a9c8/099d/05d9cdea5e17c9fad868aeb69e51a08a?Expires=1655078400&Signature=Es4yWP7wsAUyhv8A-JhP34Tmgp8IBqpGrc~bjwYD3NLwrfJERs0aJvNJefVF4uk3dvelxVucSiJ-bWrC9nwf1T4MWBMn0Cw9TnfRs8QDZlBJKsgrBgor5SFDpH0aRLiFIm60R~zF-5TB-aF7mz473hVjdtQ~H7YptsChg87Qr70LDhf4RT42Fpm1SUvtKmOnki9eD0ZW677sgS7t9AOOmLiwBFcpsLqMeEPktUiYikG9kWdGkBTBX7b~JZOqY35xlyfJaFytDsbFeoEqkSxKedOA9jAf7bAZL8uHyNC07ElIKWC4qbwmvbyprglgV6abNGtUgxbGXDtGmTM1Ao4FXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", // needs to changes this
      },
      topImage: {
        image: oldJson?.ingredients.ingr_items[i].icon_url,
        size: "MEDIUM",
      },
      title: {
        text: oldJson?.ingredients.ingr_items[i].ingr_name,
        fontSize: "LARGE",
        color: "#fff",
      },
      description: {
        text: oldJson?.ingredients.ingr_items[i].desc,
        color: "#fff",
      },
    });
  }
  temp.data.widgets[0].data.props.data = data;
  return temp;
};
