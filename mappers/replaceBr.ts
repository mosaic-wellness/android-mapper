export const replaceBr = (text: string) => {
  return text.replace(/(<br\/>)|(<br>)/gi, "\n");
};
