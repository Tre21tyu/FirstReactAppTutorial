import ExpandableText from "./ExpandableText";

const App = () => {
  return (
    <div>
      <ExpandableText maxChars={200000}>Hello world</ExpandableText>
    </div>
  )
}

export default App
