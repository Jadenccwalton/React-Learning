import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity,TouchableHighlight, Image, SafeAreaView, Button, Alert, Platform, StatusBar, useWindowDimensions} from 'react-native';
import WecomeScreen from './App/screens/WelcomeScreen';

export default function App() {

  return (
    <WecomeScreen></WecomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight : 0,

    
  },
});
