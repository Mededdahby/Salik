import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SectionHeader from '../components/ui/SectionHeader';
import Divider from '../components/ui/Divider';
import PrayerCard from '../components/cards/PrayerCard';
import AdhkarCard from '../components/cards/AdhkarCard';
import QuranSurahCard from '../components/cards/QuranSurahCard';
import { usePrayers } from '../hooks/usePrayers';
import { useAdhkar } from '../hooks/useAdhkar';
import { useQuran } from '../hooks/useQuran';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

const HomeScreen = () => {
  const { prayers } = usePrayers();
  const { items: morning } = useAdhkar('morning');
  const { list: surahs } = useQuran();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Salik</Text>

      <SectionHeader title="Prayers" subtitle="Track your daily prayers" />
      <View style={styles.stack}>
        {prayers.map((item) => (
          <PrayerCard key={item.id} name={item.prayer_name} time={item.prayed_at || 'Not set'} status={item.status || 'pending'} />
        ))}
        {prayers.length === 0 && <Text style={styles.empty}>No prayers logged yet.</Text>}
      </View>

      <Divider />

      <SectionHeader title="Morning Adhkar" subtitle="Stay consistent with remembrance" />
      <View style={styles.stack}>
        <AdhkarCard title="Morning" count={morning.length} />
      </View>

      <Divider />

      <SectionHeader title="Quran" subtitle="Continue your recitation" />
      <View style={styles.stack}>
        {surahs.map((surah) => (
          <QuranSurahCard key={surah.id} name={surah.name} verses={surah.verses} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xxl,
  },
  title: {
    color: colors.text,
    fontSize: typography.heading1,
    fontWeight: '800',
    marginBottom: spacing.lg,
  },
  stack: {
    gap: spacing.md,
  },
  empty: {
    color: colors.muted,
    fontSize: typography.small,
  },
});

export default HomeScreen;
