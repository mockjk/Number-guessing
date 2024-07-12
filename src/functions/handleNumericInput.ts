export default function handleNumericInput(placeholder: string, setPlaceholder: React.Dispatch<React.SetStateAction<string>>){
    if(placeholder.length > 2){
        setPlaceholder(placeholder.substring(0, 3));
        return;
    }
    return;
};