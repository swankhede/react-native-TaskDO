import React from "react";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";


const configure=()=>{
    PushNotification.configure({
        onRegister: function (token) {
          console.log('[NotificationManager] onRegister token:', token);
        },
        onNotification: function (notification) {
          console.log('[NotificationManager] onNotification:', notification);
  
          // process the notification
  
          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
      });
}



export const getNotfication=() => {
    configure()
    PushNotification.createChannel(
      {
        channelId: "1111", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        //importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotification({
     
      id: 1,
      channelId:'1111',
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      vibrate: true,
      vibration: 300,
      priority: 'high',
      category: "", // (optional) default: empty string
    

      importance: 'high',
      title: "Task remainder", // (optional)
      message: "complete your tasks", // (required)
      playSound: true,
      soundName: 'default',
      userInteraction: false,
    });
}

export const getScheduleNotification=()=>{
    configure()
    PushNotification.createChannel(
      {
        channelId: "1111", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        //importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotificationSchedule({
        //... You can use all the options from localNotifications
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + 5 * 1000), // in 60 secs
        allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      
        /* Android Only Properties */
        repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
      });
}