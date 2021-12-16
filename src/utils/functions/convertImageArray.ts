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
interface ICurricurums {
  step1: string;
  step2: string;
  step3: string;
}
export const convertCurricurums = ({ step1, step2, step3 }: ICurricurums) => {
  const curricurums = [
    {
      step: 1,
      content: step1,
    },
    {
      step: 2,
      content: step2,
    },
    {
      step: 3,
      content: step3,
    },
  ];

  return curricurums;
};
