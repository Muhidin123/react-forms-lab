import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lettersLeft: this.props.maxChars,
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      lettersLeft: this.state.lettersLeft - 1,
      message: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(e) => {
            this.handleChange(e);
            console.log(e.value);
          }}
        />
        <h2>Chars left: {this.state.lettersLeft}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
