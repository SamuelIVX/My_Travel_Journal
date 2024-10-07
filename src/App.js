import React from "react"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

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