import React from "react";
import faker from "faker";

// Content that dynamically updates itself
class Content2 extends React.Component {
  state = {
    paragraphs: this.props.children
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        paragraphs: [...this.state.paragraphs, faker.lorem.paragraph()]
      });
      this.props.contentUpdated();
    }, 500);
  }

  render() {
    const { title } = this.props,
      { paragraphs } = this.state;

    return (
      <React.Fragment>
        <h3>{title}</h3>
        {paragraphs.map(c => <p>{c}</p>)}
      </React.Fragment>
    );
  }
}

// Static Content with some pagraphs
const Content = ({ title, children }) => (
  <React.Fragment>
    <h3>{title}</h3>
    {children.map(c => <p>{c}</p>)}
  </React.Fragment>
);

export { Content, Content2 };
