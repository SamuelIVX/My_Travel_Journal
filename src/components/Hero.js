/**
 * Hero: top banner for My Travel Journal — globe mark plus product title.
 */
import React from "react"

/**
 * Renders the journal hero strip (icon + title).
 * @returns {JSX.Element} The hero banner.
 * @example
 * <Hero />
 */
export default function Hero(){
    return(
        <div className="hero--container">
            <img src="../images/globe.png" alt="" className="hero--world" width="40px" height="40px"/>
            <h2>my travel journal.</h2>
        </div>
    )
}
