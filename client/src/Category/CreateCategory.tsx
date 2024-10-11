import { useState } from 'react';
import styled from 'styled-components';

export default function CreateCategory({ handleCategory }: any) {
  const [isClickNormal, setIsClickNormal] = useState(false);
  const [isClickDog, setIsClickDog] = useState(false);
  const [isClickCat, setIsClickCat] = useState(false);

  return (
    <CategoryContainer>
      <CategoryBt
        type="button"
        value={2}
        id={2}
        name="iscategory"
        onClick={(e) => {
          handleCategory(e);
          setIsClickNormal(!isClickNormal);
        }}
        style={{
          background: isClickNormal ? '#9E9E9E' : '#D9D9D9',
          color: isClickNormal ? '#fff' : '#fff',
        }}
      />

      <CategoryBt
        type="button"
        value={3}
        id={3}
        name="iscategory"
        onClick={(e) => {
          handleCategory(e);
          setIsClickDog(!isClickDog);
        }}
        style={{
          background: isClickDog ? '#9E9E9E' : '#D9D9D9',
          color: isClickDog ? '#fff' : '#fff',
        }}
      />

      <CategoryBt
        type="button"
        value={4}
        id={4}
        name="iscategory"
        onClick={(e) => {
          handleCategory(e);
          setIsClickCat(!isClickCat);
        }}
        style={{
          background: isClickCat ? '#9E9E9E' : '#D9D9D9',
          color: isClickCat ? '#fff' : '#fff',
        }}
      />
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

const CategoryBt = styled.input`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #d0d0d0;
  color: #aaa;
  font-size: 14px;
  cursor: pointer;
`;
