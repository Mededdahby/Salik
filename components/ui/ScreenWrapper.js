import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const ScreenWrapper = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
});

export default ScreenWrapper;
