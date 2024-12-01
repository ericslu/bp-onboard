import { Button, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from '../../Components/Post';
import NewPostForm from '../../Components/NewPostForm';

export default function Feed({ navigation }) {
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
  const [newId, setNewId] = useState(posts.length + 1);
  const [filterTag, setFilterTag] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [displayedPosts, setDisplayedPosts] = useState(posts);

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const navigateToDetails = (post) => {
    navigation.navigate('PostDetails', post);
  };

  const addNewPost = (newPost) => {
    const newPostWithMetadata = {
      ...newPost,
      _id: newId,
      time: new Date().toISOString(),
      tag: newPost.tag || '',
    };
    const updatedPosts = [...posts, newPostWithMetadata];
    setPosts(updatedPosts);
    setNewId((id) => id + 1);
  };

  useEffect(() => {
    let filteredPosts = [...posts];

    // Apply filtering by tag
    if (filterTag) {
      filteredPosts = filteredPosts.filter((post) => post.tag === filterTag);
    }

    // Apply sorting
    switch (sortOption) {
      case 'newest':
        filteredPosts.sort((a, b) => new Date(b.time) - new Date(a.time));
        break;
      case 'oldest':
        filteredPosts.sort((a, b) => new Date(a.time) - new Date(b.time));
        break;
      case 'username-asc':
        filteredPosts.sort((a, b) => a.username.localeCompare(b.username));
        break;
      case 'username-desc':
        filteredPosts.sort((a, b) => b.username.localeCompare(a.username));
        break;
      default:
        break;
    }

    setDisplayedPosts(filteredPosts);
  }, [filterTag, sortOption, posts]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <NewPostForm addNewPost={addNewPost} />

      <TextInput
        style={styles.input}
        placeholder="Filter by tag"
        value={filterTag}
        onChangeText={setFilterTag}
      />

      <View style={styles.sortingButtons}>
        <TouchableOpacity onPress={() => setSortOption('newest')} style={styles.button}>
          <Text style={styles.buttonText}>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortOption('oldest')} style={styles.button}>
          <Text style={styles.buttonText}>Oldest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortOption('username-asc')} style={styles.button}>
          <Text style={styles.buttonText}>A-Z</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortOption('username-desc')} style={styles.button}>
          <Text style={styles.buttonText}>Z-A</Text>
        </TouchableOpacity>
      </View>

      {displayedPosts.map((post) => (
        <Button
          key={post._id}
          title={`${post.username}: ${post.body}`}
          onPress={() => navigateToDetails(post)}
        />
      ))}

      <Button title="To Landing" onPress={navigateToLanding} />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '90%',
  },
  sortingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
