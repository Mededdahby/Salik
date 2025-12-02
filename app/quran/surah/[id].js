import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import SectionHeader from '../../../components/ui/SectionHeader';
import surah001 from '../../../data/quran/surah001.json';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';
import { typography } from '../../../theme/typography';

const SurahScreen = () => {
  const { id } = useLocalSearchParams();
  const surah = Number(id) === 1 ? surah001 : surah001;

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title={surah.name} subtitle={`Surah #${id || 1}`} />
        {surah.verses.map((verse, index) => (
          <Text key={index} style={styles.verse}>
            {index + 1}. {verse}
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
  verse: {
    color: colors.text,
    fontSize: typography.body,
    lineHeight: 24,
  },
});

export default SurahScreen;
