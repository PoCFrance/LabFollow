import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Fontisto';
import StackNavigatorHeader from './NavigatorHeader';

FAIcon.loadFont();
TextInput.defaultProps.selectionColor = 'white'

export default class SignupDetails extends React.Component {
  static navigationOptions = {
    title: 'SignupDetails',
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <LinearGradient
        style={styles.container}
        colors={["#00cdac", "#02aab0"]}
      >
    <SafeAreaView>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
      <StackNavigatorHeader navigation={this.props.navigation} />
    <View style={styles.container}>
      <Icon name='person' size={90} color='#fff' style={styles.mainIcon} />
        <Text style={styles.title}>
          Welcome!
        </Text>
        <View style={styles.mainContainer}>
            <Text style={styles.paragraph}>
              Tell us more about you. Those informations will be used by your doctor(s) to send you studies. Please enter your name and your date of birth.
            </Text>
            {/* <Text style={styles.textfieldTitle}>Email</Text> */}
              <View style={styles.textfieldContainer}>
                <Icon style={styles.textfieldIcon} name="person" size={20} color="#fff"/>
                <TextInput placeholder="First Name" placeholderTextColor="#ffffff77" style={styles.textfield}></TextInput>
              </View>
              {/* <Text style={styles.textfieldTitle}>Password</Text> */}
              <View style={styles.textfieldContainer}>
                <Icon style={styles.textfieldIcon} name="person" size={20} color="#fff"/>
                <TextInput placeholder="Last Name" placeholderTextColor="#ffffff77" secureTextEntry={true} style={styles.textfield}></TextInput>
              </View>
              <View style={styles.textfieldContainer}>
                <Icon style={styles.textfieldIcon} name="date" size={20} color="#fff"/>
                <TextInput placeholder="MM/DD/YYYY" placeholderTextColor="#ffffff77" autoCapitalize='none' secureTextEntry={true} style={styles.textfield}></TextInput>
              </View>
          <TouchableOpacity
              onPress={() => navigate('Studies')}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Done</Text>
                </View>
              </TouchableOpacity>
        </View>
    </View>
    {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    width: 300,
    backgroundColor: '#ffffff22',
    borderColor: '#ffffffaa',
    borderWidth: 1,
  },
  title: {
    margin: 24,
    fontSize: 32,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  textfieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 270,
    marginTop: 10,
  },
  textfieldIcon: {
    padding: 10,
    // backgroundColor: '#fff',
  },
  textfield: {
    // borderColor: '#ddd',
    // borderWidth: 1,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#fff',
  },
  textfieldTitle: {
    color: '#fff',
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 12,
    marginBottom: 3,
    marginTop: 20,
    width: 270,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
    width: 100,
    backgroundColor: '#ffffff33',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#fff',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    width: 300,
    borderBottomColor: '#ffffffaa',
    borderBottomWidth: 1,
  },
  button2Text: {
    fontSize: 14,
    color: '#fff',
  }
});