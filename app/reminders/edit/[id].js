import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import SectionHeader from '../../../components/ui/SectionHeader';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { spacing } from '../../../theme/spacing';

const EditReminderScreen = () => {
  const { id } = useLocalSearchParams();
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SectionHeader title="Edit Reminder" subtitle={`Editing reminder #${id}`} />
        <Input value={name} onChangeText={setName} placeholder="Name" />
        <Input value={relation} onChangeText={setRelation} placeholder="Relation" />
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

export default EditReminderScreen;
