import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Switch from '../../components/ui/Switch';
import Button from '../../components/ui/Button';
import { useSettings } from '../../hooks/useSettings';
import { spacing } from '../../theme/spacing';

const SettingsScreen = () => {
  const { notifications, updateSetting } = useSettings();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Settings" subtitle="Personalize your experience" />
        <Switch label="Notifications" value={notifications} onValueChange={(value) => updateSetting('notifications', value)} />
        <Button label="Language" onPress={() => {}} variant="outline" />
        <Button label="Theme" onPress={() => {}} variant="outline" />
        <Button label="About" onPress={() => {}} variant="outline" />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default SettingsScreen;
