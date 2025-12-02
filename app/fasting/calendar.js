import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { useHijriCalendar } from '../../hooks/useHijriCalendar';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const FastingCalendarScreen = () => {
  const { entries } = useHijriCalendar();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Hijri Calendar" subtitle="Plan fasting days" />
        {entries.map((item) => (
          <Text key={item.id} style={styles.text}>
            {item.hijri_date}
          </Text>
        ))}
        {entries.length === 0 && <Text style={styles.placeholder}>No calendar data yet.</Text>}
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
  },
  placeholder: {
    color: colors.muted,
    fontSize: typography.body,
  },
});

export default FastingCalendarScreen;
