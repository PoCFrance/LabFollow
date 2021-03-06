import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions, StackActions } from 'react-navigation';

const MainHeader = (props) => {

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
  });

  const handleDisconnect = (context) => {
    context.updateId("")
    context.updateName("")
    context.updateEmail("")
    context.updateBirthday("")
    context.updateToken("")
    context.updateDoctor([])
    context.updateSurveys([])
    props.navigation.dispatch(resetAction);
    props.navigation.navigate('Login')
  }

  return (
    <View>
      <LinearGradient
        style={styles.mainHeaderBackground}
        colors={["#00cdac", "#02aab0"]}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.leftContainer}>
            <Icon
              style={styles.textfieldIcon}
              name="menu"
              size={27}
              color="#fff"
              onPress={() => props.navigation.openDrawer()}
            />
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.mainHeaderTitle}>{props.title}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Icon
              style={styles.textfieldIcon}
              name="exit-to-app"
              size={27}
              color="#d1625a"
              onPress={() => handleDisconnect(props.context)}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  )
}

export default MainHeader

const styles = StyleSheet.create({
  mainHeaderBackground: {
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  centerContainer: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 0.2,
    marginTop: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 0.2,
    marginTop: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  mainHeaderTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});