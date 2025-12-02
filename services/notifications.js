import * as Notifications from 'expo-notifications';

export const requestPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
};

export const scheduleDailyReminder = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Daily Reminder',
      body: 'Remember your adhkar today.',
    },
    trigger: { hour: 6, minute: 0, repeats: true },
  });
};
