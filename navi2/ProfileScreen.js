import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const profiles = [
  { name: 'Alice', age: 25, job: 'Software Engineer', nationality: 'USA', image: require('./images/a.png'), smoking: true },
  { name: 'Bob', age: 30, job: 'Product Manager', nationality: 'Canada', image: require('./images/b.png'), smoking: false },
  { name: 'Charlie', age: 28, job: 'Designer', nationality: 'Australia', image: require('./images/c.png'), smoking: true },
];

const ProfileCard = ({ name, age, job, nationality, image, smoking }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
    <View style={{ marginRight: 16 }}>
      <Image source={image} style={{ width: 80, height: 80, borderRadius: 40 }} />
    </View>
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 14 }}>{age} years old</Text>
      <Text style={{ fontSize: 14 }}>{smoking ? 'Smoker' : 'Non-smoker'}</Text>
    </View>
  </View>
);

const ProfilesScreen = () => (
  <FlatList
    data={profiles}
    renderItem={({ item }) => <ProfileCard {...item} />}
    keyExtractor={(item) => item.name}
    contentContainerStyle={{ flexGrow: 1 }}
  />
);

export default ProfilesScreen;
