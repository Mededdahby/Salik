import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { scheduleDailyReminder } from './notifications';

const TASK_NAME = 'SALIK_BACKGROUND_REMINDERS';

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    await scheduleDailyReminder();
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export const registerBackgroundTasks = async () => {
  const status = await BackgroundFetch.getStatusAsync();
  if (status === BackgroundFetch.BackgroundFetchStatus.Restricted) return;

  await BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: 60 * 60,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};
