export const getClinicalProof = (oldJson: any) => {
  if (!oldJson?.lab_experts_certificate) {
    return null;
  }

  const content = getClinicalProofs(oldJson?.lab_experts_certificate?.content);

  if (!content || content.length === 0) {
    return null;
  }

  if (oldJson?.lab_experts_certificate?.safe_certificate_img) {
    content.push({
      id: "certificate",
      title: "Certified",
      subtitle: "made safe",
      targetImage: oldJson?.lab_experts_certificate?.safe_certificate_img,
      image:
        "https://res.cloudinary.com/mosaic-wellness/image/upload/v1660134522/Man%20Matters%20App/Miscellaneous/Frame_2087.png", //needs to replace this
    });
  }
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.lab_experts_certificate?.title,
        subtext: oldJson?.lab_experts_certificate?.desc,
        config: {
          title: "SMALL",
        },
      },
      widgets: [
        {
          type: "CLINICAL_PROOF_CARD_LISTING",
          data: {
            props: {
              clinicalProofs: content,
            },
          },
        },
      ],
    },
  };
  return temp;
};

const getClinicalProofs = (content:any) => {
  if (!content) {
    return null;
  }

  const clinicalProofs = [] as any;
  content.forEach((item:any) => {
    if (item?.link) {
      clinicalProofs.push({
        id: item.title,
        title: item.title,
        subtitle: item.pre_title,
        targetUrl: item.link,
        image: item.icon,
      });
    } else {
      clinicalProofs.push({
        id: item.title,
        title: item.title,
        subtitle: item.pre_title,
        targetImage: item.img,
        image: item.icon,
      });
    }
  });

  return clinicalProofs;
};
