import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewPostForm({ addNewPost }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('');

  const handleAddPost = () => {
    addNewPost({ username, body, tag });
    setUsername('');
    setBody('');
    setTag('');
  };

  return (
    <>
      <TextInput
        placeholder="Who is this?"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="What are you Printing?"
        onChangeText={setBody}
        value={body}
      />
      <TextInput
        placeholder="Enter tag"
        onChangeText={setTag}
        value={tag}
      />
      <Button title="Print" onPress={handleAddPost} />
    </>
  );
}

NewPostForm.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};
