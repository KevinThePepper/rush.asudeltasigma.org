import React, { useEffect } from "react";
import Router from "next/router";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../state/rootReducer";
import { stopLoading, startLoading } from "../state/siteContextReducer";

import "../styles/antd.less";

const IndexPage = ({ Component, pageProps }: AppProps) => {
  console.log(process.env)
  // router binding events
  useEffect(() => {
    console.log("It's happening")
    Router.events.on("routeChangeStart", () => store.dispatch(startLoading()));
    Router.events.on("routeChangeComplete", () => store.dispatch(stopLoading()));
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default IndexPage;
