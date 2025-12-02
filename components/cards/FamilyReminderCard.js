import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const FamilyReminderCard = ({ name, relation, date }) => (
  <Card>
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.relation}>{relation}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  relation: {
    color: colors.muted,
    fontSize: typography.small,
  },
  date: {
    color: colors.muted,
    fontSize: typography.small,
  },
});

export default FamilyReminderCard;
