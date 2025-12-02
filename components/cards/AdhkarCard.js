import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const AdhkarCard = ({ title, count }) => (
  <Card>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.count}>{count} adhkar</Text>
  </Card>
);

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    marginBottom: 4,
  },
  count: {
    color: colors.muted,
    fontSize: typography.small,
  },
});

export default AdhkarCard;
