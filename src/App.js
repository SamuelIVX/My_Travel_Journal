/**
 * App: root layout for My Travel Journal.
 * Maps the static destinations list into Card components under a shared Hero.
 */
import React from "react"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

/**
 * Renders the travel journal: hero banner plus one Card per destination.
 * @returns {JSX.Element} The full journal page.
 * @example
 * // Mounted from index.js via ReactDOM.createRoot(...).render(<App />)
 * <App />
 */
export default function App(){
    const cards = data.map(item => 
  <Card 
    key={item.id} 
    item={item}
   />
)
    return(
      <div className="">
        <Hero/>
        {cards}
      </div>
    )
  }
