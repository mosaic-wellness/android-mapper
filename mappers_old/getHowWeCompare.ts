export const getHowWeCompare = (oldJson: any) => {
  if (!oldJson?.comparisions) {
    return null;
  }

  let usText = "Us";
  let otherText = "Others";
  let comparision = [] as any;

  if (oldJson?.comparisions?.powder) {
    usText = oldJson?.comparisions.powder?.title ?? usText;
    otherText = oldJson?.comparisions["other-powder"]?.title ?? otherText;
    comparision = getPowderComparision(
      oldJson?.comparisions.powder?.props,
      oldJson?.comparisions["other-powder"]?.props
    );
  } else {
    usText = oldJson?.comparisions?.innerware?.title ?? usText;
    otherText = oldJson?.comparisions?.sapien?.title ?? otherText;
    comparision = getInnerwareComparision(
      oldJson?.comparisions?.innerware?.props,
      oldJson?.comparisions?.sapien?.props
    );
  }

  if (!comparision || comparision.length === 0) {
    return null;
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: "How We Compare",
      },
      widgets: [
        {
          type: "HOW_WE_COMPARE",
          data: {
            hardCode: true,
            props: {
              advantageHeaderText: usText,
              disadvantageHeaderText: otherText,
              compareText: "VS",
              comparison: comparision,
            },
          },
        },
      ],
    },
  };

  return temp;
};

const getPowderComparision = (powder = [], otherPowder = []) => {
  if (!powder || !otherPowder) {
    return null;
  }

  const usLength = powder?.length;
  const othersLength = otherPowder?.length;
  const smallestLength = Math.min(usLength, othersLength);

  const comparision = [] as any;
  for (let i = 0; i < smallestLength; i++) {
    comparision.push({
      pros: powder[i],
      cons: otherPowder[i],
    });
  }
  return comparision;
};

const getInnerwareComparision = (innerware: any[] = [], sapien: any[] = []) => {
  if (!innerware || !sapien) {
    return null;
  }

  const usLength = innerware?.length;
  const othersLength = sapien?.length;
  const smallestLength = Math.min(usLength, othersLength);

  const comparision = [] as any;
  for (let i = 0; i < smallestLength; i++) {
    comparision.push({
      pros: innerware[i].desc ?? "",
      cons: sapien[i].desc,
    });
  }
  return comparision;
};
