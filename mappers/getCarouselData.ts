export const getCarouselData = (oldJson: any) => {
  if (!oldJson?.prod_imgs_pdp?.mob || !oldJson?.prod_imgs_pdp?.desk) {
    return null;
  }
  const temp = {
    images: [],
  };
  const images = [] as any;
  for (const i of oldJson?.prod_imgs_pdp.mob) {
    images.push(i);
  }
  for (const i of oldJson?.prod_imgs_pdp.desk) {
    images.push(i);
  }
  temp.images = images;
  return temp;
};
