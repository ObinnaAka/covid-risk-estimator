import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import COVIDimage from "./images/COVID image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }
  handleCountryChange = async (country) => {
    console.log(country);
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({ data: fetchedData, country: country });
  }; //set the state//set the //set the statestate
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={COVIDimage} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
