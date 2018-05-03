# [HERCone](https://expo.io/@stackbaxter/hercone)


**To Start**:
**Clone** the repo and **npm install** or use **yarn** to install dependencies.

The project is bootstrapped with Expo XDE so the easiest way to get at it is with the [XDE](https://docs.expo.io/versions/latest/introduction/installation.html)  and [Genymotion](https://www.genymotion.com/fun-zone/) android emulator (personal edition).

I can verify this works on Ubuntu 16.04, Node 8.4. I believe it also works on Mac. I was unsuccessful getting Genymotion to work in Windows 10 but I think it is possible. Otherwise you can debug on a device connected via USB cable or use  [Android Studio](https://developer.android.com/studio/index.html). 

**If You Run Into Trouble**
 
https://docs.expo.io/versions/latest/guides/genymotion.html

> Option 2: Use Genymotion’s tools Find Genymotion’s copy of adb. On
> macOS this is normally
> /Applications/Genymotion.app/Contents/MacOS/tools/.
> 
>  Add the Genymotion tools directory to your path. Make sure that you
> can run adb from your terminal.   Step 2: Set your path in XDE Run npm
> install -g exp to install exp globally. Then run exp path. This will
> save your PATH environment variable so that XDE knows where to find
> your Android tools.
> 
This is important, as is this: https://github.com/jhen0409/react-native-debugger 

If you are using Expo 25 or up there has been an issue with debugging remotely so the native-debugger comes in really handy.

See this https://www.gravitywell.co.uk/latest/rd/posts/react-native-debugger-expo-awesome/

