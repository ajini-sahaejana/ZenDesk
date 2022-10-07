import React from "react";
import WebView from "react-native-webview";

const PlayerWeb = () => {
  const rand = Math.random();
  return (
    <WebView
      source={{ uri: "https://zendesk-edge.web.app/meditation.html?i=" + rand }}
      style={{ marginTop: 20 }}
    />
  );
};

export default PlayerWeb;
