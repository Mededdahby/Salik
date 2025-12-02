import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const PrayerDetailsScreen = () => (
  <ScreenWrapper>
    <View style={styles.container}>
      <SectionHeader title="Prayer Details" subtitle="Select a prayer to view details" />
      <Text style={styles.placeholder}>Select a prayer from the list.</Text>
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  placeholder: {
    color: colors.muted,
    fontSize: typography.body,
  },
});

export default PrayerDetailsScreen;
