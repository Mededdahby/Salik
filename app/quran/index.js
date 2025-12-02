import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import QuranSurahCard from '../../components/cards/QuranSurahCard';
import { useQuran } from '../../hooks/useQuran';
import { spacing } from '../../theme/spacing';

const QuranScreen = () => {
  const { list } = useQuran();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Quran" subtitle="Browse surahs" />
        {list.map((surah) => (
          <QuranSurahCard key={surah.id} name={surah.name} verses={surah.verses} />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default QuranScreen;
