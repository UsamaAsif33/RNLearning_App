import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const Networking = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Networking :</Text28>
          <Text12>
            Many mobile apps need to load resources from a remote URL. You may
            want to make a POST request to a REST API, or you may need to fetch
            a chunk of static content from another server.
          </Text12>

          <Text28>{'\n'}Using Fetch:</Text28>
          <Text12>
            React Native provides the Fetch API for your networking needs. Fetch
            will seem familiar if you have used XMLHttpRequest or other
            networking APIs before. You may refer to MDN's guide on Using Fetch
            for additional information.
            {'\n'}
            <OnWebsiteDocsLink
              name="Fetch API"
              link="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            />
          </Text12>

          <Text28>{'\n'}Making requests:</Text28>
          <Text12>
            In order to fetch content from an arbitrary URL, you can pass the
            URL to fetch:
          </Text12>
          <CopyAbleText
            content={`fetch('https://mywebsite.com/mydata.json');`}
          />

          <Text12>
            Fetch also takes an optional second argument that allows you to
            customize the HTTP request. You may want to specify additional
            headers, or make a POST request:
          </Text12>
          <CopyAbleText
            content={`fetch('https://mywebsite.com/endpoint/', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
              }),
            });`}
          />
          <Text12>
            Take a look at the Fetch Request docs for a full list of properties.
            {'\n'}
            <OnWebsiteDocsLink
              name="Fetch Request docs"
              link="https://developer.mozilla.org/en-US/docs/Web/API/Request"
            />
          </Text12>

          <Text28>{'\n'}Handling the response:</Text28>
          <Text12>
            The above examples show how you can make a request. In many cases,
            you will want to do something with the response.
            {'\n'}
            {'\n'}Networking is an inherently asynchronous operation. Fetch
            method will return a Promise that makes it straightforward to write
            code that works in an asynchronous manner:
            {'\n'}
            <OnWebsiteDocsLink
              name="Promise"
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
            />
          </Text12>
          <CopyAbleText
            content={`const getMoviesFromApi = () => {
              return fetch('https://reactnative.dev/movies.json')
                .then(response => response.json())
                .then(json => {
                  return json.movies;
                })
                .catch(error => {
                  console.error(error);
                });
            };`}
          />
          <Text12>
            You can also use the async / await syntax in a React Native app:
          </Text12>
          <CopyAbleText
            content={`const getMoviesFromApiAsync = async () => {
              try {
                const response = await fetch(
                  'https://reactnative.dev/movies.json',
                );
                const json = await response.json();
                return json.movies;
              } catch (error) {
                console.error(error);
              }
            };`}
          />
          <Text12>
            Don't forget to catch any errors that may be thrown by fetch,
            otherwise they will be dropped silently.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;`}
            content2={`import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Using Other Networking Libraries:</Text28>
          <Text12>
            The XMLHttpRequest API is built into React Native. This means that
            you can use third party libraries such as frisbee or axios that
            depend on it, or you can use the XMLHttpRequest API directly if you
            prefer.
            {'\n'}
            <OnWebsiteDocsLink
              name=" XMLHttpRequest API"
              link="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
            />{' '}
            {'\n'}
            <OnWebsiteDocsLink
              name="frisbee"
              link="https://github.com/ladjs/frisbee"
            />{' '}
            {'\n'}
            <OnWebsiteDocsLink
              name="axios"
              link="https://github.com/axios/axios"
            />
          </Text12>
          <CopyAbleText
            content={`const request = new XMLHttpRequest();
            request.onreadystatechange = e => {
              if (request.readyState !== 4) {
                return;
              }
            
              if (request.status === 200) {
                console.log('success', request.responseText);
              } else {
                console.warn('error');
              }
            };
            
            request.open('GET', 'https://mywebsite.com/endpoint/');
            request.send();}`}
          />

          <Text28>{'\n'}WebSocket Support:</Text28>
          <Text12>
            React Native also supports WebSockets, a protocol which provides
            full-duplex communication channels over a single TCP connection.
            {'\n'}{' '}
            <OnWebsiteDocsLink
              name="WebSockets"
              link="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"
            />
          </Text12>
          <CopyAbleText
            content={`const ws = new WebSocket('ws://host.com/path');

            ws.onopen = () => {
              // connection opened
              ws.send('something'); // send a message
            };
            
            ws.onmessage = e => {
              // a message was received
              console.log(e.data);
            };
            
            ws.onerror = e => {
              // an error occurred
              console.log(e.message);
            };
            
            ws.onclose = e => {
              // connection closed
              console.log(e.code, e.reason);
            };;`}
          />

          <Text28>{'\n'}Configuring NSURLSession on iOS:</Text28>
          <Text12>
            For some applications it may be appropriate to provide a custom
            NSURLSessionConfiguration for the underlying NSURLSession that is
            used for network requests in a React Native application running on
            iOS. For instance, one may need to set a custom user agent string
            for all network requests coming from the app or supply NSURLSession
            with an ephemeral NSURLSessionConfiguration. The function
            RCTSetCustomNSURLSessionConfigurationProvider allows for such
            customization. Remember to add the following import to the file in
            which RCTSetCustomNSURLSessionConfigurationProvider will be called:
          </Text12>
          <CopyAbleText content={`#import <React/RCTHTTPRequestHandler.h>`} />

          <Text12>
            RCTSetCustomNSURLSessionConfigurationProvider should be called early
            in the application life cycle such that it is readily available when
            needed by React, for instance:
          </Text12>
          <CopyAbleText
            content={`-(void)application:(__unused UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

              // set RCTSetCustomNSURLSessionConfigurationProvider
              RCTSetCustomNSURLSessionConfigurationProvider(^NSURLSessionConfiguration *{
                 NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
                 // configure the session
                 return configuration;
              });
            
              // set up React
              _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
            };`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Networking;
