import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import AdhkarCard from '../../components/cards/AdhkarCard';
import { adhkarCategories } from '../../constants/adhkarCategories';
import { spacing } from '../../theme/spacing';

const AdhkarScreen = () => (
  <ScreenWrapper>
    <View style={styles.container}>
      <SectionHeader title="Adhkar" subtitle="Choose a collection" />
      {adhkarCategories.map((category) => (
        <AdhkarCard key={category.key} title={category.title} count={1} />
      ))}
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default AdhkarScreen;
