import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

export default function LoginScreen({ navigation }) {
  const signInWithGoogle = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        iosClientId: '<YOUR_IOS_CLIENT_ID>',
        androidClientId: '<YOUR_ANDROID_CLIENT_ID>',
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        // 로그인 성공
        navigation.navigate('Matching', { user });
      } else {
        // 로그인 실패
        console.log('Google login failed.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithEmail = () => {
    // 이메일로 회원가입 페이지로 이동
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login with Google" onPress={signInWithGoogle} />
      <Button title="Sign up with Email" onPress={signUpWithEmail} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Matching')}
      />
    </View>
  );
}
