import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name,
      }),
  };
}

class Avatar extends React.Component {
  state = {
    photo: "https://dl.dropboxusercontent.com/s/zsa94qhrfm8yf5e/avatar-default.jpg?dl=0",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: {
        "X-API-KEY": ["B4F2C0EB-172A425F-AEBC5BD9-2B3841F8"],
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        this.setState({ photo: response[0].photo });
        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
