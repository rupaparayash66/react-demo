import React from "react";

function Card(props) {
    return (
        <div className=" card_main flex">
            <div className="card">
                <img src={props.img}></img>
            </div>
            <div className="heding">
                <div className="section-1">
                <h2 className="white">{props.h1}</h2>
                <h3 className="gray">{props.name2}</h3>
                </div>
                <div className="section-1">
                    <h2 className="gray1">Last known location:</h2>
                    <h3 className="white">{props.name3}</h3>
                </div>
                <div className="section-1">
                
                    <h4 className="gray1">First seen in:</h4>
                    <h3 className="white">{props.name4}</h3>
                </div>
                
            </div>
        </div>

    )
}

export default Card;