import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { height, width } from "./src/constants/measures";
import { Button, Icon, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import NumberButton from "./src/components/NumberButton";
import getRandomIntInclusive from "./src/functions/getRandomInt";
import checkTrie from "./src/functions/checkTrie";
import restart from "./src/functions/restart";
import { Objective } from "./src/interfaces/objective";

export default function App() {


  const [ objective, setObjective ] = useState<Objective>({
    objectiveValue: 0,
    touchableButtons: true,
  });

  useEffect(() => {
    setObjective({touchableButtons: true, objectiveValue: getRandomIntInclusive(0,999)});
  },[setObjective])

  //Number of Tries
  const [ numberOfTries, setNumberOfTries ] = useState<number>(0);
  //Current Trie
  const [ inputNumber, setInputNumber ] = useState<string>("");
  //
  const [ hint, setHint ] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      {hint === "It's Correct" ? <Text style={styles.CorrectSentence}>Congratulations!</Text> : <Text style={styles.Title}>Guess the number</Text>}
      <TextInput
        mode="outlined"
        disabled={true}
        style={styles.InputTrie}
        outlineColor="#373A40"
        placeholder={inputNumber?.toString()}
        placeholderTextColor="#FFFFFF"
      />
      <Text
        style={styles.TriesText}
        children={`number of tries: ${numberOfTries}`}
      />
      
      {hint !== "" && <Text children={hint} style={styles.TriesText} />}

      <View style={styles.NumberPad}>

        {['1', '2', '3', '4', '5', '6', '7', '8', '9',].map((num) => (
          <NumberButton key={num} number={num} numberInput={inputNumber} setInput={setInputNumber} placeholder={inputNumber} setPlaceholder={setInputNumber} disabled={!objective.touchableButtons}/>
        ))}

        <Button
          style={styles.EraseButton}
          mode="elevated"
          children={<Text children="X" style={styles.NumberText} />}
          onPress={() => setInputNumber("")}
          disabled={!objective.touchableButtons}
        />
        <NumberButton
          number="0"
          numberInput={inputNumber}
          setInput={setInputNumber}
          placeholder={inputNumber} 
          setPlaceholder={setInputNumber}
          disabled={!objective.touchableButtons}
        />
        <Button
          style={styles.CheckButton}
          mode="elevated"
          children={<Icon size={15} color="#FFFFFF" source="check" />}
          onPress={() => checkTrie(Number(inputNumber), objective, setHint, setNumberOfTries, numberOfTries, setInputNumber, setObjective)}
          disabled={!objective.touchableButtons}
        />

        <View style={{width: width*0.5, alignItems: "center"}}>
          <Button
            style={styles.RestartButton}
            children={<Icon size={25} color="#FFFFFF" source="restart"/>}
            onPress={() => restart(setNumberOfTries, setObjective, setHint, setInputNumber)}
            rippleColor="transparent"
          />
        </View>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373A40",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  NumberPad: {
    width: width * 0.5,
    height: height * 0.5,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    gap: height * 0.0075,
  },
  CheckButton: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#379777",
  },
  EraseButton: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FF6969",
  },
  NumberText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  InputTrie: {
    backgroundColor: "#686D76",
    width: width * 0.5,
  },
  Title: {
    color: "#C80036",
    fontSize: 36,
  },
  CorrectSentence:{
    color: "#1FFF00",
    fontSize: 36,
  },
  TriesText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  RestartButton: {
    width: width * 0.1,
    height: height * 0.1,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#686D76",
  },
});
