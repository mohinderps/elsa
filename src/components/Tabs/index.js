import React from "react";

function TabPanel(props) {
  const { id, activeId, children } = props;

  return <>{activeId === id && children}</>;
}

function TabPanels(props) {
  const { activeId } = props;
  const children = React.Children.map(props.children, (child) =>
    React.cloneElement(child, { activeId })
  );

  return <div className="panel">{children}</div>;
}

function Tab(props) {
  const { children, handleClick, id, activeId } = props;
  return (
    <button onClick={() => handleClick(id)}>
      <span>{children}</span>
      {activeId === id && <span>(Active)</span>}
    </button>
  );
}

class Tabs extends React.Component {
  static Tab = Tab;
  static TabPanels = TabPanels;
  static TabPanel = TabPanel;
  constructor(props) {
    super(props);
    this.state = {
      activeId: "a",
    };
  }

  handleClick = (id) => {
    this.setState({
      activeId: id,
    });
  };

  render() {
    const { children } = this.props;
    const newChildren = React.Children.map(children, (child) =>
      React.cloneElement(child, {
        handleClick: this.handleClick,
        activeId: this.state.activeId,
      })
    );
    return newChildren;
  }
}

export default Tabs;
