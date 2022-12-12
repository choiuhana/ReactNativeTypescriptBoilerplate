/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {type PropsWithChildren, useState} from "react";
import {
    Button,
    LayoutAnimation,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    UIManager,
    useColorScheme,
    View,
} from "react-native";

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const App = () => {
    const [test, setTest] = useState(0);

    if (Platform.OS === "android") {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    return (
        <View style={{height: "100%", width: "100%"}}>
            <TextInput style={{backgroundColor: "red"}} />
            <Button
                title={"test"}
                onPress={() => {
                    LayoutAnimation.configureNext({
                        duration: 500,
                        update: {
                            duration: 500,
                            type: LayoutAnimation.Types["easeIn"], // keyboard android 에서 안됨... 시무룩
                        },
                    });

                    setTest(test + 20);
                }}
            />

            <View style={{height: 100, width: 100, backgroundColor: "blue", marginTop: test}} />
        </View>
    );
};

export default App;
