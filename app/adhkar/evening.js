import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { useAdhkar } from '../../hooks/useAdhkar';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const EveningAdhkarScreen = () => {
  const { items } = useAdhkar('evening');

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Evening Adhkar" subtitle="Wind down with remembrance" />
        {items.map((item) => (
          <Text key={item.id} style={styles.text}>
            {item.text} ({item.count}x)
          </Text>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

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

export default EveningAdhkarScreen;
