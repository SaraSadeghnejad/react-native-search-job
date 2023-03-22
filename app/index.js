import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import {COLORS,icons,images,SIZES} from '../constants'
import { Stack,useRouter } from 'expo-router'
import {Nearbyjobs,Welcome,Popularjobs,ScreenHeaaderBtn} from '../../components'
const Home = () => {
    const router= useRouter();
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:COLORS.lightWhite}}>
    {/* <Stack.Screen options={{ headerStyle:{backgroundColor:COLORS.lightWhite},
      headerShadowVisible:false,
      headerLeft:()=>{
        <ScreenHeaaderBtn iconUrl={icons.menu} dimensions="60%"/>
      },
      headerRight:()=>{
        <ScreenHeaaderBtn iconUrl={images.profile} dimensions="100%"/>
      },
      headerTitle:''
    }} />
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{flex:1,padding:SIZES.medium}}>
        <Welcome/>
        <Popularjobs />
        <Nearbyjobs />
     </View>
    </ScrollView> */}
    <Text>ffdfdfd</Text>
    </SafeAreaView>
  )
}

export default Home