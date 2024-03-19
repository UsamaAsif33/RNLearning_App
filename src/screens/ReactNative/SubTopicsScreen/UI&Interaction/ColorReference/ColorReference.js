import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';

const ColorReference = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Color Reference:</Text28>
          <Text12>
            Components in React Native are styled using JavaScript. Color
            properties usually match how CSS works on the web. General guides on
            the color usage on each platform could be found below:
            {'\n'}
            {'\n'}🔷 Android
            {'\n'}🔷iOS
          </Text12>
          <Text28>{'\n'}Color APIs:</Text28>
          <Text12>
            React Native has several color APIs designed to allow you to take
            full advantage of your platform's design and user preferences.
            {'\n'}
            {'\n'}🔷PlatformColor lets you reference the platform's color
            {'\n'}🔷 system. DynamicColorIOS is iOS specific and allows you to
            specify which colors should be used in light or Dark Mode.
          </Text12>

          <Text28>{'\n'}Color representations</Text28>
          <Text28>{'\n'}Red Green Blue (RGB):</Text28>
          <Text12>
            React Native supports rgb() and rgba() in both hexadecimal and
            functional notation:
          </Text12>

          <Text12>
            {'\n'}🔷 '#f0f' (#rgb)
            {'\n'}🔷 '#ff00ff' (#rrggbb)
            {'\n'}🔷 '#f0ff' (#rgba)
            {'\n'}🔷 '#ff00ff00' (#rrggbbaa)
            {'\n'}🔷 'rgb(255, 0, 255)'
            {'\n'}🔷 'rgb(255 0 255)'
            {'\n'}🔷 'rgba(255, 0, 255, 1.0)'
            {'\n'}🔷 'rgba(255 0 255 / 1.0)'
          </Text12>

          <Text28>{'\n'}Hue Saturation Lightness (HSL):</Text28>
          <Text12>
            React Native supports hsl() and hsla() in functional notation:
          </Text12>

          <Text12>
            {'\n'}🔷 'hsl(360, 100%, 100%)'
            {'\n'}🔷 'hsl(360 100% 100%)'
            {'\n'}🔷 'hsla(360, 100%, 100%, 1.0)'
            {'\n'}🔷 'hsla(360 100% 100% / 1.0)'
          </Text12>

          <Text28>{'\n'}Hue Whiteness Blackness (HWB)</Text28>
          <Text12>React Native supports hwb() in functional notation:</Text12>

          <Text12>
            {'\n'}🔷 'hwb(0, 0%, 100%)'
            {'\n'}🔷 'hwb(360, 100%, 100%)'
            {'\n'}🔷 'hwb(0 0% 0%)'
            {'\n'}🔷 'hwb(70 50% 0%)'
          </Text12>

          <Text28>{'\n'}Color keywords</Text28>
          <Text12>
            {'\n'}🔷 aliceblue (#f0f8ff)
            {'\n'}🔷 antiquewhite (#faebd7)
            {'\n'}🔷 aqua (#00ffff)
            {'\n'}🔷 aquamarine (#7fffd4)
            {'\n'}🔷 azure (#f0ffff)
            {'\n'}🔷 beige (#f5f5dc)
            {'\n'}🔷 bisque (#ffe4c4)
            {'\n'}🔷 black (#000000)
            {'\n'}🔷 blanchedalmond (#ffebcd)
            {'\n'}🔷 blue (#0000ff)
            {'\n'}🔷 blueviolet (#8a2be2)
            {'\n'}🔷 brown (#a52a2a)
            {'\n'}🔷 burlywood (#deb887)
            {'\n'}🔷 cadetblue (#5f9ea0)
            {'\n'}🔷 chartreuse (#7fff00)
            {'\n'}🔷 chocolate (#d2691e)
            {'\n'}🔷 coral (#ff7f50)
            {'\n'}🔷 cornflowerblue (#6495ed)
            {'\n'}🔷 cornsilk (#fff8dc)
            {'\n'}🔷 crimson (#dc143c)
            {'\n'}🔷 cyan (#00ffff)
            {'\n'}🔷 darkblue (#00008b)
            {'\n'}🔷 darkcyan (#008b8b)
            {'\n'}🔷 darkgoldenrod (#b8860b)
            {'\n'}🔷 darkgray (#a9a9a9)
            {'\n'}🔷 darkgreen (#006400)
            {'\n'}🔷 darkgrey (#a9a9a9)
            {'\n'}🔷 darkkhaki (#bdb76b)
            {'\n'}🔷 darkmagenta (#8b008b)
            {'\n'}🔷 darkolivegreen (#556b2f)
            {'\n'}🔷 darkorange (#ff8c00)
            {'\n'}🔷 darkorchid (#9932cc)
            {'\n'}🔷 darkred (#8b0000)
            {'\n'}🔷 darksalmon (#e9967a)
            {'\n'}🔷 darkseagreen (#8fbc8f)
            {'\n'}🔷 darkslateblue (#483d8b)
            {'\n'}🔷 darkslategrey (#2f4f4f)
            {'\n'}🔷 darkturquoise (#00ced1)
            {'\n'}🔷 darkviolet (#9400d3)
            {'\n'}🔷 deeppink (#ff1493)
            {'\n'}🔷 deepskyblue (#00bfff)
            {'\n'}🔷 dimgray (#696969)
            {'\n'}🔷 dimgrey (#696969)
            {'\n'}🔷 dodgerblue (#1e90ff)
            {'\n'}🔷 firebrick (#b22222)
            {'\n'}🔷 floralwhite (#fffaf0)
            {'\n'}🔷 forestgreen (#228b22)
            {'\n'}🔷 fuchsia (#ff00ff)
            {'\n'}🔷 gainsboro (#dcdcdc)
            {'\n'}🔷 ghostwhite (#f8f8ff)
            {'\n'}🔷 gold (#ffd700)
            {'\n'}🔷 goldenrod (#daa520)
            {'\n'}🔷 gray (#808080)
            {'\n'}🔷 green (#008000)
            {'\n'}🔷 greenyellow (#adff2f)
            {'\n'}🔷 grey (#808080)
            {'\n'}🔷 honeydew (#f0fff0)
            {'\n'}🔷 hotpink (#ff69b4)
            {'\n'}🔷 indianred (#cd5c5c)
            {'\n'}🔷 indigo (#4b0082)
            {'\n'}🔷 ivory (#fffff0)
            {'\n'}🔷 khaki (#f0e68c)
            {'\n'}🔷 lavender (#e6e6fa)
            {'\n'}🔷 lavenderblush (#fff0f5)
            {'\n'}🔷 lawngreen (#7cfc00)
            {'\n'}🔷 lemonchiffon (#fffacd)
            {'\n'}🔷 lightblue (#add8e6)
            {'\n'}🔷 lightcoral (#f08080)
            {'\n'}🔷 lightcyan (#e0ffff)
            {'\n'}🔷 lightgoldenrodyellow (#fafad2)
            {'\n'}🔷 lightgray (#d3d3d3)
            {'\n'}🔷 lightgreen (#90ee90)
            {'\n'}🔷 lightgrey (#d3d3d3)
            {'\n'}🔷 lightpink (#ffb6c1)
            {'\n'}🔷 lightsalmon (#ffa07a)
            {'\n'}🔷 lightseagreen (#20b2aa)
            {'\n'}🔷 lightskyblue (#87cefa)
            {'\n'}🔷 lightslategrey (#778899)
            {'\n'}🔷 lightsteelblue (#b0c4de)
            {'\n'}🔷 lightyellow (#ffffe0)
            {'\n'}🔷 lime (#00ff00)
            {'\n'}🔷 limegreen (#32cd32)
            {'\n'}🔷 linen (#faf0e6)
            {'\n'}🔷 magenta (#ff00ff)
            {'\n'}🔷 maroon (#800000)
            {'\n'}🔷 mediumaquamarine (#66cdaa)
            {'\n'}🔷 mediumblue (#0000cd)
            {'\n'}🔷 mediumorchid (#ba55d3)
            {'\n'}🔷 mediumpurple (#9370db)
            {'\n'}🔷 mediumseagreen (#3cb371)
            {'\n'}🔷 mediumslateblue (#7b68ee)
            {'\n'}🔷 mediumspringgreen (#00fa9a)
            {'\n'}🔷 mediumturquoise (#48d1cc)
            {'\n'}🔷 mediumvioletred (#c71585)
            {'\n'}🔷 midnightblue (#191970)
            {'\n'}🔷 mintcream (#f5fffa)
            {'\n'}🔷 mistyrose (#ffe4e1)
            {'\n'}🔷 moccasin (#ffe4b5)
            {'\n'}🔷 navajowhite (#ffdead)
            {'\n'}🔷 navy (#000080)
            {'\n'}🔷 oldlace (#fdf5e6)
            {'\n'}🔷 olive (#808000)
            {'\n'}🔷 olivedrab (#6b8e23)
            {'\n'}🔷 orange (#ffa500)
            {'\n'}🔷 orangered (#ff4500)
            {'\n'}🔷 orchid (#da70d6)
            {'\n'}🔷 palegoldenrod (#eee8aa)
            {'\n'}🔷 palegreen (#98fb98)
            {'\n'}🔷 paleturquoise (#afeeee)
            {'\n'}🔷 palevioletred (#db7093)
            {'\n'}🔷 papayawhip (#ffefd5)
            {'\n'}🔷 peachpuff (#ffdab9)
            {'\n'}🔷 peru (#cd853f)
            {'\n'}🔷 pink (#ffc0cb)
            {'\n'}🔷 plum (#dda0dd)
            {'\n'}🔷 powderblue (#b0e0e6)
            {'\n'}🔷 purple (#800080)
            {'\n'}🔷 rebeccapurple (#663399)
            {'\n'}🔷 red (#ff0000)
            {'\n'}🔷 rosybrown (#bc8f8f)
            {'\n'}🔷 royalblue (#4169e1)
            {'\n'}🔷 saddlebrown (#8b4513)
            {'\n'}🔷 salmon (#fa8072)
            {'\n'}🔷 sandybrown (#f4a460)
            {'\n'}🔷 seagreen (#2e8b57)
            {'\n'}🔷 seashell (#fff5ee)
            {'\n'}🔷 sienna (#a0522d)
            {'\n'}🔷 silver (#c0c0c0)
            {'\n'}🔷 skyblue (#87ceeb)
            {'\n'}🔷 slateblue (#6a5acd)
            {'\n'}🔷 slategray (#708090)
            {'\n'}🔷 snow (#fffafa)
            {'\n'}🔷 springgreen (#00ff7f)
            {'\n'}🔷 steelblue (#4682b4)
            {'\n'}🔷 tan (#d2b48c)
            {'\n'}🔷 teal (#008080)
            {'\n'}🔷 thistle (#d8bfd8)
            {'\n'}🔷 tomato (#ff6347)
            {'\n'}🔷 turquoise (#40e0d0)
            {'\n'}🔷 violet (#ee82ee)
            {'\n'}🔷 wheat (#f5deb3)
            {'\n'}🔷 white (#ffffff)
            {'\n'}🔷 whitesmoke (#f5f5f5)
            {'\n'}🔷 yellow (#ffff00)
            {'\n'}🔷 yellowgreen (#9acd32)
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ColorReference;
