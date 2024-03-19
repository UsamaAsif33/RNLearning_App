import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const UsingTypeScript = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Using TypeScript:</Text28>
          <Text12>
            TypeScript is a language which extends JavaScript by adding type
            definitions. New React Native projects target TypeScript by default,
            but also support JavaScript and Flow.
            {'\n'}
            <OnWebsiteDocsLink
              name="TypeScript"
              link="https://www.typescriptlang.org/"
            />
          </Text12>

          <Text28>{'\n'}Getting Started with TypeScript:</Text28>
          <Text12>
            New projects created by the React Native CLI or popular templates
            like Ignite will use TypeScript by default.
            {'\n'}
            <OnWebsiteDocsLink
              name="Ignite"
              link="https://github.com/infinitered/ignite"
            />
            {'\n'}
            TypeScript may also be used with Expo, which maintains TypeScript
            templates, or will prompt you to automatically install and configure
            TypeScript when a .ts or .tsx file is added to your project.
            {'\n'}
            <OnWebsiteDocsLink name="Expo" link="https://expo.dev/" />
          </Text12>
          <CopyAbleText content={`npx create-expo-app --template`} />

          <Text28>{'\n'}Adding TypeScript to an Existing Project:</Text28>
          <Text12>
            1. Add TypeScript, types, and ESLint plugins to your project.
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript`}
            content2={`yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript`}
            buttonLabel1={`npm`}
            buttonLabel2={`yarn`}
          />

          <Text12>
            2. Add a TypeScript config file. Create a tsconfig.json in the root
            of your project:
          </Text12>
          <CopyAbleText
            content={`{
              "extends": "@tsconfig/react-native/tsconfig.json"
            }`}
          />

          <Text12>
            3. Rename a JavaScript file to be *.tsx
            {'\n'} 4. Run yarn tsc to type-check your new TypeScript files.
          </Text12>

          <Text28>{'\n'}Using JavaScript Instead of TypeScript:</Text28>
          <Text12>
            React Native defaults new applications to TypeScript, but JavaScript
            may still be used. Files with a .jsx extension are treated as
            JavaScript instead of TypeScript, and will not be typechecked.
            JavaScript modules may still be imported by TypeScript modules,
            along with the reverse.
          </Text12>

          <Text28>{'\n'}How TypeScript and React Native works:</Text28>
          <Text12>
            Out of the box, TypeScript sources are transformed by Babel during
            bundling. We recommend that you use the TypeScript compiler only for
            type checking. This is the default behavior of tsc for newly created
            applications. If you have existing TypeScript code being ported to
            React Native, there are one or two caveats to using Babel instead of
            TypeScript.
            {'\n'}
            <OnWebsiteDocsLink
              name="one or two caveats"
              link="https://babeljs.io/docs/babel-plugin-transform-typescript"
            />
          </Text12>

          <Text28>{'\n'}What does React Native + TypeScript look like:</Text28>
          <Text12>
            You can provide an interface for a React Component's Props and State
            via React.Component Props and State which will provide type-checking
            and editor auto-completing when working with that component in JSX.
          </Text12>
          <CopyAbleText
            content={`import React from 'react';
            import {Button, StyleSheet, Text, View} from 'react-native';
            
            export type Props = {
              name: string;
              baseEnthusiasmLevel?: number;
            };
            
            const Hello: React.FC<Props> = ({
              name,
              baseEnthusiasmLevel = 0,
            }) => {
              const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
                baseEnthusiasmLevel,
              );
            
              const onIncrement = () =>
                setEnthusiasmLevel(enthusiasmLevel + 1);
              const onDecrement = () =>
                setEnthusiasmLevel(
                  enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
                );
            
              const getExclamationMarks = (numChars: number) =>
                numChars > 0 ? Array(numChars + 1).join('!') : '';
            
              return (
                <View style={styles.container}>
                  <Text style={styles.greeting}>
                    Hello {name}
                    {getExclamationMarks(enthusiasmLevel)}
                  </Text>
                  <View>
                    <Button
                      title="Increase enthusiasm"
                      accessibilityLabel="increment"
                      onPress={onIncrement}
                      color="blue"
                    />
                    <Button
                      title="Decrease enthusiasm"
                      accessibilityLabel="decrement"
                      onPress={onDecrement}
                      color="red"
                    />
                  </View>
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              greeting: {
                fontSize: 20,
                fontWeight: 'bold',
                margin: 16,
              },
            });
            
            export default Hello;`}
          />
          <Text12>
            You can explore the syntax more in the TypeScript playground.
            {'\n'}
            <OnWebsiteDocsLink
              name="TypeScript playground"
              link="https://www.typescriptlang.org/play?strictNullChecks=false&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteILBI4ABRxgAznAC8DKnBwpiBIAFxwnjBQwBwA5hSUgQBGKJ5IAKIcMGLMnsCpIAAySFZCAPzhHMwgSUhQCZq2lGickXAAEkhCQhDhyIYAdABiAMIAPO4QXgB8vnAAFPRBKCE8KWmZ2bn5nkUlXXMADHCaAJS+s-QBcC0cbQDaSFk5eQXFpTxpMJsvO3ulAF05v0MANcqIYGYkPN1hlnts3vshKcEtdbm1OABJDhoIghLJzebnHyzL4-BG7d5deZPLavSlIuAAajgAEYUWjWvBOAARJC4pD4+B+IkXCJScn0-7U2m-RGlOCzY5lOCyinSoRwIxsuDhQ4cyicu7wWIS+RoIQrMzATgAWRQUAA1t4RVUQCMxA7PJVqrUoMTZm6PV7FXBlXAAIJQKAoATzIOeqDeFnsgYAKwgMXm+AAhPhzuF8DZDYk4EQYMwoBwFtdAmNVBoIoIRD56JFhEhPANbpCYnVNNNa4E4GM5Iomx3W+2RF3YkQpDFYgOh8OOl0evR8ARGqXV4F6MEkDu98P6KbvubLSBrXaHc6afCpVTkce92MAPRjmCD3fD+tqdQfxPOsWDYTgVz3cwYBbAAibEBVSFw1SlGCINXdA0E7PIkmAIRgEEQoUFqIQfBgmIBSFVDfxPTh3Cw1ssRxPFaVfYCbggHooFIpIhGYJAqLY98gOAsZQPYDg0OHKDYL5BC0lVR8-gEti4AwrDgBwvCCKIrpSIAE35ZismUtjaKITxPAYjhZKMmBWOAlpONIog9JMvchIgj8G0AocvIA4SDU0VFmi5CcZzmfgO3ESQYG7AwYGhK5Sx7FA+ygcIktXTARHkcJWS4IcUDw2IOExBKQG9OAYMwrI6hggrfzTXJzEwAQRk4BKsnCaraTq65NAawI5xixcMqHTAOt4YAAC8wjgAAmQ5BuHCasgAdSQYBYjEGBCySDi9PwZbAmvKBYhiPKADZloGqgzmC+xoHgAzMBQZghHgTpuggBIgA"
            />
          </Text12>

          <Text28>{'\n'}Where to Find Useful Advice</Text28>
          <OnWebsiteDocsLink
            name="TypeScript Handbook"
            link="https://www.typescriptlang.org/docs/handbook/intro.html"
          />
          <OnWebsiteDocsLink
            name="React's documentation on TypeScript"
            link="https://legacy.reactjs.org/docs/static-type-checking.html#typescript"
          />
          <OnWebsiteDocsLink
            name="React + TypeScript Cheatsheets"
            link="https://reactnative.dev/docs/typescript?package-manager=yarn#using-javascript-instead-of-typescript"
          />

          <Text28>{'\n'}Using Custom Path Aliases with TypeScript:</Text28>
          <Text12>
            To use custom path aliases with TypeScript, you need to set the path
            aliases to work from both Babel and TypeScript. Here's how:
            {'\n'}
            {'\n'}1. Edit your tsconfig.json to have your custom path mappings.
            Set anything in the root of src to be available with no preceding
            path reference, and allow any test file to be accessed by using
            tests/File.tsx:
            {'\n'}
            <OnWebsiteDocsLink
              name="custom path mappings"
              link="https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution"
            />
          </Text12>
          <CopyAbleText
            content={`{
              -  "extends": "@tsconfig/react-native/tsconfig.json"
              +  "extends": "@tsconfig/react-native/tsconfig.json",
              +  "compilerOptions": {
              +    "baseUrl": ".",
              +    "paths": {
              +      "*": ["src/*"],
              +      "tests": ["tests/*"],
              +      "@components/*": ["src/components/*"],
              +    },
              +  }
              }`}
          />

          <Text12>
            {'\n'}2. Add babel-plugin-module-resolver as a development package
            to your project:
            {'\n'}
            <OnWebsiteDocsLink
              name="babel-plugin-module-resolver"
              link="https://github.com/tleunen/babel-plugin-module-resolver"
            />
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm install --save-dev babel-plugin-module-resolver`}
            content2={`yarn add --dev babel-plugin-module-resolver`}
            buttonLabel1={`npm`}
            buttonLabel2={`yarn`}
          />

          <Text12>
            {'\n'}3. Finally, configure your babel.config.js (note that the
            syntax for your babel.config.js is different from your
            tsconfig.json):
          </Text12>
          <CopyAbleText
            content={`{
              presets: ['module:metro-react-native-babel-preset'],
           +  plugins: [
           +    [
           +       'module-resolver',
           +       {
           +         root: ['./src'],
           +         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
           +         alias: {
           +           tests: ['./tests/'],
           +           "@components": "./src/components",
           +         }
           +       }
           +    ]
           +  ]
           }`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsingTypeScript;
