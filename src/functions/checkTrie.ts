import { Objective } from "../interfaces/objective";

export default function (
  trie: number,
  objective: Objective,
  setHint: React.Dispatch<React.SetStateAction<string>>,
  setNumberOfTries: React.Dispatch<React.SetStateAction<number>>,
  numberOfTries: number,
  setInputNumber: React.Dispatch<React.SetStateAction<string>>,
  //@ts-ignore
  setObjective: React.Dispatch<React.SetStateAction<Objective>>,
) {
  if (trie === objective.objectiveValue) {
    setHint("It's Correct ✅");
    setObjective({...objective, touchableButtons: false});
    return;
  } else if (trie < objective.objectiveValue) {
    setHint("Your trie is less than result ⬆️");
    setNumberOfTries(numberOfTries + 1);
    setInputNumber("");
    return;
  }
  setHint("Your trie is bigger than result ⬇️");
  setNumberOfTries(numberOfTries + 1);
  setInputNumber("");
  return;
};
