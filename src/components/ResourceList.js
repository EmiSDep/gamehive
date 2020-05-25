import React, {Component} from "react";
import Resource from "./Resource"

class ResourceList extends Component {
  state = {
    query: "",
    searchedResources: [...this.props.resources],
  };

  handleChange = (e) => {
    const query = e.target.value;
    const newList = this.props.resources.filter(
      (resource) => {
        const index = resource.title.toLowerCase().indexOf(query.toLowerCase());
        if (index >= 0) {
          return true;
        }
        return false;
      }
      // resource.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
      // resource.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0
    );

    this.setState({
      query,
      searchedResources: newList,
    });
  };

  handleClick = () => {
    this.props.increment(this.props.count);
  };

  renderPosts = () => {
    const display = this.state.searchedResources.map((resource) => {
      return <Resource resource={resource} key={resource.id} />;
    });

    return display;
  };

  render() {
    return (
      <div>
        <div style={myStyles.searchBar}>
          <input
            style={myStyles.input}
            type="text"
            placeholder="🔍 Search Titles"
            onChange={this.handleChange}
          />
        </div>
        <div className="resourceList">{this.renderPosts()}</div>
        <div>
          <button onClick={this.handleClick}>add</button>
          <p>{this.props.count}</p>
        </div>
      </div>
    );
  }
}

const myStyles = {
  searchBar: {
    flexDirection: "row",
    flex: 1,
    marginRight: "30%",
    marginLeft: "30%",
    marginBottom: "1.5rem",
  },
  input: {
    width: "60%",
    height: 32,
    fontSize: 20,
    marginBottom: 8,
  },
};

export default ResourceList;