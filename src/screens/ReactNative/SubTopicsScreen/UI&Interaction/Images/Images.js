import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const Images = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Images</Text28>
          <Text28>{'\n'}Static Image Resources:</Text28>
          <Text12>
            React Native provides a unified way of managing images and other
            media assets in your Android and iOS apps. To add a static image to
            your app, place it somewhere in your source code tree and reference
            it like this:
          </Text12>

          <CopyAbleText
            content={`<Image source={require('./my-icon.png')} />`}
          />

          <Text12>
            The image name is resolved the same way JS modules are resolved. In
            the example above, the bundler will look for my-icon.png in the same
            folder as the component that requires it. You can use the @2x and
            @3x suffixes to provide images for different screen densities. If
            you have the following file structure:
          </Text12>

          <CopyAbleText
            content={`.
            ├── button.js
            └── img
                ├── check.png
                ├── check@2x.png
                └── check@3x.png`}
          />

          <Text12>...and button.js code contains:</Text12>

          <CopyAbleText
            content={`<Image source={require('./img/check.png')} />`}
          />

          <Text12>
            ...the bundler will bundle and serve the image corresponding to
            device's screen density. For example, check@2x.png, will be used on
            an iPhone 7, whilecheck@3x.png will be used on an iPhone 7 Plus or a
            Nexus 5. If there is no image matching the screen density, the
            closest best option will be selected.
            {'\n'}
            {'\n'}On Windows, you might need to restart the bundler if you add
            new images to your project.
            {'\n'}
            {'\n'}Here are some benefits that you get:
            {'\n'}
            {'\n'}1. Same system on Android and iOS.
            {'\n'}2. Images live in the same folder as your JavaScript code.
            Components are self-contained.
            {'\n'}3. No global namespace, i.e. you don't have to worry about
            name collisions.
            {'\n'}4. Only the images that are actually used will be packaged
            into your app.
            {'\n'}5. Adding and changing images doesn't require app
            recompilation, you can refresh the simulator as you normally do.
            {'\n'}6. The bundler knows the image dimensions, no need to
            duplicate it in the code.
            {'\n'}7. Images can be distributed via npm packages.
            {'\n'}
            {'\n'}In order for this to work, the image name in require has to be
            known statically.
          </Text12>

          <CopyAbleText
            content={`// GOOD
            <Image source={require('./my-icon.png')} />;
            
            // BAD
            const icon = this.props.active
              ? 'my-icon-active'
              : 'my-icon-inactive';
            <Image source={require('./' + icon + '.png')} />;
            
            // GOOD
            const icon = this.props.active
              ? require('./my-icon-active.png')
              : require('./my-icon-inactive.png');
            <Image source={icon} />;`}
          />
          <Text12>
            Note that image sources required this way include size (width,
            height) info for the Image. If you need to scale the image
            dynamically (i.e. via flex), you may need to manually set width:
            undefined, height: undefined on the style attribute.
          </Text12>

          <Text28>{'\n'}Static Non-Image Resources:</Text28>
          <Text12>
            The require syntax described above can be used to statically include
            audio, video or document files in your project as well. Most common
            file types are supported including .mp3, .wav, .mp4, .mov, .html and
            .pdf. See bundler defaults for the full list.
            {'\n'}
            {'\n'}You can add support for other types by adding an assetExts
            resolver option in your Metro configuration.
            {'\n'}
            {'\n'}A caveat is that videos must use absolute positioning instead
            of flexGrow, since size info is not currently passed for non-image
            assets. This limitation doesn't occur for videos that are linked
            directly into Xcode or the Assets folder for Android.
          </Text12>

          <Text28>{'\n'}Images From Hybrid App's Resources:</Text28>
          <Text12>
            If you are building a hybrid app (some UIs in React Native, some UIs
            in platform code) you can still use images that are already bundled
            into the app.
            {'\n'}
            {'\n'}For images included via Xcode asset catalogs or in the Android
            drawable folder, use the image name without the extension:
          </Text12>

          <CopyAbleText
            content={`<Image
            source={{uri: 'app_icon'}}
            style={{width: 40, height: 40}}
          />`}
          />

          <Text12>
            For images in the Android assets folder, use the asset:/ scheme:
          </Text12>

          <CopyAbleText
            content={`<Image
            source={{uri: 'app_icon'}}
            style={{width: 40, height: 40}}
          />`}
          />

          <Text28>{'\n'}Network Images</Text28>
          <Text12>
            Many of the images you will display in your app will not be
            available at compile time, or you will want to load some dynamically
            to keep the binary size down. Unlike with static resources, you will
            need to manually specify the dimensions of your image. It's highly
            recommended that you use https as well in order to satisfy App
            Transport Security requirements on iOS.
          </Text12>

          <CopyAbleText
            content={`// GOOD
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                   style={{width: 400, height: 400}} />
            
            // BAD
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} />>`}
          />

          <Text28>{'\n'}Network Requests for Images</Text28>
          <Text12>
            If you would like to set such things as the HTTP-Verb, Headers or a
            Body along with the image request, you may do this by defining these
            properties on the source object:
          </Text12>

          <CopyAbleText
            content={`<Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{width: 400, height: 400}}
          />`}
          />

          <Text28>{'\n'}URI Data Images</Text28>
          <Text12>
            Sometimes, you might be getting encoded image data from a REST API
            call. You can use the 'data:' URI scheme to use these images. Same
            as for network resources, you will need to manually specify the
            dimensions of your image.
          </Text12>

          <CopyAbleText
            content={`// include at least width and height!
            <Image
              style={{
                width: 51,
                height: 51,
                resizeMode: 'contain',
              }}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />`}
          />

          <Text28>{'\n'}Cache Control (iOS Only)</Text28>
          <Text12>
            In some cases you might only want to display an image if it is
            already in the local cache, i.e. a low resolution placeholder until
            a higher resolution is available. In other cases you do not care if
            the image is outdated and are willing to display an outdated image
            to save bandwidth. The cache source property gives you control over
            how the network layer interacts with the cache.
            {'\n'} {'\n'}🔷 default: Use the native platforms default strategy.
            {'\n'}🔷 reload: The data for the URL will be loaded from the
            originating source. No existing cache data should be used to satisfy
            a URL load request.
            {'\n'}🔷 force-cache: The existing cached data will be used to
            satisfy the request, regardless of its age or expiration date. If
            there is no existing data in the cache corresponding the request,
            the data is loaded from the originating source.
            {'\n'}🔷 only-if-cached: The existing cache data will be used to
            satisfy a request, regardless of its age or expiration date. If
            there is no existing data in the cache corresponding to a URL load
            request, no attempt is made to load the data from the originating
            source, and the load is considered to have failed.
          </Text12>

          <CopyAbleText
            content={`<Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
              cache: 'only-if-cached',
            }}
            style={{width: 400, height: 400}}
          />`}
          />

          <Text28>{'\n'}Best Camera Roll Image</Text28>
          <Text12>
            iOS saves multiple sizes for the same image in your Camera Roll, it
            is very important to pick the one that's as close as possible for
            performance reasons. You wouldn't want to use the full quality
            3264x2448 image as source when displaying a 200x200 thumbnail. If
            there's an exact match, React Native will pick it, otherwise it's
            going to use the first one that's at least 50% bigger in order to
            avoid blur when resizing from a close size. All of this is done by
            default so you don't have to worry about writing the tedious (and
            error prone) code to do it yourself.
          </Text12>

          <Text28>{'\n'}Why Not Automatically Size Everything?</Text28>
          <Text12>
            In the browser if you don't give a size to an image, the browser is
            going to render a 0x0 element, download the image, and then render
            the image based with the correct size. The big issue with this
            behavior is that your UI is going to jump all around as images load,
            this makes for a very bad user experience. In React Native this
            behavior is intentionally not implemented. It is more work for the
            developer to know the dimensions (or aspect ratio) of the remote
            image in advance, but we believe that it leads to a better user
            experience. Static images loaded from the app bundle via the
            require('./my-icon.png') syntax can be automatically sized because
            their dimensions are available immediately at the time of mounting.
            For example, the result of require('./my-icon.png') might be:
          </Text12>

          <CopyAbleText
            content={`{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}`}
          />

          <Text28>{'\n'}Source as an object</Text28>
          <Text12>
            In React Native, one interesting decision is that the src attribute
            is named source and doesn't take a string but an object with a uri
            attribute.
          </Text12>

          <CopyAbleText content={`<Image source={{uri: 'something.jpg'}} />`} />
          <Text12>
            On the infrastructure side, the reason is that it allows us to
            attach metadata to this object. For example if you are using
            require('./my-icon.png'), then we add information about its actual
            location and size don't rely on this fact, it might change in the
            future!. This is also future proofing, for example we may want to
            support sprites at some point, instead of outputting uri: ..., we
            can output uri: ..., crop:left: 10, top: 50, width: 20, height: 40
            and transparently support spriting on all the existing call sites.
            {'\n'}
            {'\n'}On the user side, this lets you annotate the object with
            useful attributes such as the dimension of the image in order to
            compute the size it's going to be displayed in. Feel free to use it
            as your data structure to store more information about your image.
          </Text12>

          <Text28>{'\n'}Background Image via Nesting</Text28>
          <Text12>
            A common feature request from developers familiar with the web is
            background-image. To handle this use case, you can use the
            ImageBackground component, which has the same props as Image, and
            add whatever children to it you would like to layer on top of it.
            {'\n'}
            {'\n'}You might not want to use ImageBackground in some cases, since
            the implementation is basic. Refer to ImageBackground's
            documentation for more insight, and create your own custom component
            when needed.
          </Text12>

          <CopyAbleText
            content={`return (
            <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
            <Text Text>Inside</Text>
            </ImageBackground>
          );`}
          />

          <Text28>{'\n'}iOS Border Radius Styles</Text28>
          <Text12>
            Please note that the following corner specific, border radius style
            properties might be ignored by iOS's image component:
            {'\n'}
            {'\n'}🔷borderTopLeftRadius
            {'\n'}🔷borderTopRightRadius
            {'\n'}🔷borderBottomLeftRadius
            {'\n'}🔷borderBottomRightRadius
          </Text12>

          <Text28>{'\n'}Off-thread Decoding</Text28>
          <Text12>
            Image decoding can take more than a frame-worth of time. This is one
            of the major sources of frame drops on the web because decoding is
            done in the main thread. In React Native, image decoding is done in
            a different thread. In practice, you already need to handle the case
            when the image is not downloaded yet, so displaying the placeholder
            for a few more frames while it is decoding does not require any code
            change.
          </Text12>

          <Text28>{'\n'}Configuring iOS Image Cache Limits</Text28>
          <Text12>
            On iOS, we expose an API to override React Native's default image
            cache limits. This should be called from within your native
            AppDelegate code (e.g. within didFinishLaunchingWithOptions).
          </Text12>

          <CopyAbleText
            content={`RCTSetImageCacheLimits(4*1024*1024, 200*1024*1024);;`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Images;
