import styled from 'styled-components';
import { PostState } from '../types/type';
import Post from './Post';

export default function PostList({
  posts,
  category,
}: {
  posts: PostState[];
  category: any;
}) {
  return (
    <PostsContainer>
      {posts.map((post) => {
        for (let i = 0; i < post.category.length; i++) {
          if (category === post.category[i]) {
            return <Post post={post} key={post.id} />;
          }
        }
      })}
    </PostsContainer>
  );
}

const PostsContainer = styled.div``;
