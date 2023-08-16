import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View>
            <View style={{marginTop:20, marginLeft:20}}>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (11) 99999-9999</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'João Silva',
                        telefone: '(11) 99999-9999',
                        endereco: 'Rua das avenidas',
                        numero: '000',
                        profissao: 'Carpinteiro',
                        email:'joao@silva.com'
                    })}
                    >Information...</Text>
            </View>

            <View style={{marginTop:20, marginLeft:20}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (11) 88888-8888</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Amanda Silva',
                        telefone: '(22) 88888-8888',
                        endereco: 'Avenida das ruas',
                        numero: '111',
                        profissao: 'Desenvolvedora',
                    })}
                    >Information...</Text>
            </View>
        </View>
    )
}
