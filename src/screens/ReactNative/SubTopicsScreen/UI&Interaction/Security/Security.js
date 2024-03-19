import {View, Text, ScrollView, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../WorkFlow/Styles';
import {Text12, Text20, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import {Paths} from '../../../../../assets/images';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const Security = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Security</Text28>
          <Text12>
            Security is often overlooked when building apps. In this guide, you
            will learn about best practices for storing sensitive information,
            authentication, network security, and tools that will help you
            secure your app. This is not a preflight checklist—it is a catalogue
            of options, each of which will help further protect your app and
            users.
          </Text12>
          <Image
            source={Paths?.security?.security1}
            style={styles?.imgStyle}
            resizeMode="contain"
          />

          {/* STORING SENSITIVE DATA  */}
          <Text20>Storing Sensitive Info</Text20>
          <Text12>
            Avoid storing sensitive API keys directly in your app code, as they
            can be accessed in plain text. Tools like react-native-dotenv and
            react-native-config are useful for managing environment-specific
            variables but should not be used for storing secrets. Instead,
            consider building an orchestration layer like a serverless function
            (e.g., AWS Lambda or Google Cloud Functions) to handle requests
            requiring API keys or secrets securely. For persisted user data,
            choose appropriate storage based on sensitivity, whether it's for
            offline use, reducing network requests, or maintaining user sessions
            without frequent re-authentication.
          </Text12>

          {/* ASYNC STORAGE */}
          <Text20>Async Storage</Text20>
          <Text12>
            Async Storage is a community-maintained module for React Native that
            provides an asynchronous, unencrypted, key-value store. Async
            Storage is not shared between apps: every app has its own sandbox
            environment and has no access to data from other apps.
          </Text12>

          {/* SECURE STORAGE */}
          <Text20>Secure Storage</Text20>
          <Text12>
            React Native itself doesn't include built-in solutions for storing
            sensitive data, but there are existing options for iOS and Android
            platforms. For iOS: Keychain Services: Securely stores small pieces
            of sensitive information like certificates, tokens, and passwords.
            For Android: Secure Shared Preferences: Android's persistent
            key-value data store, with options like Encrypted Shared Preferences
            for automatic encryption. Keystore: Stores cryptographic keys in a
            container for added security. To use these solutions in React
            Native, you can either build a bridge yourself or use libraries that
            wrap them and provide a unified API. Some libraries to consider are
            expo-secure-store, react-native-encrypted-storage,
            react-native-keychain, react-native-sensitive-info, and
            redux-persist-sensitive-storage. Note that some libraries might use
            less secure options on Android, so choose carefully based on your
            needs.
          </Text12>

          {/* Authentication and Deep Linking */}
          <Text20>Authentication and Deep Linking</Text20>
          <Text12>
            Mobile apps face a unique vulnerability called deep linking, where
            data is sent directly to a native application from an external
            source using a scheme like app://. While similar to web URLs, deep
            links lack a centralized registration method, making them insecure.
            Malicious apps can hijack these links, compromising sensitive data.
            While Android prompts users to choose an app when multiple are
            available, iOS automatically selects one, potentially exposing
            users. To address this, iOS introduced universal links for secure
            app linking.
          </Text12>
          <Image
            source={Paths?.security?.security2}
            style={styles?.imgStyle}
            resizeMode="contain"
          />

          {/* OAuth2 and Redirects */}
          <Text20>OAuth2 and Redirects</Text20>
          <Text12>
            The OAuth2 authentication protocol, widely used today, involves the
            user authenticating via a third party who then redirects back to the
            app with a verification code. This code can be exchanged for a JWT
            (JSON Web Token), which securely transmits information between
            parties on the web. However, in apps, the lack of centralized URL
            registration poses a security risk during redirection. To address
            this, an additional security measure called PKCE (Proof of Key Code
            Exchange) is added to OAuth2. PKCE verifies that the authentication
            and token exchange requests originate from the same client using the
            SHA 256 Cryptographic Hash Algorithm. This algorithm generates
            unique, irreversible signatures for data, ensuring only the
            initiating app can successfully exchange the verification code for a
            JWT, even if intercepted by a malicious app.A library to consider
            for native OAuth is
          </Text12>
          <OnWebsiteDocsLink
            name="react-native-app-auth"
            link={'https://github.com/FormidableLabs/react-native-app-auth'}
          />
          <Image
            source={Paths?.security?.security3}
            style={styles?.imgStyle}
            resizeMode="contain"
          />

          {/* SSL Pinning*/}
          <Text20>SSL Pinning</Text20>
          <Text12>
            Even with HTTPS endpoints, data can still be vulnerable to
            interception if a malicious root CA certificate is installed on the
            user's device. SSL pinning is a client-side technique that mitigates
            this risk by embedding a list of trusted certificates during
            development. This ensures that only requests signed with one of
            these trusted certificates are accepted, preventing acceptance of
            self-signed certificates. While there's no foolproof security
            method, investing in security measures proportional to data
            sensitivity and potential damage from a breach can significantly
            reduce the risk. Remember, it's harder to access information that
            was never requested.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Security;
