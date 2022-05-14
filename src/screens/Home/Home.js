
import { Text,View,TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Texto } from "./HomeCss";


export default function Home() {
    return(
        <SafeAreaView >
            <View>
                <TouchableOpacity>
                    <Texto styles={{color:'red'}}>Motoristas</Texto>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Veiculos</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};
