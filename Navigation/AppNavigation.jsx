import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../Features/Landing/Screens/Landing';
import Feed from '../Features/Feed/Screens/Feed';
import PostDetails from '../Features/Feed/Screens/PostDetails';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: true, title: 'Post Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
