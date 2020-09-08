import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [start, setStart] = useState(false);
  // const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(20);
  useEffect(() => {
    if (seconds > 0 && start === true) {
      const timer = setTimeout(() => {
        decrementSeconds();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds, start]);

  // const decrementMinutes = () => {
  //   setMinutes((prevMinutes) => prevMinutes - 1);
  // };

  const decrementSeconds = () => {
    setSeconds((prevSeconds) => prevSeconds - 1);
  };

  const startTimer = () => {
    setStart((prevStart) => !prevStart);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayScreen}>
        <Text>{seconds}.</Text>
        {/* <Text>{minutes}</Text> */}
      </View>
      <Button onPress={startTimer} title="Start" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  displayScreen: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
});
