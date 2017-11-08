import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { stories } from '../test/Data';

class NearMe extends Component {
  onLearnMore = (story) => {
    this.props.navigation.navigate('Details', { ...story });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {stories.map((story) => (
            <ListItem
                key={story.id}
                //roundAvatar
                //avatar={{ uri: story.picture }}
                title={story.title}
                subtitle={
                    <View style={styles.subtitleView}>
                        <Image source={{ uri: story.picture}} style={styles.ratingImage}/>
                        <Text style={styles.ratingText}>{story.views}</Text>
                        <Text style={styles.ratingText}>{story.helpful}</Text>
                    </View>
                }
            />
          ))}
        </List>
     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    subtitleView: {
      
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
        height: 100,
        flexDirection: 'row',
      flex: 1
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  });
  

export default NearMe;
