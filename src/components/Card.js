/**
 * Card: one travel destination entry — photo, location link, dates, and blurb.
 * Expects a destination object shaped like the entries in `src/data.js`.
 */
import React from "react"

/**
 * Renders a single destination card from its props.item payload.
 * @param {object} props - React props.
 * @param {object} props.item - Destination fields (title, location, dates, etc.).
 * @param {number} props.item.id - Stable destination id (used by App as the React key).
 * @param {string} props.item.imageUrl - Value interpolated as ``../images/${imageUrl}``
 *   for the photo `src`. Current `data.js` entries already include a `../images/`
 *   prefix (e.g. `../images/japan.jpeg`), so the resolved path is redundant but
 *   matches existing runtime behavior.
 * @param {string} props.item.location - Country / region label.
 * @param {string} props.item.googleMapsUrl - External maps link.
 * @param {string} props.item.title - Destination name (heading).
 * @param {string} props.item.startDate - Visit start date string.
 * @param {string} props.item.endDate - Visit end date string.
 * @param {string} props.item.description - Short destination write-up.
 * @returns {JSX.Element} The destination card.
 * @example
 * <Card item={{
 *   id: 1,
 *   title: "Mount Fiji",
 *   location: "JAPAN",
 *   googleMapsUrl: "https://maps.example/fuji",
 *   startDate: "12 Jan, 2024",
 *   endDate: "24 Jan, 2024",
 *   description: "Tallest mountain in Japan.",
 *   imageUrl: "../images/japan.jpeg",
 * }} />
 */
export default function Card(props){
    return(
        <div className="card">
            <img src ={`../images/${props.item.imageUrl}`} alt="" className="card--img"/>
            <div className="card--properties">
                <img src="../images/locationdrop.png" alt ="" className="card--location"/>
                    <span className="location">{props.item.location}</span>
                    <span><a href={props.item.googleMapsUrl} className="googleMaps"> View on Google Maps</a></span>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}
