import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <Heading title={"Hello"}/>
      <Section title={"Title"}>This is a section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>}/>
    </>
  )
}

export default App
