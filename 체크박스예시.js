import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isChecked, setChecked] = useState(false);

  const [isCarPoolChecked, setIsCarPoolChecked] = useState(false);
  const [isOtherCheckboxChecked, setIsOtherCheckboxChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isCarPoolChecked} onValueChange={setIsCarPoolChecked} />
        <Text style={styles.paragraph}>카풀</Text>
      </View>

      <View style={styles.section}>
        <Checkbox
        style={styles.checkbox}
        value={isOtherCheckboxChecked}
        onValueChange={setIsOtherCheckboxChecked}
        color={isOtherCheckboxChecked ? '#4630EB' : undefined}
        />
      <Text style={styles.paragraph}>다른 체크박스</Text>
</View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});





