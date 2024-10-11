import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import MainCategory from '../Category/MainCategory';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState();

  const handleWriteNaviageClick = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/posts');
      setPosts(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <MainCategory category={category} setCategory={setCategory} />
      <WriteContainer>
        <WriteBt onClick={handleWriteNaviageClick}>
          <HiOutlinePencilSquare size={30} />
        </WriteBt>
      </WriteContainer>

      <PostList posts={posts} category={category} />
    </Container>
  );
}

const Container = styled.div``;

const WriteContainer = styled.div``;

const WriteBt = styled.button``;
