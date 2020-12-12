import React from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

class SectionScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { route } = this.props;
    const { section } = route.params;

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={22} style={{ marginTop: -2 }} color="#4775f2" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <WebView source={{ html: htmlStyles + htmlContent }} scalesPageToFit={false} scrollEnabled={false} />
        </Content>
      </Container>
    );
  }
}

export default SectionScreen;

const htmlContent = `
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<h2>This is a title</h2>
<p>This <strong>is</strong> a <a href="http://designcode.io">link</a></p>
<img src="https://cl.ly/8861f359ed6d/download/Wave14.jpg" />
`;

const htmlStyles = `
<style>
  * {
    font-family: -apple-system; 
    margin: 0;
    padding: 0;
    font-size: 17px; 
    font-weight: normal; 
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }
  
  p {
    margin-top: 20px;
  }
  
  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }
  
  strong {
    font-weight: 700;
  }
  
  img {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;

  }
</style>
`;

const Content = styled.View`
  height: 100%;
  padding: 20px;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding-left: 1px;
  padding-top: 2px;
  justify-content: center;
  align-items: center;
`;
