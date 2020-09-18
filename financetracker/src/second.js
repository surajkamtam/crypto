import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import index from "./index";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardHeader,
} from "@material-ui/core";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=104&page=1&sparkline=false"
    );
    setCoins(response.data);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <button onClick={fetchData}></button>
        <h1 className="coin-text"> Search a Currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="flex-start"
        justify="flex-start"
      >
        {filteredCoins.map((coin) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={coin.id}>
              <Card id="card">
                <CardHeader
                  avatar={
                    <CardMedia
                      image={coin.image}
                      style={{ width: "50px", height: "50px" }}
                    />
                  }
                  title={<h2>{coin.name}</h2>}
                />

                <CardContent>
                  <p>
                    {" "}
                    <h4>Symbol: {coin.symbol} </h4>{" "}
                  </p>
                  <p>
                    <h4>marketcap: {coin.market_cap} </h4>
                  </p>
                  <p>
                    <h4>price: {coin.current_price}</h4>
                  </p>
                  <p>
                    <h4>priceChange: {coin.price_change_percentage_24h}</h4>
                  </p>
                  <p>
                    <h4>volume: {coin.total_volume}</h4>
                  </p>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
