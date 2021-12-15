import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

async function onSignIn(user) {
    console.log("singin");
  crashlytics().log('User signed in.');
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ])
  .then(res=>console.log(res));
}

export default function Demo() {
  useEffect(() => {
    console.log("is enable",crashlytics().isCrashlyticsCollectionEnabled);
    crashlytics().log('App mounted.');
  }, []);

  return (
    <View>
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </View>
  );
}