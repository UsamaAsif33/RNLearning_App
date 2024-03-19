import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const AndroidNativeUIComponents = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Android Native UI Components:</Text28>
          <Text12>
            how to integrate custom native UI components into React Native apps,
            assuming basic knowledge of Android SDK programming. It demonstrates
            creating a subset of the ImageView component from React Native's
            core library, aiding developers in seamlessly integrating their own
            native components into their apps.
          </Text12>

          <Text28>ImageView example:</Text28>
          <Text12>
            To enable the use of ImageViews in JavaScript within a React Native
            app, we extend SimpleViewManager, a subclass of ViewManager.
            SimpleViewManager simplifies the process by applying common
            properties like background color and Flexbox layout. These managers
            act as singletons, communicating with the NativeViewHierarchyManager
            to manage native views and delegate tasks such as setting properties
            and handling events back to JavaScript via the bridge.
            {'\n'}
            To send a view:
            {'\n'}
            1. Create the ViewManager subclass.
            {'\n'}
            2. Implement the createViewInstance method
            {'\n'}
            3. Expose view property setters using @ReactProp (or
            @ReactPropGroup) annotation
            {'\n'}
            4. Register the manager in createViewManagers of the applications
            package.
            {'\n'}
            5. Implement the JavaScript module
          </Text12>

          <Text28>1. Create the ViewManager subclass</Text28>
          <Text12>
            In this example we create view manager class ReactImageManager that
            extends SimpleViewManager of type ReactImageView. ReactImageView is
            the type of object managed by the manager, this will be the custom
            native view. Name returned by getName is used to reference the
            native view type from JavaScript.
          </Text12>
          <CopyAbleTextWithButton
            content1={`public class ReactImageManager extends SimpleViewManager<ReactImageView> {

              public static final String REACT_CLASS = "RCTImageView";
              ReactApplicationContext mCallerContext;
            
              public ReactImageManager(ReactApplicationContext reactContext) {
                mCallerContext = reactContext;
              }
            
              @Override
              public String getName() {
                return REACT_CLASS;
              }
            }`}
            content2={`class ReactImageManager(
              private val callerContext: ReactApplicationContext
          ) : SimpleViewManager<ReactImageView>() {
          
            override fun getName() = REACT_CLASS
          
            companion object {
              const val REACT_CLASS = "RCTImageView"
            }
          }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />

          <Text28>2. Implement method createViewInstance</Text28>
          <Text12>
            Views are created in the createViewInstance method, the view should
            initialize itself in its default state, any properties will be set
            via a follow up call to updateView.
          </Text12>
          <CopyAbleTextWithButton
            content1={`  @Override
            public ReactImageView createViewInstance(ThemedReactContext context) {
              return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);
            }`}
            content2={`  override fun createViewInstance(context: ThemedReactContext) =
            ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, callerContext)`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>
            3. Expose view property setters using @ReactProp (or
            @ReactPropGroup) annotation
          </Text28>
          <Text12>
            To enable properties to be reflected in JavaScript, annotate setter
            methods with @ReactProp (or @ReactPropGroup) in Java or Kotlin.
            These setters should take the view to be updated and the property
            value as arguments, be public, and return void. The @ReactProp
            annotation requires a name argument to reference the property in JS,
            with optional default values for primitive types if the property is
            removed. Setter declaration requirements differ for @ReactPropGroup.
            Updating a property triggers a setter method call, and if a property
            is removed, the setter is called with a default value or null for
            complex types.
          </Text12>
          <CopyAbleTextWithButton
            content1={`   @ReactProp(name = "src")
            public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {
              view.setSource(sources);
            }
          
            @ReactProp(name = "borderRadius", defaultFloat = 0f)
            public void setBorderRadius(ReactImageView view, float borderRadius) {
              view.setBorderRadius(borderRadius);
            }
          
            @ReactProp(name = ViewProps.RESIZE_MODE)
            public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
              view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
            }`}
            content2={`  @ReactProp(name = "src")
            fun setSrc(view: ReactImageView, sources: ReadableArray?) {
              view.setSource(sources)
            }
          
            @ReactProp(name = "borderRadius", defaultFloat = 0f)
            override fun setBorderRadius(view: ReactImageView, borderRadius: Float) {
              view.setBorderRadius(borderRadius)
            }
          
            @ReactProp(name = ViewProps.RESIZE_MODE)
            fun setResizeMode(view: ReactImageView, resizeMode: String?) {
              view.setScaleType(ImageResizeMode.toScaleType(resizeMode))
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>4. Register the ViewManager</Text28>
          <Text12>
            The final step is to register the ViewManager to the application,
            this happens in a similar way to Native Modules, via the
            applications package member function createViewManagers.
          </Text12>
          <CopyAbleTextWithButton
            content1={`  @Override
            public List<ViewManager> createViewManagers(
                                      ReactApplicationContext reactContext) {
              return Arrays.<ViewManager>asList(
                new ReactImageManager(reactContext)
              );
            }`}
            content2={`  override fun createViewManagers(
              reactContext: ReactApplicationContext
          ) = listOf(ReactImageManager(reactContext))`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>5. Implement the JavaScript module</Text28>
          <Text12>
            The very final step is to create the JavaScript module that defines
            the interface layer between Java/Kotlin and JavaScript for the users
            of your new view. It is recommended for you to document the
            component interface in this module (e.g. using TypeScript, Flow, or
            plain old comments).
          </Text12>
          <Text28>ImageView.tsx</Text28>
          <CopyAbleText
            content={`import {requireNativeComponent} from 'react-native';

                  /**
                   * Composes View
                   *
                   * - src: string
                   * - borderRadius: number
                   * - resizeMode: 'cover' | 'contain' | 'stretch'
                   */
                  module.exports = requireNativeComponent('RCTImageView');`}
          />
          <Text12>
            The requireNativeComponent function takes the name of the native
            view. Note that if your component needs to do anything more
            sophisticated (e.g. custom event handling), you should wrap the
            native component in another React component. This is illustrated in
            the MyCustomView example below.
          </Text12>
          <Text28>Events:</Text28>
          <Text12>
            So now we know how to expose native view components that we can
            control freely from JS, but how do we deal with events from the
            user, like pinch-zooms or panning? When a native event occurs the
            native code should issue an event to the JavaScript representation
            of the View, and the two views are linked with the value returned
            from the getId() method.
          </Text12>
          <CopyAbleTextWithButton
            content1={`class MyCustomView extends View {
              ...
              public void onReceiveNativeEvent() {
                 WritableMap event = Arguments.createMap();
                 event.putString("message", "MyMessage");
                 ReactContext reactContext = (ReactContext)getContext();
                 reactContext
                     .getJSModule(RCTEventEmitter.class)
                     .receiveEvent(getId(), "topChange", event);
               }
           }`}
            content2={`class MyCustomView(context: Context) : View(context) {
              ...
              fun onReceiveNativeEvent() {
                val event = Arguments.createMap().apply {
                  putString("message", "MyMessage")
                }
                val reactContext = context as ReactContext
                reactContext
                    .getJSModule(RCTEventEmitter::class.java)
                    .receiveEvent(id, "topChange", event)
              }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12>
            To map the topChange event name to the onChange callback prop in
            JavaScript, register it by overriding the
            getExportedCustomBubblingEventTypeConstants method in your
            ViewManager:
          </Text12>
          <CopyAbleTextWithButton
            content1={`public class ReactImageManager extends SimpleViewManager<MyCustomView> {
              ...
              public Map getExportedCustomBubblingEventTypeConstants() {
                  return MapBuilder.builder().put(
                      "topChange",
                      MapBuilder.of(
                          "phasedRegistrationNames",
                          MapBuilder.of("bubbled", "onChange")
                      )
                  ).build();
              }
          }`}
            content2={`class ReactImageManager : SimpleViewManager<MyCustomView>() {
              ...
              override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
                return mapOf(
                  "topChange" to mapOf(
                    "phasedRegistrationNames" to mapOf(
                      "bubbled" to "onChange"
                    )
                  )
                )
              }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12>
            This callback is invoked with the raw event, which we typically
            process in the wrapper component to make a simpler API:
          </Text12>
          <Text28>MyCustomView.tsx</Text28>
          <CopyAbleText
            content={`class MyCustomView extends React.Component {
              constructor(props) {
                super(props);
                this._onChange = this._onChange.bind(this);
              }
              _onChange(event) {
                if (!this.props.onChangeMessage) {
                  return;
                }
                this.props.onChangeMessage(event.nativeEvent.message);
              }
              render() {
                return <RCTMyCustomView {...this.props} onChange={this._onChange} />;
              }
            }
            MyCustomView.propTypes = {
              /**
               * Callback that is called continuously when the user is dragging the map.
               */
              onChangeMessage: PropTypes.func,
              ...
            };
            
            const RCTMyCustomView = requireNativeComponent("RCTMyCustomView");`}
          />
          <Text28>Integration with an Android Fragment example</Text28>
          <Text12>
            In order to integrate existing Native UI elements to your React
            Native app, you might need to use Android Fragments to give you a
            more granular control over your native component than returning a
            View from your ViewManager. You will need this if you want to add
            custom logic that is tied to your view with the help of lifecycle
            methods, such as onViewCreated, onPause, onResume. The following
            steps will show you how to do it:
          </Text12>
          <Text28>1. Create an example custom view</Text28>
          <Text12>
            First, let's create a CustomView class which extends FrameLayout
            (the content of this view can be any view that you'd like to render)
          </Text12>
          <CopyAbleTextWithButton
            content1={`// replace with your package
            package com.mypackage;
            
            import android.content.Context;
            import android.graphics.Color;
            import android.widget.FrameLayout;
            import android.widget.ImageView;
            import android.widget.TextView;
            
            import androidx.annotation.NonNull;
            
            public class CustomView extends FrameLayout {
              public CustomView(@NonNull Context context) {
                super(context);
                // set padding and background color
                this.setPadding(16,16,16,16);
                this.setBackgroundColor(Color.parseColor("#5FD3F3"));
            
                // add default text view
                TextView text = new TextView(context);
                text.setText("Welcome to Android Fragments with React Native.");
                this.addView(text);
              }
            }`}
            content2={`// replace with your package
            package com.mypackage
            
            import android.content.Context
            import android.graphics.Color
            import android.widget.FrameLayout
            import android.widget.TextView
            
            class CustomView(context: Context) : FrameLayout(context) {
              init {
                // set padding and background color
                setPadding(16,16,16,16)
                setBackgroundColor(Color.parseColor("#5FD3F3"))
            
                // add default text view
                addView(TextView(context).apply {
                  text = "Welcome to Android Fragments with React Native."
                })
              }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>2. Create a Fragment</Text28>
          <CopyAbleTextWithButton
            content1={`// replace with your package
            package com.mypackage;
            
            import android.os.Bundle;
            import android.view.LayoutInflater;
            import android.view.View;
            import android.view.ViewGroup;
            import androidx.fragment.app.Fragment;
            
            // replace with your view's import
            import com.mypackage.CustomView;
            
            public class MyFragment extends Fragment {
                CustomView customView;
            
                @Override
                public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {
                    super.onCreateView(inflater, parent, savedInstanceState);
                    customView = new CustomView(this.getContext());
                    return customView; // this CustomView could be any view that you want to render
                }
            
                @Override
                public void onViewCreated(View view, Bundle savedInstanceState) {
                    super.onViewCreated(view, savedInstanceState);
                    // do any logic that should happen in an onCreate method, e.g:
                    // customView.onCreate(savedInstanceState);
                }
            
                @Override
                public void onPause() {
                    super.onPause();
                    // do any logic that should happen in an onPause method
                    // e.g.: customView.onPause();
                }
            
                @Override
                public void onResume() {
                    super.onResume();
                   // do any logic that should happen in an onResume method
                   // e.g.: customView.onResume();
                }
            
                @Override
                public void onDestroy() {
                    super.onDestroy();
                    // do any logic that should happen in an onDestroy method
                    // e.g.: customView.onDestroy();
                }
            }`}
            content2={`// replace with your package
            package com.mypackage
            
            import android.os.Bundle
            import android.view.LayoutInflater
            import android.view.View
            import android.view.ViewGroup
            import androidx.fragment.app.Fragment
            
            // replace with your view's import
            import com.mypackage.CustomView
            
            class MyFragment : Fragment() {
              private lateinit var customView: CustomView
            
              override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
                super.onCreateView(inflater, container, savedInstanceState)
                customView = CustomView(requireNotNull(context))
                return customView // this CustomView could be any view that you want to render
              }
            
              override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
                super.onViewCreated(view, savedInstanceState)
                // do any logic that should happen in an onCreate method, e.g:
                // customView.onCreate(savedInstanceState);
              }
            
              override fun onPause() {
                super.onPause()
                // do any logic that should happen in an onPause method
                // e.g.: customView.onPause();
              }
            
              override fun onResume() {
                super.onResume()
                // do any logic that should happen in an onResume method
                // e.g.: customView.onResume();
              }
            
              override fun onDestroy() {
                super.onDestroy()
                // do any logic that should happen in an onDestroy method
                // e.g.: customView.onDestroy();
              }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>3. Create the ViewManager subclass</Text28>
          <CopyAbleTextWithButton
            content1={`// replace with your package
            package com.mypackage;
            
            import android.view.Choreographer;
            import android.view.View;
            import android.widget.FrameLayout;
            
            import androidx.annotation.NonNull;
            import androidx.annotation.Nullable;
            import androidx.fragment.app.FragmentActivity;
            
            import com.facebook.react.bridge.ReactApplicationContext;
            import com.facebook.react.bridge.ReadableArray;
            import com.facebook.react.common.MapBuilder;
            import com.facebook.react.uimanager.annotations.ReactProp;
            import com.facebook.react.uimanager.annotations.ReactPropGroup;
            import com.facebook.react.uimanager.ViewGroupManager;
            import com.facebook.react.uimanager.ThemedReactContext;
            
            import java.util.Map;
            
            public class MyViewManager extends ViewGroupManager<FrameLayout> {
            
              public static final String REACT_CLASS = "MyViewManager";
              public final int COMMAND_CREATE = 1;
              private int propWidth;
              private int propHeight;
            
              ReactApplicationContext reactContext;
            
              public MyViewManager(ReactApplicationContext reactContext) {
                this.reactContext = reactContext;
              }
            
              @Override
              public String getName() {
                return REACT_CLASS;
              }
            
              /**
               * Return a FrameLayout which will later hold the Fragment
               */
              @Override
              public FrameLayout createViewInstance(ThemedReactContext reactContext) {
                return new FrameLayout(reactContext);
              }
            
              /**
               * Map the "create" command to an integer
               */
              @Nullable
              @Override
              public Map<String, Integer> getCommandsMap() {
                return MapBuilder.of("create", COMMAND_CREATE);
              }
            
              /**
               * Handle "create" command (called from JS) and call createFragment method
               */
              @Override
              public void receiveCommand(
                @NonNull FrameLayout root,
                String commandId,
                @Nullable ReadableArray args
              ) {
                super.receiveCommand(root, commandId, args);
                int reactNativeViewId = args.getInt(0);
                int commandIdInt = Integer.parseInt(commandId);
            
                switch (commandIdInt) {
                  case COMMAND_CREATE:
                    createFragment(root, reactNativeViewId);
                    break;
                  default: {}
                }
              }
            
              @ReactPropGroup(names = {"width", "height"}, customType = "Style")
              public void setStyle(FrameLayout view, int index, Integer value) {
                if (index == 0) {
                  propWidth = value;
                }
            
                if (index == 1) {
                  propHeight = value;
                }
              }
            
              /**
               * Replace your React Native view with a custom fragment
               */
              public void createFragment(FrameLayout root, int reactNativeViewId) {
                ViewGroup parentView = (ViewGroup) root.findViewById(reactNativeViewId);
                setupLayout(parentView);
            
                final MyFragment myFragment = new MyFragment();
                FragmentActivity activity = (FragmentActivity) reactContext.getCurrentActivity();
                activity.getSupportFragmentManager()
                        .beginTransaction()
                        .replace(reactNativeViewId, myFragment, String.valueOf(reactNativeViewId))
                        .commit();
              }
            
              public void setupLayout(View view) {
                Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
                  @Override
                  public void doFrame(long frameTimeNanos) {
                    manuallyLayoutChildren(view);
                    view.getViewTreeObserver().dispatchOnGlobalLayout();
                    Choreographer.getInstance().postFrameCallback(this);
                  }
                });
              }
            
              /**
               * Layout all children properly
               */
              public void manuallyLayoutChildren(View view) {
                  // propWidth and propHeight coming from react-native props
                  int width = propWidth;
                  int height = propHeight;
            
                  view.measure(
                          View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
                          View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));
            
                  view.layout(0, 0, width, height);
              }
            }`}
            content2={`// replace with your package
            package com.mypackage
            
            import android.view.Choreographer
            import android.view.View
            import android.view.ViewGroup
            import android.widget.FrameLayout
            import androidx.fragment.app.FragmentActivity
            import com.facebook.react.bridge.ReactApplicationContext
            import com.facebook.react.bridge.ReadableArray
            import com.facebook.react.uimanager.ThemedReactContext
            import com.facebook.react.uimanager.ViewGroupManager
            import com.facebook.react.uimanager.annotations.ReactPropGroup
            
            class MyViewManager(
                private val reactContext: ReactApplicationContext
            ) : ViewGroupManager<FrameLayout>() {
              private var propWidth: Int? = null
              private var propHeight: Int? = null
            
              override fun getName() = REACT_CLASS
            
              /**
               * Return a FrameLayout which will later hold the Fragment
               */
              override fun createViewInstance(reactContext: ThemedReactContext) =
                  FrameLayout(reactContext)
            
              /**
               * Map the "create" command to an integer
               */
              override fun getCommandsMap() = mapOf("create" to COMMAND_CREATE)
            
              /**
               * Handle "create" command (called from JS) and call createFragment method
               */
              override fun receiveCommand(
                  root: FrameLayout,
                  commandId: String,
                  args: ReadableArray?
              ) {
                super.receiveCommand(root, commandId, args)
                val reactNativeViewId = requireNotNull(args).getInt(0)
            
                when (commandId.toInt()) {
                  COMMAND_CREATE -> createFragment(root, reactNativeViewId)
                }
              }
            
              @ReactPropGroup(names = ["width", "height"], customType = "Style")
              fun setStyle(view: FrameLayout, index: Int, value: Int) {
                if (index == 0) propWidth = value
                if (index == 1) propHeight = value
              }
            
              /**
               * Replace your React Native view with a custom fragment
               */
              fun createFragment(root: FrameLayout, reactNativeViewId: Int) {
                val parentView = root.findViewById<ViewGroup>(reactNativeViewId)
                setupLayout(parentView)
            
                val myFragment = MyFragment()
                val activity = reactContext.currentActivity as FragmentActivity
                activity.supportFragmentManager
                    .beginTransaction()
                    .replace(reactNativeViewId, myFragment, reactNativeViewId.toString())
                    .commit()
              }
            
              fun setupLayout(view: View) {
                Choreographer.getInstance().postFrameCallback(object: Choreographer.FrameCallback {
                  override fun doFrame(frameTimeNanos: Long) {
                    manuallyLayoutChildren(view)
                    view.viewTreeObserver.dispatchOnGlobalLayout()
                    Choreographer.getInstance().postFrameCallback(this)
                  }
                })
              }
            
              /**
               * Layout all children properly
               */
              private fun manuallyLayoutChildren(view: View) {
                // propWidth and propHeight coming from react-native props
                val width = requireNotNull(propWidth)
                val height = requireNotNull(propHeight)
            
                view.measure(
                    View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
                    View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY))
            
                view.layout(0, 0, width, height)
              }
            
              companion object {
                private const val REACT_CLASS = "MyViewManager"
                private const val COMMAND_CREATE = 1
              }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>4. Register the ViewManager</Text28>
          <CopyAbleTextWithButton
            content1={`// replace with your package
            package com.mypackage;
            
            import com.facebook.react.ReactPackage;
            import com.facebook.react.bridge.ReactApplicationContext;
            import com.facebook.react.uimanager.ViewManager;
            
            import java.util.Arrays;
            import java.util.List;
            
            public class MyPackage implements ReactPackage {
            
               @Override
               public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
                   return Arrays.<ViewManager>asList(
                        new MyViewManager(reactContext)
                   );
               }
            
            }`}
            content2={`// replace with your package
            package com.mypackage
            
            import com.facebook.react.ReactPackage
            import com.facebook.react.bridge.ReactApplicationContext
            import com.facebook.react.uimanager.ViewManager
            
            class MyPackage : ReactPackage {
              ...
              override fun createViewManagers(
                  reactContext: ReactApplicationContext
              ) = listOf(MyViewManager(reactContext))
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>5. Register the Package</Text28>
          <CopyAbleTextWithButton
            content1={`    @Override
            protected List<ReactPackage> getPackages() {
              List<ReactPackage> packages = new PackageList(this).getPackages();
              ...
              packages.add(new MyPackage());
              return packages;
            } `}
            content2={`    override fun getPackages() = PackageList(this).packages.apply {
              add(MyPackage())
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text28>6. Implement the JavaScript module</Text28>
          <Text12>I. Start with custom View manager:</Text12>
          <CopyAbleText
            content={`import {requireNativeComponent} from 'react-native';

            export const MyViewManager =
              requireNativeComponent('MyViewManager');`}
          />
          <Text12>
            II. Then implement custom View calling the create method:
          </Text12>
          <CopyAbleText
            content={`import React, {useEffect, useRef} from 'react';
            import {
              PixelRatio,
              UIManager,
              findNodeHandle,
            } from 'react-native';
            
            import {MyViewManager} from './my-view-manager';
            
            const createFragment = viewId =>
              UIManager.dispatchViewManagerCommand(
                viewId,
                // we are calling the 'create' command
                UIManager.MyViewManager.Commands.create.toString(),
                [viewId],
              );
            
            export const MyView = () => {
              const ref = useRef(null);
            
              useEffect(() => {
                const viewId = findNodeHandle(ref.current);
                createFragment(viewId);
              }, []);
            
              return (
                <MyViewManager
                  style={{
                    // converts dpi to px, provide desired height
                    height: PixelRatio.getPixelSizeForLayoutSize(200),
                    // converts dpi to px, provide desired width
                    width: PixelRatio.getPixelSizeForLayoutSize(200),
                  }}
                  ref={ref}
                />
              );
            };`}
          />
          <Text12>
            If you want to expose property setters using @ReactProp (or
            @ReactPropGroup) annotation see the ImageView example above.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AndroidNativeUIComponents;
