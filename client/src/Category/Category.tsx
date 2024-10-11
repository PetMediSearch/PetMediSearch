import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Category() {
  const [categorypost, setCategoryPost] = useState({
    category: [],
  });
  const { id } = useParams();
  const getPost = async () => {
    const res = await axios.get(`http://localhost:8080/posts`);
    setCategoryPost(res.data);
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      {categorypost.category.map((item: number) => {
        // 카테고리가 all이면 버튼보이지않게
        if (item === 1) {
          return;
        } else {
          return (
            // eslint-disable-next-line react/jsx-key
            <Bar>
              {item === 2
                ? 2
                : item === 3
                  ? 3
                  : item === 4
                    ? 4
                    : item === 5
                      ? 5
                      : item === 6
                        ? 6
                        : ''}
            </Bar>
          );
        }
      })}
    </Container>
  );
}

const Container = styled.div``;

const Bar = styled.div``;
