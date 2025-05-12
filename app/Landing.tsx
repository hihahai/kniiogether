import { View, Text } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Landing() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Home'); // 3초 후에 '/Home'으로 리다이렉트
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 해제
  }, []);
  return (
    <View>
      <Text>Landing
        자 이제 시작이야
      </Text>
    </View>
  )
  }