import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const AddFastingModal = () => (
  <ScreenWrapper>
    <View style={styles.container}>
      <SectionHeader title="Add Fasting Day" subtitle="Schedule voluntary fasts" />
      <Text style={styles.text}>Form goes here.</Text>
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  text: {
    color: colors.muted,
    fontSize: typography.body,
  },
});

export default AddFastingModal;
