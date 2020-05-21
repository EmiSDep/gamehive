import React, { Component } from "react";
import Button from './common/Button';

class ResourceForm extends Component {
  state = {
    userName: "",
    resourceAuthor: "",
    gameTitle: "",
    title: "",
    genres: "",
    summary: "",
    link: "",
    resourceType: "",
    datePublished: "",
    videoLength: "",
    timeToComplete: "",
    rating: "",
    comments: [],
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // any data manipulation and validation
    const newResource = { ...this.state };
    newResource.genres = newResource.genres.split(/\s*,\s*/gm);

    this.props.addResource(newResource);
    this.setState({
      posterName: "",
      resourceAuthor: "",
      gameTitle: "",
      title: "",
      genres: "",
      summary: "",
      link: "",
      resourceType: "",
      datePublished: "",
      videoLength: "",
      timeToComplete: "",
      rating: "",
      comments: [],
    });
  };

  render() {
    return (
      <div className="ResourceForm">
        <form style={styles.form} onSubmit={this.handleSubmit}>
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            style={styles.input}
            id="posterName"
            type="text"
            placeholder="Your User Name"
            value={this.state.posterName}
            onChange={this.handleChange}
            required
          />
          <input
            style={styles.input}
            id="resourceAuthor"
            type="text"
            placeholder="Resource Author"
            value={this.state.resourceAuthor}
            onChange={this.handleChange}
          />
          <input
            style={styles.input}
            id=""
            type="text"
            placeholder="Game Title"
            value={this.state.gameTitle}
            onChange={this.handleChange}
          />
          <input
            style={styles.input}
            id="title"
            type="text"
            placeholder="Resource Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            style={styles.input}
            type="text"
            id="genres"
            placeholder="genres (seperate multiples with commas)"
            value={this.state.genres}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={styles.input}
            type="text"
            id="link"
            placeholder="Resource Link"
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={styles.input}
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={this.state.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={styles.input}
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={this.state.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={styles.input}
            type="text"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={this.state.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={styles.input}
            type="text"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={this.state.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={styles.input}
            type="number"
            id="rating"
            placeholder="1 to 5 rating"
            value={this.state.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <Button type="submit">
          Submit
          </Button>
        </form>
      </div>
    );
  }
}

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
  },
  input: {
    width: "60%",
    height: 32,
    fontSize: 20,
    marginBottom: 8,
  },
};

export default ResourceForm;