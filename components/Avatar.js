import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://dl.dropboxusercontent.com/s/zsa94qhrfm8yf5e/avatar-default.jpg?dl=0",
  };

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
