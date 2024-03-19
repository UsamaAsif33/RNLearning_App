import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from './Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const HandlingTextInput = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Handling Text Input:</Text28>
          <Text12>
            The TextInput Core Component in React Native facilitates user text
            input and offers props like onChangeText and onSubmitEditing for
            handling text changes and submission. It can be utilized for various
            purposes, such as real-time translation or input validation.
            Additionally, storing text input in the component's state enables
            dynamic updates, enhancing user interaction within the app.
          </Text12>
          <CopyAbleText
            content={`import React, {useState} from 'react';\n\nimport {Text, TextInput, View} from 'react-native';\n\nconst PizzaTranslator = () => {\n\nconst [text, setText] = useState('');\n\nreturn(\n<View style={{padding: 10}}>\n\n<TextInput\nstyle={{height: 40}}\nplaceholder="Type here to translate!"\nonChangeText={newText => setText(newText)}\ndefaultValue={text}\n\n/>\n<Text style={{padding: 10, fontSize: 42}}>\n\n{text\n.split(' ')\n.map(word => word && '🍕')\n.join(' ')}\n\n</Text>\n</View>\n);\n};\nexport default PizzaTranslator;`}
          />
          <Text12>
            The example showcases dynamic text storage in the state. Further
            text input manipulation, like validation during typing, is possible.
            For detailed guidance, refer to React documentation on controlled
            components or the TextInput reference docs.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HandlingTextInput;
