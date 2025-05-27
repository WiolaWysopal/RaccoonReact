import React, { Component } from "react";

class DataFetcher extends Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => {
        if (!res.ok) throw new Error("Network Error!");
        return res.json();
      })
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    return this.props.render({
      data: this.state.data,
      loading: this.state.loading,
      error: this.state.error,
    });
  }
}

export default DataFetcher;
