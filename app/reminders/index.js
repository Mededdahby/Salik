import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import FamilyReminderCard from '../../components/cards/FamilyReminderCard';
import Button from '../../components/ui/Button';
import { useFamilyReminders } from '../../hooks/useFamilyReminders';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const FamilyRemindersScreen = () => {
  const { reminders } = useFamilyReminders();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Family Reminders" subtitle="Stay connected" />
        {reminders.map((item) => (
          <FamilyReminderCard key={item.id} name={item.name} relation={item.relation} date={item.reminder_date || 'Soon'} />
        ))}
        {reminders.length === 0 && <Text style={styles.placeholder}>No reminders yet.</Text>}
        <Button label="Add Reminder" onPress={() => {}} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  placeholder: {
    color: colors.muted,
    fontSize: typography.body,
  },
});

export default FamilyRemindersScreen;
