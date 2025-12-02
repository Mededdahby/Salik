import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { useSettings } from '../../hooks/useSettings';
import { spacing } from '../../theme/spacing';

const LanguageScreen = () => {
  const { language, updateSetting } = useSettings();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Language" subtitle={`Current: ${language}`} />
        <Button label="Arabic" variant="outline" onPress={() => updateSetting('language', 'ar')} />
        <Button label="English" variant="outline" onPress={() => updateSetting('language', 'en')} />
        <Button label="French" variant="outline" onPress={() => updateSetting('language', 'fr')} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default LanguageScreen;
