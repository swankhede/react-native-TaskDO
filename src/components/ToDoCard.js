import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import {
  FAB,
  CheckBox,
  SearchBar,
  BottomSheet,
  Input,
  ListItem,
} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardContent = props => {
  const {id} = props.content;
  const {handleDelete} = props;
  //console.log(props.content.date);
  return (
    <View style={styles.row}>
      <View>
        <Text
          style={[
            styles.heading,
            props.content.isComplete ? styles.strike : null,
          ]}>
          {props.content.title}
        </Text>
        <Text
          style={[
            styles.subHeading,
            props.content.isComplete ? styles.strike : null,
          ]}>
          {props.content.task}
        </Text>
        <Text style={styles.date}>{props.content.date}</Text>
      </View>

      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => handleDelete(id)}>
        <FontAwesome5 name={'times'} color={'grey'} size={15} />
      </TouchableOpacity>
    </View>
  );
};
export const ToDoCard = props => {
  const {item} = props;
  //console.log('item', props);
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={styles.card}>
      <CheckBox
        title={
          <CardContent
            content={item}
            handleDelete={props.handleDelete}
            key={item.id}
          />
        }
        checked={item.isComplete}
        onPress={() => props.handleCheck(item)}
        onLongPress={() => props.handleLongPress(item)}
        uncheckedIcon={
          <Ionicons name={'ellipse-outline'} size={30} color={'grey'} />
        }
        checkedIcon={
          <Ionicons name={'checkmark-circle'} size={30} color={'dodgerblue'} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    flex: 1,
    width: '100%',
  },

  strike: {
    textDecorationLine: 'line-through',
  },
  bottomCloseBtn: {
    padding: 20,
  },
  date: {
    fontSize: 12,
    color: 'grey',
  },
  sheet: {
    backgroundColor: 'white',
  },
  bottomRow: {
    flexDirection: 'row',
    padding: 20,
  },

  text: {
    marginLeft: 10,
  },
});
