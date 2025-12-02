import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const CreditCard = ({ title, amount, dueDate }) => (
  <Card>
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>${amount}</Text>
      </View>
      <Text style={styles.dueDate}>{dueDate}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  amount: {
    color: colors.accent,
    fontSize: typography.heading3,
    fontWeight: '700',
  },
  dueDate: {
    color: colors.muted,
    fontSize: typography.small,
  },
});

export default CreditCard;
