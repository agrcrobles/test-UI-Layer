import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";

// import styles from '../assets/styles';
export default class TxSwiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.props.cards,
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0
    }
  }

  renderCard = card => {

    let data = card.data;
    let locationImage;
    let dTime;
    let ediT;
    let docNum, docName, docs;
    let imgNum, imgName, images;
    let list;
    data.hasOwnProperty('tXLocation') ?
      locationImage = data.tXLocation === 'recipient' ? recipient : originator : "";

    dTime = data.hasOwnProperty('dTime') ? <Text style={styles.transRevTime}>{data.dTime}</Text> : null;

    if (data.hasOwnProperty('ediT')) {


      ediT = (

        <View style={{ height: 30, width: '70%' }}>
          <Text style={styles.text}>{data.ediT.name}:</Text>
          <Text style={styles.text}>{data.ediT.value}</Text>

        </View>
      )
    }


    if (data.hasOwnProperty('documents')) {
      docNum = data.documents.length
      docs = data.documents.map((x, i) => {
        return (
          <View key={i} style={styles.transDocField}>
            <Text style={styles.text}>{x.name}</Text>
            <Text style={styles.text}>{x.size} kb</Text>

          </View>
        )
      })
    }

    if (data.hasOwnProperty('images')) {
      imgNum = data.images.length
      images = data.images.map((x, i) => {
        return (
          <View key={i} style={styles.imgView}>
            <Image style={{ height: 65, width: 65, resizeMode: 'contain' }} source={{ uri: x.image }} />
            <Text style={styles.text}>{x.size} kb</Text> 
          </View>
        )
      })
    }

    if (data.hasOwnProperty('properties')) {

      list = Object.keys(data.properties).map((name, idx) => {
        console.log(name, 'name in for loop in review')
        return (

          <View key={idx} style={styles.transPropField}>
            <Text style={styles.transRevName}>{name}:</Text>
            <Text style={styles.revPropVal}>{data.properties[name]}</Text>
          </View>
        )
      })
    }




    return (
      <View key={card.key} style={styles.card}>
        <Image style={{ height: 40, width: 250, resizeMode: 'contain' }} source={locationImage} />
        {dTime}
        <View style={styles.transPropField}>
          <Text style={styles.transRevName}>Herc ID:</Text>
          <Text style={styles.revPropVal}>{this.props.hercId}</Text>
        </View>

        {docs}
        {images}
        {list}
      </View>
    )
  };

  onSwipedAllCards = () => {
    console.log('Swiped all cards');
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render() {
    console.log(this.state.cards, 'cards in swiper')
    return (
      <Swiper
        backgroundColor={'#002740'}
        // marginBottom={}
        ref={swiper => {
          this.swiper = swiper
        }}
        onSwiped={this.onSwiped}
        onTapCard={this.swipeLeft}
        cards={this.state.cards}
        cardIndex={this.state.cardIndex}
        cardVerticalMargin={10}
        renderCard={this.renderCard}
        onSwipedAll={this.onSwipedAllCards}
        stackSize={3}
        cardHorizontalMargin={5}
        stackSeparation={15}
        overlayLabels={{
          bottom: {
            title: 'SAVE',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          },
          left: {
            title: 'DISCARD',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30
              }
            }
          },
          right: {
            title: 'COMPLETE',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30
              }
            }
          },
          top: {
            title: 'TRANSFER',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          }
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      >
        <Button onPress={this.swipeLeft} title='Swipe Left' />
      </Swiper>
    )
  }
}
// const mapStateToProps = (state) => {
//   cards: Object.values(state.AssetReducers.selectedAsset.transactions)
// }
const styles = StyleSheet.create({
  container: {
    // flex: 1,

    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    //  flex: 1,
    height: '80%',
    width: '90%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#F3c736',
    justifyContent: "flex-start",
    backgroundColor: '#091141',
    alignSelf: 'center',
    // left: 0,
    top: -2,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#F3c736',
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: 'transparent',
    height: 17,
    // width: 50
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  done: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent'
  },
  transReview: {
    color: '#f3c736',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: "200",
    fontFamily: 'dinPro',
  },
  transDocField: {
    
      height: 45,
    width: '100%',
    // flexDirection: "row",
    justifyContent: "space-around",
    
    padding: 2,
    margin: 2,
    // textAlign:'center',
    // textAlignVertical: 'center',
    // backgroundColor: '#021227',
    alignSelf: 'center',
    borderColor: '#F3c736',


  },
  transRevName: {
    fontFamily: 'dinPro',
    fontSize: 14,
    color: 'white',
    margin: 2,
    marginBottom: 5,
    textAlign: 'left'

  },
  transRevTime: {
    color: '#f3c736',
    fontSize: 14,
    fontFamily: 'dinPro',
    textAlign: 'center'
  },
  revPropVal: {
    fontFamily: 'dinPro',
    fontSize: 14,
    color: '#f3c736',
    margin: 2,
    // textAlign: 'right'
  },
  transPropField: {
    height: 30,
    width: '70%',
    flexDirection: "row",
    justifyContent: "space-between",
    // textAlign: "left",
    padding: 2,
    margin: 2,
    // textAlign:'center',
    // textAlignVertical: 'center',
    // backgroundColor: '#021227',
    alignSelf: 'center',
    borderColor: '#F3c736',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 3,
    borderColor: '#F3c736',
    height: 17,

  }
})