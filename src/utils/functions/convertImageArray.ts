import { ImageObject } from '../../types';

export const convertImageArray = (imageArray: string[]) => {
  const newArray: ImageObject[] = [];
  imageArray.map((image, index) => {
    newArray.push({
      sequence: index + 1,
      imageUrl: image,
    });
  });
  return newArray;
};
