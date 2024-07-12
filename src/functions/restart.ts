import getRandomIntInclusive from "./getRandomInt";

export default function restart(
  setNumberOfTries: React.Dispatch<React.SetStateAction<number>>,
  //@ts-ignore
  setObjective: React.Dispatch<React.SetStateAction<Objective>>,
  setHint: React.Dispatch<React.SetStateAction<string>>,
  setInputNumber: React.Dispatch<React.SetStateAction<string>>,
){
    setNumberOfTries(0);
    setObjective({objectiveValue: getRandomIntInclusive(0, 999), touchableButtons: true});
    setHint("");
    setInputNumber("");
};
