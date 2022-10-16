import React from 'react'
import classes from './Styles/Card.module.css'

const Card = ({userData}) => {
    console.log(userData);
  return (
    <summary className={classes.card}>
        <img src={userData.picture.large} />
        <p>{userData.name.first} {userData.name.last}</p>
        <p>{userData.email}</p>
        <p>{userData.gender}</p>
    </summary>
  )
}

export default Card