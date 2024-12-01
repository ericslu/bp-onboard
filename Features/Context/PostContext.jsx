import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
      time: '2023-10-24T00:41:59.057Z',
      tag: 'news',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
      time: '2023-10-23T00:41:59.057Z',
      tag: 'entertainment',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
      time: '2023-10-25T00:41:59.057Z',
      tag: '',
    },
  ]);

  const addNewPost = (newPost) => {
    const newId = posts.length + 1;
    const newPostWithMetadata = {
      ...newPost,
      _id: newId,
      time: new Date().toISOString(),
      tag: newPost.tag || '',
    };
    setPosts([...posts, newPostWithMetadata]);
  };

  return (
    <PostContext.Provider value={{ posts, addNewPost }}>
      {children}
    </PostContext.Provider>
  );
}
