import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { useSettings } from '../../hooks/useSettings';
import { spacing } from '../../theme/spacing';

const ThemeScreen = () => {
  const { theme, updateSetting } = useSettings();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Theme" subtitle={`Active: ${theme}`} />
        <Button label="Light" variant="outline" onPress={() => updateSetting('theme', 'light')} />
        <Button label="Dark" variant="outline" onPress={() => updateSetting('theme', 'dark')} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default ThemeScreen;
