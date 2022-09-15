import { replaceBr } from "./replaceBr";

export const getDoctorConsultation = (oldJson: any) => {
  if (!oldJson?.swipe_btn) {
    return null;
  }
  const title = replaceBr(oldJson?.swipe_btn?.title);
  const temp = {
    type: "SECTION",
    data: {
      props: {
        title: oldJson?.swipe_btn?.label,
        config: {
          title: "SMALL",
        },
      },
      widgets: [
        {
          type: "DOCTOR_CONSULTATION",
          data: {
            props: {
              data: {
                title,
                text: oldJson?.swipe_btn?.subtitle,
                ctaBtnText: oldJson?.swipe_btn?.swipe_text,
                image: oldJson?.swipe_btn?.swipe_doc_img,
              },
            },
          },
        },
      ],
    },
  };

  return temp;
};
