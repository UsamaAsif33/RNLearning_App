import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const LayoutWithFlexbox = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Layout with Flexbox:</Text28>
          <Text12>
            A component can specify the layout of its children using the Flexbox
            algorithm. Flexbox is designed to provide a consistent layout on
            different screen sizes. You will normally use a combination of
            flexDirection, alignItems, and justifyContent to achieve the right
            layout.
          </Text12>

          <Text28>{'\n'}Flex:</Text28>
          <Text12>
            flex will define how your items are going to “fill” over the
            available space along your main axis. Space will be divided
            according to each element's flex property. In the following example,
            the red, orange, and green views are all children in the container
            view that has flex: 1 set. The red view uses flex: 1 , the orange
            view uses flex: 2, and the green view uses flex: 3 . 1+2+3 = 6,
            which means that the red view will get 1/6 of the space, the orange
            2/6 of the space, and the green 3/6 of the space.
          </Text12>
          <CopyAbleText
            content={`import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting flexDirection to "row".
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;`}
          />

          <Text28>{'\n'}Flex Direction:</Text28>
          <Text12>
            flexDirection: This property controls the direction in which the
            children of a node are laid out. It determines the main axis of the
            layout.
            {'\n'}🔷 column (default value): Aligns children from top to bottom
            along the main axis. If wrapping is enabled, subsequent lines start
            to the right of the first item on the top of the container.
            {'\n'}🔷 row: Aligns children from left to right along the main
            axis. If wrapping is enabled, subsequent lines start under the first
            item on the left of the container.
            {'\n'}🔷 column-reverse: Aligns children from bottom to top along
            the main axis. If wrapping is enabled, subsequent lines start to the
            right of the first item on the bottom of the container.
            {'\n'}🔷 row-reverse: Aligns children from right to left along the
            main axis. If wrapping is enabled, subsequent lines start under the
            first item on the right of the container.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
            import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
            import type {PropsWithChildren} from 'react';
            
            const FlexDirectionBasics = () => {
              const [flexDirection, setflexDirection] = useState('column');
            
              return (
                <PreviewLayout
                  label="flexDirection"
                  values={['column', 'row', 'row-reverse', 'column-reverse']}
                  selectedValue={flexDirection}
                  setSelectedValue={setflexDirection}>
                  <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
                </PreviewLayout>
              );
            };
            
            type PreviewLayoutProps = PropsWithChildren<{
              label: string;
              values: string[];
              selectedValue: string;
              setSelectedValue: (value: string) => void;
            }>;
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }: PreviewLayoutProps) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
              },
              box: {
                width: 50,
                height: 50,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default FlexDirectionBasics;`}
            content2={`import React, {useState} from 'react';
            import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
            
            const FlexDirectionBasics = () => {
              const [flexDirection, setflexDirection] = useState('column');
            
              return (
                <PreviewLayout
                  label="flexDirection"
                  values={['column', 'row', 'row-reverse', 'column-reverse']}
                  selectedValue={flexDirection}
                  setSelectedValue={setflexDirection}>
                  <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
                </PreviewLayout>
              );
            };
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
              },
              box: {
                width: 50,
                height: 50,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default FlexDirectionBasics;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Layout Direction:</Text28>
          <Text12>
            Layout direction specifies the direction in which children and text
            in a hierarchy should be laid out. Layout direction also affects
            what edge start and end refer to. By default, React Native lays out
            with LTR layout direction. In this mode start refers to left and end
            refers to right.
            {'\n'}🔷 LTR (default value) Text and children are laid out from
            left to right. Margin and padding applied to the start of an element
            are applied on the left side.
            {'\n'}🔷 RTL Text and children are laid out from right to left.
            Margin and padding applied to the start of an element are applied on
            the right side.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['ltr', 'rtl']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;`}
            content2={`import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['ltr', 'rtl']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;`}
            buttonLabel1="TypeScript"
            buttonLabel2="JavaScript"
          />

          <Text28>{'\n'}Justify Content:</Text28>
          <Text12>
            justifyContent: Describes how to align children within the main axis
            of their container.
            {'\n'}🔷 flex-start (default value): Aligns children of a container
            to the start of the container's main axis.
            {'\n'}🔷 flex-end: Aligns children of a container to the end of the
            container's main axis.
            {'\n'}🔷 center: Aligns children of a container in the center of the
            container's main axis.
            {'\n'}🔷 space-between: Evenly spaces off children across the
            container's main axis, distributing the remaining space between the
            children.
            {'\n'}🔷 space-around: Evenly spaces off children across the
            container's main axis, distributing the remaining space around the
            children. Compared to space-between, using space-around will result
            in space being distributed to the beginning of the first child and
            end of the last child.
            {'\n'}🔷 space-evenly: Evenly distributes children within the
            alignment container along the main axis. The spacing between each
            pair of adjacent items, the main-start edge and the first item, and
            the main-end edge and the last item, are all exactly the same.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;`}
            content2={`import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Align Items:</Text28>
          <Text12>
            alignItems describes how to align children along the cross axis of
            their container. It is very similar to justifyContent but instead of
            applying to the main axis, alignItems applies to the cross axis.
            {'\n'}🔷 stretch (default value) Stretch children of a container to
            match the height of the container's cross axis.
            {'\n'}🔷 flex-start Align children of a container to the start of
            the container's cross axis.
            {'\n'}🔷 flex-end Align children of a container to the end of the
            container's cross axis.
            {'\n'}🔷 center Align children of a container in the center of the
            container's cross axis.
            {'\n'}🔷 baseline Align children of a container along a common
            baseline. Individual children can be set to be the reference
            baseline for their parents.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            import type {PropsWithChildren} from 'react';
            
            const AlignItemsLayout = () => {
              const [alignItems, setAlignItems] = useState('stretch');
            
              return (
                <PreviewLayout
                  label="alignItems"
                  selectedValue={alignItems}
                  values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                  setSelectedValue={setAlignItems}>
                  <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                  <View
                    style={[
                      styles.box,
                      {
                        backgroundColor: 'steelblue',
                        width: 'auto',
                        minWidth: 50,
                      },
                    ]}
                  />
                </PreviewLayout>
              );
            };
            
            type PreviewLayoutProps = PropsWithChildren<{
              label: string;
              values: string[];
              selectedValue: string;
              setSelectedValue: (value: string) => void;
            }>;
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }: PreviewLayoutProps) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
                minHeight: 200,
              },
              box: {
                width: 50,
                height: 50,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default AlignItemsLayout;`}
            content2={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            
            const AlignItemsLayout = () => {
              const [alignItems, setAlignItems] = useState('stretch');
            
              return (
                <PreviewLayout
                  label="alignItems"
                  selectedValue={alignItems}
                  values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                  setSelectedValue={setAlignItems}>
                  <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                  <View
                    style={[
                      styles.box,
                      {
                        backgroundColor: 'steelblue',
                        width: 'auto',
                        minWidth: 50,
                      },
                    ]}
                  />
                </PreviewLayout>
              );
            };
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
                minHeight: 200,
              },
              box: {
                width: 50,
                height: 50,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default AlignItemsLayout;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Align Self:</Text28>
          <Text12>
            alignSelf has the same options and effect as alignItems but instead
            of affecting the children within a container, you can apply this
            property to a single child to change its alignment within its
            parent. alignSelf overrides any option set by the parent with
            alignItems.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            import type {PropsWithChildren} from 'react';
            import type {FlexAlignType} from 'react-native';
            
            const AlignSelfLayout = () => {
              const [alignSelf, setAlignSelf] = useState<FlexAlignType>('stretch');
            
              return (
                <PreviewLayout
                  label="alignSelf"
                  selectedValue={alignSelf}
                  values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                  setSelectedValue={setAlignSelf}>
                  <View
                    style={[
                      styles.box,
                      {
                        alignSelf,
                        width: 'auto',
                        minWidth: 50,
                        backgroundColor: 'powderblue',
                      },
                    ]}
                  />
                  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
                </PreviewLayout>
              );
            };
            
            type PreviewLayoutProps = PropsWithChildren<{
              label: string;
              values: FlexAlignType[];
              selectedValue: string;
              setSelectedValue: (value: FlexAlignType) => void;
            }>;
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }: PreviewLayoutProps) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.container}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
                minHeight: 200,
              },
              box: {
                width: 50,
                height: 50,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default AlignSelfLayout;`}
            content2={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            
            const AlignSelfLayout = () => {
              const [alignSelf, setAlignSelf] = useState('stretch');
            
              return (
                <PreviewLayout
                  label="alignSelf"
                  selectedValue={alignSelf}
                  values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                  setSelectedValue={setAlignSelf}>
                  <View
                    style={[
                      styles.box,
                      {
                        alignSelf,
                        width: 'auto',
                        minWidth: 50,
                        backgroundColor: 'powderblue',
                      },
                    ]}
                  />
                  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
                </PreviewLayout>
              );
            };
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.container}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
                minHeight: 200,
              },
              box: {
                width: 50,
                height: 50,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default AlignSelfLayout;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Align Content:</Text28>
          <Text12>
            alignContent: Defines the distribution of lines along the cross-axis
            when items are wrapped to multiple lines using flexWrap.
            {'\n'}🔷 flex-start (default value): Aligns wrapped lines to the
            start of the container's cross axis.
            {'\n'}🔷 flex-end: Aligns wrapped lines to the end of the
            container's cross axis.
            {'\n'}🔷 stretch (default value when using Yoga on the web):
            Stretches wrapped lines to match the height of the container's cross
            axis.
            {'\n'}🔷 center: Aligns wrapped lines in the center of the
            container's cross axis.
            {'\n'}🔷 space-between: Evenly spaces wrapped lines across the
            container's cross axis, distributing the remaining space between the
            lines.
            {'\n'}🔷 space-around: Evenly spaces wrapped lines across the
            container's cross axis, distributing the remaining space around the
            lines. Compared to space-between, using space-around will result in
            space being distributed to the beginning of the first line and the
            end of the last line.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            import type {PropsWithChildren} from 'react';
            
            const AlignContentLayout = () => {
              const [alignContent, setAlignContent] = useState('flex-start');
            
              return (
                <PreviewLayout
                  label="alignContent"
                  selectedValue={alignContent}
                  values={[
                    'flex-start',
                    'flex-end',
                    'stretch',
                    'center',
                    'space-between',
                    'space-around',
                  ]}
                  setSelectedValue={setAlignContent}>
                  <View style={[styles.box, {backgroundColor: 'orangered'}]} />
                  <View style={[styles.box, {backgroundColor: 'orange'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
                  <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'purple'}]} />
                </PreviewLayout>
              );
            };
            
            type PreviewLayoutProps = PropsWithChildren<{
              label: string;
              values: string[];
              selectedValue: string;
              setSelectedValue: (value: string) => void;
            }>;
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }: PreviewLayoutProps) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                flexWrap: 'wrap',
                marginTop: 8,
                backgroundColor: 'aliceblue',
                maxHeight: 400,
              },
              box: {
                width: 50,
                height: 80,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default AlignContentLayout;`}
            content2={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            
            const AlignContentLayout = () => {
              const [alignContent, setAlignContent] = useState('flex-start');
            
              return (
                <PreviewLayout
                  label="alignContent"
                  selectedValue={alignContent}
                  values={[
                    'flex-start',
                    'flex-end',
                    'stretch',
                    'center',
                    'space-between',
                    'space-around',
                  ]}
                  setSelectedValue={setAlignContent}>
                  <View style={[styles.box, {backgroundColor: 'orangered'}]} />
                  <View style={[styles.box, {backgroundColor: 'orange'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
                  <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'purple'}]} />
                </PreviewLayout>
              );
            };
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                flexWrap: 'wrap',
                marginTop: 8,
                backgroundColor: 'aliceblue',
                maxHeight: 400,
              },
              box: {
                width: 50,
                height: 80,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                alignSelf: 'flex-start',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default AlignContentLayout;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Flex Wrap:</Text28>
          <Text12>
            The flexWrap property is set on containers and it controls what
            happens when children overflow the size of the container along the
            main axis. By default, children are forced into a single line (which
            can shrink elements). If wrapping is allowed, items are wrapped into
            multiple lines along the main axis if needed. When wrapping lines,
            alignContent can be used to specify how the lines are placed in the
            container. Learn more here.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            import type {PropsWithChildren} from 'react';
            
            const FlexWrapLayout = () => {
              const [flexWrap, setFlexWrap] = useState('wrap');
            
              return (
                <PreviewLayout
                  label="flexWrap"
                  selectedValue={flexWrap}
                  values={['wrap', 'nowrap']}
                  setSelectedValue={setFlexWrap}>
                  <View style={[styles.box, {backgroundColor: 'orangered'}]} />
                  <View style={[styles.box, {backgroundColor: 'orange'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
                  <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'purple'}]} />
                </PreviewLayout>
              );
            };
            
            type PreviewLayoutProps = PropsWithChildren<{
              label: string;
              values: string[];
              selectedValue: string;
              setSelectedValue: (value: string) => void;
            }>;
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }: PreviewLayoutProps) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
                maxHeight: 400,
              },
              box: {
                width: 50,
                height: 80,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default FlexWrapLayout;`}
            content2={`import React, {useState} from 'react';
            import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
            
            const FlexWrapLayout = () => {
              const [flexWrap, setFlexWrap] = useState('wrap');
            
              return (
                <PreviewLayout
                  label="flexWrap"
                  selectedValue={flexWrap}
                  values={['wrap', 'nowrap']}
                  setSelectedValue={setFlexWrap}>
                  <View style={[styles.box, {backgroundColor: 'orangered'}]} />
                  <View style={[styles.box, {backgroundColor: 'orange'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
                  <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
                  <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
                  <View style={[styles.box, {backgroundColor: 'purple'}]} />
                </PreviewLayout>
              );
            };
            
            const PreviewLayout = ({
              label,
              children,
              values,
              selectedValue,
              setSelectedValue,
            }) => (
              <View style={{padding: 10, flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                  {values.map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setSelectedValue(value)}
                      style={[styles.button, selectedValue === value && styles.selected]}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
              </View>
            );
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                marginTop: 8,
                backgroundColor: 'aliceblue',
                maxHeight: 400,
              },
              box: {
                width: 50,
                height: 80,
              },
              row: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              button: {
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: 'oldlace',
                marginHorizontal: '1%',
                marginBottom: 6,
                minWidth: '48%',
                textAlign: 'center',
              },
              selected: {
                backgroundColor: 'coral',
                borderWidth: 0,
              },
              buttonLabel: {
                fontSize: 12,
                fontWeight: '500',
                color: 'coral',
              },
              selectedLabel: {
                color: 'white',
              },
              label: {
                textAlign: 'center',
                marginBottom: 10,
                fontSize: 24,
              },
            });
            
            export default FlexWrapLayout;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Going Deeper:</Text28>
          <Text12>
            Check out the interactive yoga playground that you can use to get a
            better understanding of flexbox.
            {'\n'}
            <OnWebsiteDocsLink
              name="yoga playground"
              link="https://yogalayout.dev/playground/"
            />
            {'\n'}
            {'\n'}We've covered the basics, but there are many other styles you
            may need for layouts. The full list of props that control layout is
            documented here.
            {'\n'}
            {'\n'}Additionally, you can see some examples from Wix Engineers.
            {'\n'}
            <OnWebsiteDocsLink
              name="Wix Engineers"
              link="https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c"
            />
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LayoutWithFlexbox;
