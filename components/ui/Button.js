import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

const Button = ({ label, onPress, variant = 'primary', disabled }) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.base,
      variant === 'outline' ? styles.outline : styles.filled,
      pressed && styles.pressed,
      disabled && styles.disabled,
    ]}
  >
    <Text style={[styles.label, variant === 'outline' && styles.outlineLabel]}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
  },
  label: {
    color: colors.surface,
    fontSize: typography.body,
    fontWeight: '600',
  },
  outlineLabel: {
    color: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default Button;
