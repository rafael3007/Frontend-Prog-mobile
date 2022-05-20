
import { Text,View,TouchableOpacity, StyleSheet,  } from "react-native"
import { SafeAreaView } from "react-native"
import { Texto, Container, Botao } from "./styles";


export default function Home({navigation}) {
    return(
        <SafeAreaView >
            <Container>
                <Botao
                    onPress={() => navigation.push('Motoristas',)}
                >
                    <Texto>Motoristas!</Texto>
                </Botao>
                <Botao
                    onPress={() => navigation.navigate('Veiculos')}
                >
                    <Texto>Veiculos</Texto>
                </Botao>
            </Container>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });