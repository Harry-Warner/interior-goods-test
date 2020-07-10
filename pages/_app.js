import React from "react";
import App from "next/app";
import "../styled/tailwind.css";
import Container from "../styled/container";
import GlobalStyle from "../styled/global";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default MyApp;
