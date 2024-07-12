import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./styles";
import handleNumericInput from "../../functions/handleNumericInput";

// import { Container } from './styles';
interface Props {
  number: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  numberInput: string;
  placeholder: string;
  setPlaceholder: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}

const NumberButton = (props:Props) => {
  return (
    <Button
      style={styles.Button}
      mode="elevated"
      children={<Text children={props.number} style={styles.NumberText} />}
      onPress={() => {
        props.setInput(props.numberInput + props.number)
        handleNumericInput(props.placeholder, props.setPlaceholder)
      }}
      rippleColor="transparent"
      disabled={props.disabled}
    />
  );
};

export default NumberButton;
