import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RestaurantManager.module.css'


export default function Restaurant({data}) {
          //<img src={data.image} alt=""/>
          /*<div alt={data.image} style={{
            backgroundColor: "lightblue",
            backgroundImage: "url(" + data.image + ")",
            textAlign: "right",
            width: "225px",
            height: "225px"
          }}>*/

  return (
    <div className={styles.box}>
      <div key={data.id} style={{position: 'relative'}}>
        <Link to={data.id } style={{ textDecoration: 'none' }} >
          <img src={data.image} alt=""/>
        </Link>

        <button style={{
          position: 'absolute',
          backgroundColor: "#db0000",
          color: "white",
          fontWeight: "900",
          border: "solid 2px black",
          borderRadius: "20px",
          width: "32px",
          height: "32px",
          margin: "6px",
          right: '2px',
          top: '2px'
        }} onClick={() => alert("hello")}>
          X
        </button>

        <Link to={data.id } style={{ textDecoration: 'none' }} >
          <div className={styles.title}>
            {data.name}
          </div>

          <div className={styles.restInfo}>
            <div>
              New Orders: X
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
