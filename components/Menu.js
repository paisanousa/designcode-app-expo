import React from "react";
import styled from "styled-components";
import { Animated, LogBox, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Menu extends React.Component {
  state = {
    top: new Animated.Value(900),
  };

  componentDidMount() {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: 900,
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover />
        <TouchableOpacity onPress={this.toggleMenu}>
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
          <Content />
        </TouchableOpacity>
      </AnimatedContainer>
    );
  }
}

export default Menu;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;
