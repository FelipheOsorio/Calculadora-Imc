import React from 'react'
import { 
    View, 
    Text, 
    Dimensions,
} from 'react-native'
import { styles } from '../Calculadora/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from '@rneui/themed'
import Formulario from '../../components/Formulario/index'


export default ({ navigation }) => {

    const windowHeight = Dimensions.get('window').height
    

    return (
        
        <View style={styles.container}>
            <LinearGradient 
                colors={['#182848', '#eaafc8']}
                style={styles.linearGradient}
            >
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>Calculadora</Text>
                    <Icon
                        type='ionicon'
                        name='calculator'
                        size={windowHeight / 15}
                        color='#FFF'
                    />
                </View>

                <View style={styles.containerFormulario}>
                    <Formulario navigation={navigation} />
                </View>

            </LinearGradient>
        </View>
        
    )
}
