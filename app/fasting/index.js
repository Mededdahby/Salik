import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import FastingCard from '../../components/cards/FastingCard';
import { fastingDays } from '../../constants/fastingDays';
import { spacing } from '../../theme/spacing';

const FastingScreen = () => (
  <ScreenWrapper>
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title="Sunnah Fasting" subtitle="Plan your voluntary fasts" />
      {fastingDays.map((day) => (
        <FastingCard key={day} title={day} date="Upcoming" />
      ))}
    </ScrollView>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default FastingScreen;
