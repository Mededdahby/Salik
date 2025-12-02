import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import SectionHeader from '../../../components/ui/SectionHeader';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { spacing } from '../../../theme/spacing';

const EditCreditScreen = () => {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Edit Credit" subtitle={`Editing credit #${id}`} />
        <Input value={title} onChangeText={setTitle} placeholder="Title" />
        <Input value={amount} onChangeText={setAmount} placeholder="Amount" keyboardType="numeric" />
        <Button label="Update" onPress={() => {}} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});

export default EditCreditScreen;
