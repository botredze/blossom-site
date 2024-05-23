export const imgParse = (photo) => {
  try {
    const parsedPhoto = JSON.parse(photo);
    return typeof parsedPhoto === "object" ? parsedPhoto : null;
  } catch (error) {
    return null;
  }
};
