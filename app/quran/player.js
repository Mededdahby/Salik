import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const QuranPlayerScreen = () => (
  <ScreenWrapper>
    <View style={styles.container}>
      <SectionHeader title="Audio Player" subtitle="Play recitations offline" />
      <Text style={styles.info}>Audio playback setup goes here.</Text>
      <Button label="Play" onPress={() => {}} />
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
  },
  info: {
    color: colors.muted,
    fontSize: typography.body,
  },
});

export default QuranPlayerScreen;
