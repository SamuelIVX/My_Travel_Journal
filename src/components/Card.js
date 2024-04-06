import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src ={`../images/${props.item.imageUrl}`} className="card--img"/>
            <div className="card--properties">
                <img src="../images/locationdrop.png" className="card--location"/>
                    <span className="location">{props.item.location}</span>
                    <span><a href={props.item.googleMapsUrl} className="googleMaps"> View on Google Maps</a></span>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}