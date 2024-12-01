import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../../Components/Post';
import NewPostForm from '../../Components/NewPostForm';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ]);
  const [newId, setNewId] = useState(0);

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const addNewPost = (newPost) => {
    const updatedPosts = [...posts];
    updatedPosts.push({ ...newPost, _id: newId });
    setPosts(updatedPosts);
    setNewId((id) => (id + 1));
    }; 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <NewPostForm addNewPost={addNewPost}/>

      {posts.map((post) => (
        <Post key={post._id} username={post.username} body={post.body}/>
      ))}
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};