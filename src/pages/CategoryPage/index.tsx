import React from 'react';
import { useParams } from 'react-router';

const CategoryPage = () => {
  const { genre } = useParams<{ genre: string }>();
  return <div> {genre} 카테고리 입니다.</div>;
};
export default CategoryPage;
