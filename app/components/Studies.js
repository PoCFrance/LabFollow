import React from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text } from 'react-native';
import HomeScreen from './HomeScreen'
import MainHeader from './MainHeader'
import StudyBlock from './StudyBlock'
import { ScrollView } from 'react-native-gesture-handler';


export default class Studies extends React.Component {
  static navigationOptions = {
    title: 'Studies',
    header: null,
    gesturesEnabled: false,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View>
        <MainHeader title='Studies List'/>
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>
        <View style={styles.studyList}>
        <StudyBlock studyName="Study Name" doctorName="John Doe" studyCreationDate="19/02/2019"/>
        <StudyBlock studyName="Another Study" doctorName="Jane Doe" studyCreationDate="11/02/2019"/>
        <StudyBlock studyName="Diabetes 1" doctorName="Olivia Johnson" studyCreationDate="22/01/2019"/>
        <StudyBlock studyName="Diabetes 2" doctorName="John Doe" studyCreationDate="12/01/2019"/>
        </View>
      <Button
        title="Logout"
        onPress={() => navigate('Home')}
      />
    </ScrollView>
    </SafeAreaView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    studyList: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});