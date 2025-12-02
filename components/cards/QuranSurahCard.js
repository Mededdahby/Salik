import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const QuranSurahCard = ({ name, verses }) => (
  <Card>
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.verses}>{verses} ayat</Text>
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
  },
  verses: {
    color: colors.muted,
    fontSize: typography.small,
    marginLeft: spacing.md,
  },
});

export default QuranSurahCard;
