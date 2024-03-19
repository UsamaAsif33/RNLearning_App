import {Image, Linking, SafeAreaView, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import styles from './Styles';
import {Text12, Text24, Text28} from '../../../../components/Text';
import {Paths} from '../../../../assets/images';
import Header from '../../../../components/Header/Header';
import {OnWebsiteDocsLink} from '../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../components/CopyAbleText/CopyAbleText';

const Testing = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Testing:</Text28>
          <Text12>
            In this guide, we will cover different, automated ways to ensure
            your app works as expected, ranging from static analysis to
            end-to-end tests.
          </Text12>
          <Image style={styles.imgStyle} source={Paths?.Testing.testing} />
          {/* Static Analysis */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Static Analysis</Text24>
          <Text12>
            To enhance your code quality, consider using static analysis tools
            as a first step. These tools check your code for errors without
            executing it. Linters identify common errors like unused code and
            enforce style guide rules such as indentation preferences. Type
            checking ensures that function arguments match their expected types,
            preventing mismatched data types. React Native includes ESLint for
            linting and TypeScript for type checking out of the box, making it
            easy to integrate these tools into your development workflow.
          </Text12>

          {/* Writing Testable Code */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Writing Testable Code</Text24>
          <Text12>
            To make your app more testable, start by separating the view part of
            your app—your React components—from your business logic and app
            state (regardless of whether you use Redux, MobX or other
            solutions). This way, you can keep your business logic testing—which
            shouldn’t rely on your React components—independent of the
            components themselves, whose job is primarily rendering your app’s
            UI!
          </Text12>

          {/* Writing Tests */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Writing Tests</Text24>
          <Text12>
            After making your code testable, it's time to write actual tests!
            React Native's default template comes with the Jest testing
            framework, allowing you to start writing tests without much setup.
            You can use Jest for all types of tests discussed in this guide
          </Text12>

          {/* Structuring Tests */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Structuring Tests</Text24>
          <Text12>
            Keep your tests short and focused on testing only one aspect. Use
            clear descriptions for your tests, following the "Given, When, Then"
            pattern (also known as AAA: Arrange, Act, Assert). Group related
            tests using the describe function in Jest, and use beforeEach or
            beforeAll for setup. Split tests into smaller ones if they have many
            steps or expectations, ensuring they are independent and executable
            on their own. Embrace failed tests as opportunities to improve your
            code before impacting users. Read more in the
          </Text12>
          <OnWebsiteDocsLink
            name="Jest api reference"
            link={'https://jestjs.io/docs/api'}
          />

          {/* Unit Tests */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Unit Tests</Text24>
          <Text12>
            Unit tests focus on small parts of code, like functions or classes.
            When testing objects with dependencies, consider mocking them out.
            Unit tests are quick to write and run, providing fast feedback on
            your code's status. Jest even offers an option to continuously run
            tests related to the code you're editing.
          </Text12>
          <OnWebsiteDocsLink
            name="Watch Mode"
            link={'https://jestjs.io/docs/cli#watch'}
          />

          <Image
            style={{width: 300, height: 100, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.Testing.UnitTest}
          />

          {/* Mocking */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Mocking</Text24>
          <Text12>
            Particularly when dealing with external dependencies in JavaScript
            applications. It emphasizes that while using real objects is
            generally preferred, there are scenarios where it's impractical or
            impossible, such as when relying on native modules like Java or
            Objective-C in JS unit tests. It presents an example scenario of
            developing a weather app that depends on an external weather
            service. Mocking is suggested to avoid issues like slow and unstable
            tests due to network requests, unpredictable data returned by the
            service, and the risk of third-party services going offline during
            testing. By providing a mock implementation of the weather service,
            developers can replace actual dependencies with controlled
            alternatives, ensuring more efficient and reliable testing
            processes.
          </Text12>

          {/* Integration Tests */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Integration Tests</Text24>
          <Text12>
            When writing larger software systems, individual pieces of it need
            to interact with each other. In unit testing, if your unit depends
            on another one, you’ll sometimes end up mocking the dependency,
            replacing it with a fake one. In integration testing, real
            individual units are combined (same as in your app) and tested
            together to ensure that their cooperation works as expected. This is
            not to say that mocking does not happen here: you’ll still need
            mocks (for example, to mock communication with a weather service),
            but you'll need them much less than in unit testing.
          </Text12>
          <Image
            style={{width: 300, height: 60, marginTop: hp('2')}}
            source={Paths?.Testing.IntegrationTests}
          />

          {/* Component Tests */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Component Tests</Text24>
          <Text12>
            React components are crucial for rendering the UI in an app, and
            their correctness directly impacts user interaction. Component
            testing in React Native is vital, covering both unit and integration
            aspects separately due to their significance. Two main areas of
            focus in testing React components are interaction and rendering.
            Interaction testing ensures correct behavior when users interact
            with components (e.g., button press handling). Rendering testing
            verifies the accuracy of the component's output rendered by React
            (e.g., appearance and placement of UI elements). An example scenario
            involves testing a button component with an onPress listener to
            ensure both proper appearance and handling of user taps.
            {'\n'}
            {'\n'}
            There are several libraries that can help you testing these:
          </Text12>
          <OnWebsiteDocsLink
            name="Test Renderer"
            link={'https://legacy.reactjs.org/docs/test-renderer.html'}
          />
          <OnWebsiteDocsLink
            name="React Native Testing Library"
            link={'https://callstack.github.io/react-native-testing-library/'}
          />
          <Image
            style={{width: 300, height: 70, marginTop: hp('2')}}
            source={Paths?.Testing.ComponentTests}
          />

          {/* Testing User Interactions */}
          <Text24 textStyle={styles?.txt24}>{'\n'}Component Tests</Text24>
          <Text12>
            Aside from rendering some UI, your components handle events like
            onChangeText for TextInput or onPress for Button. They may also
            contain other functions and event callbacks. Consider the following
            example:
          </Text12>
          <CopyAbleText
            content={`function GroceryShoppingList() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <>
      <TextInput
        value={groceryItem}
        placeholder="Enter grocery item"
        onChangeText={text => setGroceryItem(text)}
      />
      <Button
        title="Add the item to list"
        onPress={addNewItemToShoppingList}
      />
      {items.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
}`}
          />

          <Text12>
            Component testing libraries such as React Native Testing Library
            facilitate writing user-centric tests by careful choice of provided
            APIs. The following example uses fireEvent methods changeText and
            press that simulate a user interacting with the component and a
            query function getAllByText that finds matching Text nodes in the
            rendered output.
          </Text12>
          <CopyAbleText
            content={`test('given empty GroceryShoppingList, user can add an item to it', () => {
              const {getByPlaceholderText, getByText, getAllByText} = render(
                <GroceryShoppingList />,
              );
            
              fireEvent.changeText(
                getByPlaceholderText('Enter grocery item'),
                'banana',
              );
              fireEvent.press(getByText('Add the item to list'));
            
              const bananaElements = getAllByText('banana');
              expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
            });`}
          />

          {/* Testing Rendered Output */}
          <Text24 textStyle={styles?.txt24}>
            {'\n'}Testing Rendered Output
          </Text24>
          <Text12>
            Snapshot testing testing is an advanced kind of testing enabled by
            Jest. It is a very powerful and low-level tool, so extra attention
            is advised when using it. A "component snapshot" is a JSX-like
            string created by a custom React serializer built into Jest. This
            serializer lets Jest translate React component trees to string
            that's human-readable. Put another way: a component snapshot is a
            textual representation of your component’s render output generated
            during a test run. It may look like this:
            <OnWebsiteDocsLink
              name="Snapshot testing"
              link="https://jestjs.io/docs/snapshot-testing"
            />
          </Text12>
          <CopyAbleText
            content={`<Text
            style={
              Object {
                "fontSize": 20,
                "textAlign": "center",
              }
            }>
            Welcome to React Native!
          </Text>`}
          />
          <Text12>
            Snapshot testing involves generating and saving a reference snapshot
            of a component's render output to a file in the repository. When
            changes occur in the component's render output, the snapshot test
            fails, indicating potential issues. Weak points of snapshot testing
            include difficulty in discerning intentional changes from bugs,
            especially in large snapshots, and the temptation to update
            snapshots without proper investigation. Snapshots don't guarantee
            correct render logic; they primarily guard against unexpected
            changes and validate expected props. It's recommended to use small
            snapshots and resort to snapshot-diff for testing changes between
            component states. Explicit expectations are preferred when
            uncertain.
          </Text12>
          <Image
            style={{width: 300, height: 90, marginTop: hp('2')}}
            source={Paths?.Testing.TestingRenderedOutput}
          />

          {/* End-to-End Tests */}
          <Text24 textStyle={styles?.txt24}>{'\n'}End-to-End Tests</Text24>
          <Text12>
            End-to-end (E2E) tests focus on verifying app functionality from the
            user's perspective on a device or simulator/emulator. E2E tests
            involve building the app in release configuration and testing
            against it, without direct access to React components, Redux stores,
            or business logic. E2E testing libraries enable interaction with app
            elements like buttons and text inputs, allowing for assertions about
            element existence, visibility, and content. E2E tests provide high
            confidence in app functionality but have tradeoffs including higher
            time consumption, slower execution, and increased flakiness. Vital
            parts of the app such as authentication flow and core
            functionalities should be covered with E2E tests, while non-critical
            areas can utilize faster JavaScript tests. Adding more tests
            increases confidence but also requires more maintenance and
            execution time; thus, tradeoffs should be considered based on
            project needs.
            {'\n'}
            {'\n'}
            There are several E2E testing tools available:
            {'\n'}
            <OnWebsiteDocsLink
              name="Detox "
              link="https://github.com/wix/detox/"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="Appium "
              link="https://appium.io/docs/en/latest/"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="Maestro "
              link="https://maestro.mobile.dev/"
            />
          </Text12>

          <Image
            style={{width: 300, height: 140, marginTop: hp('2')}}
            source={Paths?.Testing.EndToEndTests}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Testing;
