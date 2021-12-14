import { GiPaintedPottery, GiLipstick } from 'react-icons/gi';
import { BiDish, BiPaint } from 'react-icons/bi';
import { BsFlower1 } from 'react-icons/bs';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { IoHammerOutline } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';

export const categoryIcons = [
  {
    genre: 'pottery',
    Icon: GiPaintedPottery,
    contents: '도자기',
  },
  {
    genre: 'cooking',
    Icon: BiDish,
    contents: '요리',
  },
  {
    genre: 'flower',
    Icon: BsFlower1,
    contents: '플라워',
  },
  {
    genre: 'drawing',
    Icon: BiPaint,
    contents: '미술',
  },
  {
    genre: 'beauty',
    Icon: GiLipstick,
    contents: '뷰티',
  },
  {
    genre: 'music',
    Icon: HiOutlineMusicNote,
    contents: '음악',
  },
  {
    genre: 'handcraft',
    Icon: IoHammerOutline,
    contents: '수공예',
  },
  {
    genre: 'activity',
    Icon: MdOutlineSurfing,
    contents: '액티비티',
  },
];
