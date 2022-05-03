interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}

export default function App() {
  return (
    <div>
      <Button text="Send"/>
      <Button text="true"/>
    </div>
    
  )
}