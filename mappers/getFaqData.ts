export const getFaqData = (oldJson: any) => {
  if (!oldJson?.faqs) {
    return null;
  }
  const temp = {
    faqs: [],
  };
  const faqs = [] as any;
  for (const i of oldJson?.faqs) {
    faqs.push({
      title: i.que,
      text: i.ans,
    });
  }
  temp.faqs = faqs;
  return temp;
};
