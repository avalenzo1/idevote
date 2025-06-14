import { StyleSheet } from 'react-native';
import { themes } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    tintColor: 'blue'
  },
  text: {
    color: "grey",
    fontSize: 14
  },
  lightContainer: {
    backgroundColor: themes.light.background,
    color: themes.light.text
  },
  darkContainer: {
    backgroundColor: themes.dark.background,
    color: themes.dark.text
  }
});