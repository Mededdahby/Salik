import React from 'react';
import { Stack } from 'expo-router';
import ScreenWrapper from '../components/ui/ScreenWrapper';

const Layout = () => (
  <ScreenWrapper>
    <Stack screenOptions={{ headerShown: false }} />
  </ScreenWrapper>
);

export default Layout;
