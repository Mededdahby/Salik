import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { spacing } from '../../theme/spacing';

const AddCreditScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Add Credit" subtitle="Track a new debt" />
        <Input value={title} onChangeText={setTitle} placeholder="Title" />
        <Input value={amount} onChangeText={setAmount} placeholder="Amount" keyboardType="numeric" />
        <Button label="Save" onPress={() => {}} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default AddCreditScreen;
