import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const EditProfileModal = () => (
  <ScreenWrapper>
    <View style={styles.container}>
      <SectionHeader title="Edit Profile" subtitle="Update your preferences" />
      <Text style={styles.text}>Profile form goes here.</Text>
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

export default EditProfileModal;
