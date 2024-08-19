import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Star War");
  const [person, setPerson] = useState({ name: "Luker", mestre: "Yoda" });

  function click() {
    setName("Luke Filho");
    setPerson({ name: "Veid", mestre: "Dark" });
  }

  // const click = () => setName("Yoda Mestre");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.tcolor}>Nome do aluno é {name}</Text>
        <Text style={styles.tcolor}>
          {person.mestre} é o mestre do {person.name}
        </Text>
        <View style={styles.button}>
          <Button title="updata state" onPress={click} />
        </View>
      </View>
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
  tcolor: {
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 20,
  },
  top: {
    backgroundColor: "#005C53",
  },
  button: {
    paddingTop: 20,
  },
});
