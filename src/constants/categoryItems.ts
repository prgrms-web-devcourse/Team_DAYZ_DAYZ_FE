import { GiPaintedPottery, GiLipstick } from 'react-icons/gi';
import { BiDish, BiPaint } from 'react-icons/bi';
import { BsFlower1 } from 'react-icons/bs';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { IoHammerOutline } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';

export const categoryIcons = [
  {
    categoryId: 1,
    genre: 'pottery',
    Icon: GiPaintedPottery,
    contents: '도자기',
  },
  {
    categoryId: 2,
    genre: 'cooking',
    Icon: BiDish,
    contents: '요리',
  },
  {
    categoryId: 3,
    genre: 'flower',
    Icon: BsFlower1,
    contents: '플라워',
  },
  {
    categoryId: 4,
    genre: 'drawing',
    Icon: BiPaint,
    contents: '미술',
  },
  {
    categoryId: 5,
    genre: 'beauty',
    Icon: GiLipstick,
    contents: '뷰티',
  },
  {
    categoryId: 6,
    genre: 'music',
    Icon: HiOutlineMusicNote,
    contents: '음악',
  },
  {
    categoryId: 7,
    genre: 'handcraft',
    Icon: IoHammerOutline,
    contents: '수공예',
  },
  {
    categoryId: 8,
    genre: 'activity',
    Icon: MdOutlineSurfing,
    contents: '액티비티',
  },
];
