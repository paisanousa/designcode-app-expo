import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://dl.dropboxusercontent.com/s/zsa94qhrfm8yf5e/avatar-default.jpg?dl=0",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api", {
      method: "GET",
      headers: {
        "X-API-KEY": ["B4F2C0EB-172A425F-AEBC5BD9-2B3841F8"],
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ photo: response[0].photo });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
