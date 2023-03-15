import React, { useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { styles } from './styles'
import { useFonts } from 'expo-font'
import AnimatedLottieView from 'lottie-react-native'
import * as SplashScreen from 'expo-splash-screen'



export default ({ navigation }) => {

    const [fonstCarregadas] = useFonts({
        'SignikaNegative-Bold': require('../../../assets/fonts/SignikaNegative-Bold.ttf'),
        'SignikaNegative-Light': require('../../../assets/fonts/SignikaNegative-Light.ttf'),
        'SignikaNegative-Medium': require('../../../assets/fonts/SignikaNegative-Medium.ttf'),
        'SignikaNegative-Regular': require('../../../assets/fonts/SignikaNegative-Regular.ttf'),
        'SignikaNegative-SemiBold': require('../../../assets/fonts/SignikaNegative-SemiBold.ttf'),
    })

    useEffect(() => {
      async function prepararCarregamento() {
        await SplashScreen.preventAutoHideAsync()
      }
      prepararCarregamento()
    }, [])

    const onLayout = useCallback(async () => {
        if (fonstCarregadas) {
          await SplashScreen.hideAsync();
        }
      }, [fonstCarregadas]);
    
      if (!fonstCarregadas) {
        return null;
      }

  return (
    <View style={styles.container} onLayout={onLayout}>

      <View style={styles.loadAnimation}>
        <AnimatedLottieView
          autoPlay
          loop
          source={require('../../../assets/animations/heartSplashScreen.json')}
        />
      
        <AnimatedLottieView
          autoPlay
          loop={false}
          speed={2}
          source={require('../../../assets/animations/progressBarSplashScreen.json')}
          onAnimationFinish={() => navigation.dispatch(StackActions.replace('TabNavi'))}
        />
      
      </View>
    </View>
  )
}