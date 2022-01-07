/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import Colors from '../theme/Colors';
//Import React Native Video to play video
import Video from 'react-native-video';
//Media Controls to control Play/Pause/Seek and full screen
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
//Orientation to display fullscreen video in landscape mode
import Orientation from 'react-native-orientation-locker';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Dashboard = () => {

  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  const onSeek = (seek) => {
          //Handler for change in seekbar
    videoPlayer?.current.seek(seek);
  };

  const onPaused = (playerState) => {
          //Handler for Video pause
      setPaused(!paused);
      setPlayerState(playerState);
  };

  const onReplay = () => {
        //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
            //Handler video progress
      if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onBuffer = (data) => {
    console.log("onbuffer", data);
  };

  const onLoad = (data) => {
      //show video loading
    setDuration(data.duration);
    setIsLoading(false);
    console.log("onload",data);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setIsLoading(false);
    setPlayerState(PLAYER_STATES.ENDED);
  };

  const onSeeking = (currentTime) => {
      //Handling video seeking
    setCurrentTime(currentTime);
  };

  const onFullScreen = () => {
    if (!isFullScreen) {
        StatusBar.setHidden(true);
        Orientation.lockToLandscape();
    } else {
        if (Platform.OS === 'ios') {
            StatusBar.setHidden(false);
            Orientation.lockToPortrait();
        }
        StatusBar.setHidden(false);
        Orientation.lockToPortrait();
    }
    setIsFullScreen(!isFullScreen);
};

const videoUrl = "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";

  return (
    <View >
        <Video
            onEnd={onEnd} // Callback when playback finishes
            onLoad={onLoad}
            onLoadStart={onLoadStart}
            posterResizeMode={isFullScreen ? "cover" : 'contain'}
            onProgress={onProgress}
            onBuffer={onBuffer}
            paused={paused}
            volume={1.0} //max volume is 1.0 and min volume is 0.0
            ref={(ref) => (videoPlayer.current = ref)} // Store reference
            resizeMode={isFullScreen ? "cover" : 'contain'}
            source={{uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"}} // Can be a URL or a local file.
            style={isFullScreen ? 
              styles.backgroundVideoFullScreen : 
              styles.backgroundVideo}
        />
        <MediaControls
            isFullScreen={isFullScreen}
            duration={duration}
            isLoading={isLoading}
            progress={currentTime}
            onFullScreen={onFullScreen}
            onPaused={onPaused}
            onReplay={onReplay}
            onSeek={onSeek}
            onSeeking={onSeeking}
            mainColor={'white'}
            playerState={playerState}
            style={isFullScreen ? styles.backgroundVideoFullScreen : styles.backgroundVideo}
            sliderStyle={isFullScreen ? { containerStyle: styles.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
        />
    </View>

);
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 250,
        width: '100%',
        backgroundColor:Colors.silver,
    },
    mediaControls: {
        width: screenHeight - 170,
        height: '100%',
        flex: 1,
        alignSelf: Platform.OS === 'android' ? screenHeight < 800 ? 'center' : 'flex-start' : 'center',
    },
    backgroundVideoFullScreen: {
        height: screenHeight,
        width: screenWidth,
        backgroundColor:Colors.white,
    },
});

export default Dashboard;