
import { Text,View,TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Texto, Container, Botao } from "./HomeCss";


export default function Home() {
    return(
        <SafeAreaView >
            <Container>
                <Botao>
                    <Texto styles={{color:'red'}}>Motoristas</Texto>
                </Botao>
                <Botao>
                    <Texto>Veiculos</Texto>
                </Botao>
            </Container>
        </SafeAreaView>
    )
};
