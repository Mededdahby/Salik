import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import PrayerCard from '../../components/cards/PrayerCard';
import { usePrayers } from '../../hooks/usePrayers';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const PrayersScreen = () => {
  const { prayers } = usePrayers();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Prayer Times" subtitle="Log each prayer" />
        {prayers.map((item) => (
          <PrayerCard key={item.id} name={item.prayer_name} time={item.prayed_at || 'Not set'} status={item.status || 'pending'} />
        ))}
        {prayers.length === 0 && <Text style={styles.empty}>No data yet.</Text>}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  empty: {
    color: colors.muted,
    fontSize: typography.small,
  },
});

export default PrayersScreen;
