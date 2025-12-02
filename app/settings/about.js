import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const AboutScreen = () => (
  <ScreenWrapper>
    <View style={styles.container}>
      <SectionHeader title="About" subtitle="Offline-first Muslim companion" />
      <Text style={styles.text}>Salik helps you stay connected to faith with offline Quran, adhkar, fasting plans, and reminders.</Text>
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  text: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 22,
  },
});

export default AboutScreen;
