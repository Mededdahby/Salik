import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import { useFasting } from '../../hooks/useFasting';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const FastingLogsScreen = () => {
  const { logs } = useFasting();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Fasting Logs" subtitle="Review your progress" />
        {logs.map((log) => (
          <Text key={log.id} style={styles.text}>
            {log.date} - {log.type}
          </Text>
        ))}
        {logs.length === 0 && <Text style={styles.placeholder}>No logs yet.</Text>}
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

export default FastingLogsScreen;
