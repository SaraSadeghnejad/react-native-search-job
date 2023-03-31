import { View, Text, FlatList , ActivityIndicator,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'
import PopularJobCard from '../../cards/popular/PopularJobCard'

const Popularjobs = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={style.headerTitle}>
            Show All
          </Text>
        </TouchableOpacity>
    </View>
    <View style={styles.cardsContainer}>
     {isLoading?(<ActivityIndicator size="large" color={COLORS.primary} />):error?(
      <Text>Something went wrong</Text>
     ):(<FlatList
        data={data}
        renderItems={({item})=>(
          <PopularJobCard/>
        )}
        keyExtractor={(item)=>item.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
     />)}
    </View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs