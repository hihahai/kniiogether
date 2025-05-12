import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Home as HomeIcon } from 'lucide-react-native';


export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='Home'
  //       options={{
  //         tabBarIcon:({focused,color,size})=>(
  //         <Image source={require('./../../assets/images/navilogo-mybook.png')}
  //         style={{
  //           width: size,
  //           height: size,
  //           tintColor: color, // 아이콘 색상도 상태별 적용 가능
  //         }}
  //         />
  //    ) 
  //  }
   />
        <Tabs.Screen name='Explore'/>
        <Tabs.Screen name='Cookbook'/>
        <Tabs.Screen name='Proflie'/>

    </Tabs>
  )
}