/*
* Animations home screen
*
*
*
*/

import React, { StyleSheet, Animated, View, PanResponder, PropTypes, Dimensions, Image } from 'react-native';

import QuickSwipe from './quick_swipe.js';
import CD from './cd.js';
import Blank from './blank-cd.js';

const iPhone = {
  scale: 0.77,
  width: 0.77,
  model: 5
};

var screenWidth = Dimensions.get('window').width;
var screeHeight = Dimensions.get('window').height;

var deckHeight = 345
var deckWidth = screenWidth - 80 * iPhone.width;

var SWIPE_THRESHOLD = screenWidth/3;

var Tinderable = React.createClass({

  propTypes: {
    currentCard: PropTypes.object,
    nextCard: PropTypes.object,
  },

  getInitialState () {
    return {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
      rowID: '',
      topcard: styles.normalCardContainer,
      borderWide: 0.5,
      rotateTop3: '',
    };
  },

  swipeLeft () {
    console.log("SWIPED LEFT");
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
  },
  swipeRight () {
    console.log("SWIPED RIGHT");
  },

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: this._handleStartShouldSetPanResponder,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: () => {
       this.state.pan.flattenOffset();
       this.setState({borderWide: 0.5}, function() {
         this.getTopCardRotation(this.state.borderWide, this.state.rotateTop3);
       });
       if (Math.abs(this.state.pan.x.__getAnimatedValue()) > SWIPE_THRESHOLD) {
         if (this.state.pan.x.__getAnimatedValue() < 0) {
           Animated.timing(this.state.pan.x, {
             toValue: -600,
             duration: 200,
           }).start(() => this.swipeLeft());
         } else {
           Animated.timing(this.state.pan.x, {
             toValue: 600,
             duration: 200,
           }).start(() => this.swipeRight());
         }
       } else {
         Animated.spring(this.state.pan, {
           toValue: {x: 0, y: 0},
           friction: 4
         }).start();
       }
      }
    });
  },
  _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    this.rotateTop = e.nativeEvent.pageY <= screeHeight/2-30;
    this.setState({borderWide: 2}, function() {
      this.getTopCardRotation(this.state.borderWide, this.rotateTop);
    });
    return true;
  },

  autoSwipe (direction) {
    if (direction === 'left') {
      Animated.timing(this.state.pan.x, {
        toValue: -600,
        duration: 200,
      }).start(() => this.swipeLeft());
    } else {
      Animated.timing(this.state.pan.x, {
        toValue: 600,
        duration: 200,
      }).start(() => this.swipeRight());
    }
  },

  getCardFadeOut () {
    return [
      { flex: 1 },
      {
        opacity: this.state.pan.x.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: [0.5, 1, 0.5]
        })
      }
    ];
  },

  getMiddleCardRotation() {
    return [
      styles.middleCardContainer,
      styles.normalCardContainer,
      {
        transform: [
          {
            rotate: this.state.pan.x.interpolate({
              inputRange: [-500, -200, 0, 200, 500],
              outputRange: ['0deg', '0deg', '-5deg', '0deg', '0deg']
            })
          }
        ]
      }
    ];
  },

  getTopCardRotation (borderWide, rotateTop2) {
    if(rotateTop2 === true) {
      this.setState({rotateTop3: true});
      this.setState({topcard: [
        styles.normalCardContainer,
        {
          transform: [{translateX: this.state.pan.x},{translateY: this.state.pan.y},
            {
              rotate: this.state.pan.x.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: ['-7deg', '0deg', '7deg']
              })
            }
          ]
        },
        {
          borderWidth: borderWide
        },
        {
          borderColor: this.state.pan.x.interpolate({
            inputRange: [-320, 0, 320],
            outputRange: ['rgb(102, 102, 102)', 'rgb(221, 221, 221)', 'rgb(0, 145, 204)'],
          })
        }
      ]})
    }
    if(rotateTop2 === false) {
      this.setState({rotateTop3: false});
      this.setState({topcard: [
        styles.normalCardContainer,
        {
          transform: [{translateX: this.state.pan.x},{translateY: this.state.pan.y},
            {
              rotate: this.state.pan.x.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: ['7deg', '0deg', '-7deg']
              })
            }
          ]
        },
        {
          borderWidth: borderWide
        },
        {
          borderColor: this.state.pan.x.interpolate({
            inputRange: [-320, 0, 320],
            outputRange: ['rgb(102, 102, 102)', 'rgb(221, 221, 221)', 'rgb(0, 145, 204)'],
          })
        },

      ]})
    }
  },
  render () {
    return (
      <View style={styles.superContainer}>
        <QuickSwipe yes={this.autoSwipe.bind(null, 'right')} no={this.autoSwipe.bind(null, 'left')}/>
        <View onStartShouldSetResponder={this._onStartShouldSetResponder} style={styles.container}>
          <View style={styles.backgroundCard} shouldRasterizeIOS={true}>
            <Blank/>
          </View>
          <Animated.View style={this.getMiddleCardRotation()}>
            <CD {...this.props.nextCard}/>
          </Animated.View>
          <Animated.View {...this._panResponder.panHandlers} style={this.state.topcard}>
            <Animated.View style={this.getCardFadeOut()}>
              <CD {...this.props.currentCard} />
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  superContainer: {
    height: screeHeight - 78 * iPhone.scale - 67,
  },
  container: {
    marginTop: 32 * iPhone.scale,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundCard: {
    position: 'absolute',
    left: 80/2 * iPhone.width,
    width: deckWidth,
    height: deckHeight,
    transform: [
      {
        rotate: '-5degrees',
      }
    ],
    shadowRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  middleCardContainer: {
    position: 'absolute',
    left: 80/2 * iPhone.width,
  },
  normalCardContainer: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    width: deckWidth,
    height: deckHeight,
    borderWidth: 0.5,
    borderColor: '#DDD',
    // flexDirection: 'row',
    justifyContent: 'center',

    // flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch',
    // width: screenWidth,
  },
  shadow: {
    width: deckWidth+20,
    height: deckHeight+50,
    position: 'absolute',
    top: -10,
  },
});

module.exports=Tinderable;
