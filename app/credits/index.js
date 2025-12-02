import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import CreditCard from '../../components/cards/CreditCard';
import Button from '../../components/ui/Button';
import { useCredits } from '../../hooks/useCredits';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const CreditsScreen = () => {
  const { credits } = useCredits();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Credits" subtitle="Track debts and repayments" />
        {credits.map((credit) => (
          <CreditCard key={credit.id} title={credit.title} amount={credit.amount || 0} dueDate={credit.due_date || 'N/A'} />
        ))}
        {credits.length === 0 && <Text style={styles.placeholder}>No credits logged yet.</Text>}
        <Button label="Add Credit" onPress={() => {}} />
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

export default CreditsScreen;
