import { GiPaintedPottery, GiLipstick } from 'react-icons/gi';
import { BiDish, BiPaint } from 'react-icons/bi';
import { BsFlower1 } from 'react-icons/bs';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { IoHammerOutline } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';

export const categoryIcons = [
  {
    genre: '/category/pottery',
    Icon: GiPaintedPottery,
    contents: '도자기',
  },
  {
    genre: '/category/cooking',
    Icon: BiDish,
    contents: '요리',
  },
  {
    genre: '/category/flower',
    Icon: BsFlower1,
    contents: '플라워',
  },
  {
    genre: '/category/drawing',
    Icon: BiPaint,
    contents: '미술',
  },
  {
    genre: '/category/beauty',
    Icon: GiLipstick,
    contents: '뷰티',
  },
  {
    genre: '/category/music',
    Icon: HiOutlineMusicNote,
    contents: '음악',
  },
  {
    genre: '/category/handcraft',
    Icon: IoHammerOutline,
    contents: '수공예',
  },
  {
    genre: '/category/activity',
    Icon: MdOutlineSurfing,
    contents: '액티비티',
  },
];
