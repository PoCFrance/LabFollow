import React from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import HomeScreen from './HomeScreen'
import MainHeader from './MainHeader'
import StudyBlock from './StudyBlock'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ScrollView } from 'react-native-gesture-handler';

const DOCTORS = gql`
  {
    doctors {
      id
      name
      email
    }
  }
`;

export function GetDoctors() {
  const { loading, error, data } = useQuery(DOCTORS);

  if (loading) return (
    <View style={styles.studyList}>
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
  if (error) return (
    <View style={styles.studyList}>
      <Text>An error occurred while trying to load your studies.</Text>
      <Text>Please retry later.</Text>
    </View>
  );

  console.log(data)
  return (
    <View style={styles.studyList}>
      <FlatList
        data={data.doctors}
        renderItem={({ item }) => (<StudyBlock studyName={item.id} doctorName={item.name} studyCreationDate={item.email}></StudyBlock>)}
        keyExtractor={item => item.id}
        width='90%'
      />
      {/* <View key={id}>
        <Text>Dr. {name}</Text>
      </View> */}
    </View>
  );
}

export default class Studies extends React.Component {
  static navigationOptions = {
    title: 'Studies',
    header: null,
    gesturesEnabled: false,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <MainHeader title='Studies List' />
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <GetDoctors />
            {/* <View style={styles.studyList}> */}
            {/* <StudyBlock studyName="Study Name" doctorName="John Doe" studyCreationDate="19/02/2019"/>
        <StudyBlock studyName="Another Study" doctorName="Jane Doe" studyCreationDate="11/02/2019"/>
        <StudyBlock studyName="Diabetes 1" doctorName="Olivia Johnson" studyCreationDate="22/01/2019"/>
        <StudyBlock studyName="Diabetes 2" doctorName="John Doe" studyCreationDate="12/01/2019"/> */}
            {/* </View> */}
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
    width: '100%',
  },
  studyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
});