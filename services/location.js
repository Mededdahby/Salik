import * as Location from 'expo-location';

export const getLocation = async () => {
  const permission = await Location.requestForegroundPermissionsAsync();
  if (permission.status !== 'granted') {
    return null;
  }
  return Location.getCurrentPositionAsync({});
};
