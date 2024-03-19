import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const ListView = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Using List Views:</Text28>
          <Text12>
            React Native provides a suite of components for presenting lists of
            data. Generally, you'll want to use either FlatList or
            SectionList.The FlatList component displays a scrolling list of
            changing, but similarly structured, data. FlatList works well for
            long lists of data, where the number of items might change over
            time. Unlike the more generic ScrollView, the FlatList only renders
            elements that are currently showing on the screen, not all the
            elements at once.The FlatList component requires two props: data and
            renderItem. data is the source of information for the list.
            renderItem takes one item from the source and returns a formatted
            component to render.{'\n'}
            {'\n'}This example creates a basic FlatList of hardcoded data. Each
            item in the data props is rendered as a Text component. The
            FlatListBasics component then renders the FlatList and all Text
            components.
          </Text12>
          <CopyAbleText
            content={`import React from 'react';
            import {FlatList, StyleSheet, Text, View} from 'react-native';
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                paddingTop: 22,
              },
              item: {
                padding: 10,
                fontSize: 18,
                height: 44,
              },
            });
            
            const FlatListBasics = () => {
              return (
                <View style={styles.container}>
                  <FlatList
                    data={[
                      {key: 'Devin'},
                      {key: 'Dan'},
                      {key: 'Dominic'},
                      {key: 'Jackson'},
                      {key: 'James'},
                      {key: 'Joel'},
                      {key: 'John'},
                      {key: 'Jillian'},
                      {key: 'Jimmy'},
                      {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                  />
                </View>
              );
            };
            
            export default FlatListBasics;`}
          />
          <Text28>Section List:</Text28>
          <Text12>
            If you want to render a set of data broken into logical sections,
            maybe with section headers, similar to UITableViews on iOS, then a
            SectionList is the way to go.
          </Text12>
          <CopyAbleText
            content={`import React from 'react';
            import { View, Text, SectionList, StyleSheet } from 'react-native';
            
            const newTaskData = [
              {
                title: "New Tasks",
                data: [
                  { id: "1", task: "Buy groceries" },
                  { id: "2", task: "Feed Cat" },
                  { id: "3", task: "Sleep for 3 hours" },
                ]
              }
            ];
            
            const completedTaskData = [
              {
                title: "Completed Tasks",
                data: [
                  { id: "6", task: "Make a section list tutorial" },
                  { id: "7", task: "Share this tutorial" },
                ]
              }
            ];
            
            const App = () => {
              return (
                <View style={styles.container}>
                  <SectionList
                    sections={[...newTaskData, ...completedTaskData]}
                    renderItem={({ item }) => (
                      <Text style={styles.taskItem}>{item.task}</Text>
                    )}
                    renderSectionHeader={({ section }) => (
                      <Text style={styles.taskTitle}>{section.title}</Text>
                    )}
                    keyExtractor={item => item.id}
                    stickySectionHeadersEnabled
                  />
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                padding: 16,
                backgroundColor: "#f9f9f9"
              },
              taskItem: {
                fontSize: 16,
                paddingVertical: 8
              },
              taskTitle: {
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 16
              }
            });
            
            export default App;
            `}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListView;
