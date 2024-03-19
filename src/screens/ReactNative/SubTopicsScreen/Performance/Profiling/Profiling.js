import {ScrollView, View, SafeAreaView, Image} from 'react-native';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {Paths} from '../../../../../assets/images';

const Profiling = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Profiling:</Text28>
          <Text12>
            Profiler Tools: Utilize Perf Monitor for React Native, Instruments
            for iOS, and systrace for Android to access detailed information
            about work done in both the JavaScript and main threads. Development
            Mode: Ensure that Development Mode is OFF to accurately assess
            performance. This is indicated by DEV === false in application logs.
            Profiler Usage: Use Perf Monitor for React Native, Instruments for
            iOS, and systrace for Android to analyze JavaScript and main thread
            performance side-by-side. Chrome Profiler: Alternatively, use the
            Chrome profiler while debugging for a general idea of bottlenecks.
            Access it under Chrome's Performance tab, with a flame graph
            appearing under User Timing. For more details in tabular format,
            switch to the Bottom Up tab and select DedicatedWorker Thread.
          </Text12>

          <Text24>{'\n'}Profiling Android UI Performance with systrace:</Text24>
          <Text12>
            Android's expansive support for over 10,000 different phones comes
            with the drawback of generalized software rendering, which can
            result in less efficiency compared to iOS. However, optimizations
            are possible, and issues may not always stem from native code.
            Debugging performance issues, or "jank," begins with identifying
            where time is spent within each 16ms frame. The standard tool for
            this task on Android is systrace, which is included in the Android
            platform-tools package. Systrace utilizes marker-based profiling,
            with code blocks surrounded by start and end markers, visualized in
            a colorful chart format. Both the Android SDK and React Native
            framework offer standard markers for visualization.
          </Text12>

          <Text28>{'\n'}1. Collecting a trace:</Text28>
          <Text12>
            First, connect a device that exhibits the stuttering you want to
            investigate to your computer via USB and get it to the point right
            before the navigation/animation you want to profile. Run systrace as
            follows:
          </Text12>
          <CopyAbleText
            content={`$ <path_to_android_sdk>/platform-tools/systrace/systrace.py --time=10 -o trace.html sched gfx view -a <your_package_name>`}
          />
          <Text12>
            To profile and analyze performance issues on Android, utilize the
            systrace tool with specific parameters. Define the duration of trace
            collection using the 'time' parameter, typically set in seconds. Key
            Android SDK tags such as 'sched,' 'gfx,' and 'view' offer insights
            into core tasks, graphics rendering, and UI rendering processes,
            respectively. Additionally, enable app-specific markers,
            particularly those relevant to the React Native framework, by
            including the '-a your_package_name' flag, where the package name
            corresponds to the app's identifier found in its AndroidManifest.xml
            file. Execute the desired animation or interaction during trace
            collection. Once complete, systrace generates a link to the trace
            file for detailed analysis in a web browser, aiding in identifying
            and resolving performance bottlenecks.
          </Text12>

          <Text28>{'\n'}2. Reading the trace:</Text28>
          <Text12>
            After opening the trace in your browser (preferably Chrome), you
            should see something like this:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 210}}
            source={Paths?.Profiling?.SystraceExample}
          />

          <Text28>{'\n'}3. Find your process:</Text28>
          <Text12>
            Scroll until you see (part of) the name of your package. In this
            case, I was profiling com.facebook.adsmanager, which shows up as
            book.adsmanager because of silly thread name limits in the kernel.
            On the left side, you'll see a set of threads which correspond to
            the timeline rows on the right. There are a few threads we care
            about for our purposes: the UI thread (which has your package name
            or the name UI Thread), mqt_js, and mqt_native_modules. If you're
            running on Android 5+, we also care about the Render Thread.
            {'\n'}
            {'\n'}🔷 UI Thread. This is where standard android
            measure/layout/draw happens. The thread name on the right will be
            your package name (in my case book.adsmanager) or UI Thread. The
            events that you see on this thread should look something like this
            and have to do with Choreographer, traversals, and DispatchUI:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 210}}
            source={Paths?.Profiling?.UiThread}
          />
          <Text12>
            {'\n'}🔷 JS Thread. This is where JavaScript is executed. The thread
            name will be either mqt_js or ... depending on how cooperative the
            kernel on your device is being. To identify it if it doesn't have a
            name, look for things like JSCall, Bridge.executeJSCall, etc:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 120}}
            source={Paths?.Profiling?.JsThread}
          />
          <Text12>
            {'\n'}🔷 Native Modules Thread. This is where native module calls
            (e.g. the UIManager) are executed. The thread name will be either
            mqt_native_modules or .... To identify it in the latter case, look
            for things like NativeCall, callJavaModuleMethod, and
            onBatchComplete:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 60}}
            source={Paths?.Profiling?.NativeModulesThread}
          />
          <Text12>
            {'\n'}🔷 Bonus: Render Thread. If you're using Android L (5.0) and
            up, you will also have a render thread in your application. This
            thread generates the actual OpenGL commands used to draw your UI.
            The thread name will be either RenderThread or .... To identify it
            in the latter case, look for things like DrawFrame and queueBuffer:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 50}}
            source={Paths?.Profiling?.BonusRenderThread}
          />

          <Text28>{'\n'}Identifying a culprit:</Text28>
          <Text12>
            A smooth animation should look something like the following:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 200}}
            source={Paths?.Profiling?.SystraceWellBehaved}
          />

          <Text12>
            Each change in color is a frame -- remember that in order to display
            a frame, all our UI work needs to be done by the end of that 16ms
            period. Notice that no thread is working close to the frame
            boundary. An application rendering like this is rendering at 60 FPS.
            If you noticed chop, however, you might see something like this:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 200}}
            source={Paths?.Profiling?.SystraceBadJS}
          />

          <Text12>
            Notice that the JS thread is executing almost all the time, and
            across frame boundaries! This app is not rendering at 60 FPS. In
            this case, the problem lies in JS. You might also see something like
            this:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 200}}
            source={Paths?.Profiling?.SystraceBadUI}
          />

          <Text28>{'\n'}Resolving JavaScript issues:</Text28>
          <Text12>
            If you identified a JS problem, look for clues in the specific JS
            that you're executing. In the scenario above, we see RCTEventEmitter
            being called multiple times per frame. Here's a zoom-in of the JS
            thread from the trace above:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 50}}
            source={Paths?.Profiling?.SystraceBadJS2}
          />
          <Text12>
            This doesn't seem right. Why is it being called so often? Are they
            actually different events? The answers to these questions will
            probably depend on your product code. And many times, you'll want to
            look into shouldComponentUpdate.
            {'\n'}
            <OnWebsiteDocsLink
              name="shouldComponentUpdate"
              link="https://legacy.reactjs.org/docs/react-component.html#shouldcomponentupdate"
            />
          </Text12>

          <Text28>{'\n'}Resolving native UI Issues:</Text28>
          <Text12>
            If you identified a native UI problem, there are usually two
            scenarios: the UI you're trying to draw each frame involves too much
            work on the GPU, or You're constructing new UI during the
            animation/interaction (e.g. loading in new content during a scroll).
          </Text12>

          <Text28>{'\n'}Too much GPU work:</Text28>
          <Text12>
            In the first scenario, you'll see a trace that has the UI thread
            and/or Render Thread looking like this:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 100}}
            source={Paths?.Profiling?.SystraceBadUI2}
          />

          <Text28>{'\n'}Creating new views on the UI thread:</Text28>
          <Text12>
            In the second scenario, you'll see something more like this:
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 110}}
            source={Paths?.Profiling?.SystraceBadCreateUI}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profiling;
