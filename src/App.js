import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" title scroll>
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/projects">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:2dad6899-7004-4a1a-aa63-cbb652920d1d" target="#">  Resume </a>
            </Navigation>
          </Header>
          <Drawer title>
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/projects">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:2dad6899-7004-4a1a-aa63-cbb652920d1d" target="#">  Resume </a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
