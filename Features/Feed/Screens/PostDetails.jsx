import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function PostDetails({ route }) {
  const { username, body, time, tag } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Post Details</Text>
      <Text>
        Author:
        {' '}
        {username}
      </Text>
      <Text>
        Body:
        {' '}
        {body}
      </Text>
      <Text>
        Time:
        {' '}
        {new Date(time).toLocaleString()}
      </Text>
      <Text>
        Tag:
        {' '}
        {tag || 'None'}
      </Text>
    </View>
  );
}

PostDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      tag: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
