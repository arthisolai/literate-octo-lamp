import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const roomLight = [
  { name: "Living Room", isOn: true, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: true, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: true, id: 7 },
  { name: "Office", isOn: true, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(false);
  function handleToggle(id) {
    console.log("id", id);
    setIsOn((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        roomLight={roomLight}
        toggleLight={handleToggle}
      />
    </Layout>
  );
}
