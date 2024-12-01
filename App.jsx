import React from 'react';
import { PostProvider } from './Features/Context/PostContext';
import AppNavigation from './Navigation/AppNavigation';

export default function App() {
  return (
    <PostProvider>
      <AppNavigation />
    </PostProvider>
  );
}
