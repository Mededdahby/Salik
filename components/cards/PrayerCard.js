import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const PrayerCard = ({ name, time, status }) => (
  <Card>
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={[styles.status, status === 'done' ? styles.done : styles.pending]}>
        {status === 'done' ? '✓' : '○'}
      </Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  time: {
    color: colors.muted,
    fontSize: typography.small,
  },
  status: {
    fontSize: typography.heading2,
  },
  done: {
    color: colors.success,
  },
  pending: {
    color: colors.muted,
  },
});

export default PrayerCard;
