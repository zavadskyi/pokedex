import React from "react";
import "./Badge.scss";
import {typeColors} from '../helpers'


const Badge = ({ types }) => types.map(({type}, i)=><p key={i} className="badge" style={{backgroundColor: typeColors[type.name]}}>{type.name}</p>);

export default Badge;
