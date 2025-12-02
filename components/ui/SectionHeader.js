import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const SectionHeader = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.heading3,
    color: colors.text,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: typography.small,
    color: colors.muted,
    marginTop: spacing.xs,
  },
});

export default SectionHeader;
