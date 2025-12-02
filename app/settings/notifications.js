import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Switch from '../../components/ui/Switch';
import { useSettings } from '../../hooks/useSettings';
import { useNotifications } from '../../hooks/useNotifications';
import { spacing } from '../../theme/spacing';

const NotificationSettingsScreen = () => {
  const { notifications, updateSetting } = useSettings();
  const { granted, schedule } = useNotifications();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Notifications" subtitle={granted ? 'Enabled' : 'Permission needed'} />
        <Switch label="Daily Reminder" value={notifications} onValueChange={(value) => updateSetting('notifications', value)} />
        <Switch label="Schedule Reminder" value={false} onValueChange={schedule} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default NotificationSettingsScreen;
