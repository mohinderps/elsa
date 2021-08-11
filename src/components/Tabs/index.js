import React from "react";

// Example of Compound Component.
// This implementation uses React.cloneElement and React.Children
//  to share the state between multiple components implicitly.

/**
 * Usage
 * 
 * <Tabs>
      <Tabs.Tab id="a">Coco</Tabs.Tab>
      <Tabs.Tab id="b">Up</Tabs.Tab>
      <Tabs.TabPanels>
        <Tabs.TabPanel id="a">Miguel</Tabs.TabPanel>
        <Tabs.TabPanel id="b">Russell</Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
 */

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
