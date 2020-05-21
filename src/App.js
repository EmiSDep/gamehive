import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ResourceList from "./components/ResourceList";
import Navbar from "./components/Navbar";
import ViewCourse from "./components/ViewCourse";
import resources from "./mock/resources";

import ResourceForm from "./components/ResourceForm";

class App extends Component {
  //[<Resource resource={aResource}/>, <Resource resource={aResource}]
  // constructor(props) {
  //   super(props);
  //   this.renderPosts.bind(this);
  // }
  // Resource = require("./components/Resource");
  state = {
    resources: [...resources],
    selected: 1
  };

  addResource = (newResource) => {
    // this.state.resources.push(newResource);
    this.setState({
      ...this.state,
      resources: [...this.state.resources, newResource],
    });
  };

  handleSelect = (id) => {
    this.setState({
      ...this.state,
      selected: id
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ResourceList resources={this.state.resources} onSelect={this.handleSelect} />
            </Route>
            <Route path="/addResource">
              <ResourceForm addResource={this.addResource} />
            </Route>
            <Route path='/viewCourse/:id'>
              <ViewCourse course={this.state.resources
              [this.state.selected - 1]}/>
            </Route>
          </Switch>
          <p>Footer</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;