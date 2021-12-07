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

        <Link to={"manage/" + data.id}>
          <button style={{
            position: 'absolute',
            backgroundColor: "#00db00",
            color: "white",
            fontWeight: "900",
            border: "solid 2px black",
            borderRadius: "20px",
            width: "32px",
            height: "32px",
            margin: "6px",
            right: '40px',
            top: '2px'
          }}>
            E
          </button>
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
        }} onClick={() => alert("Deleting")}>
          X
        </button>

        <Link to={data.id }>
          <div className={styles.title}>
            {data.name}
          </div>
        </Link>

        <Link to={data.id + "/menu"}>
          <button className={styles.menuButton}>
            Menu
          </button>
        </Link>

          <div className={styles.restInfo}>
            <div>
              Orders: X
              <br />
              New Orders: Y
            </div>
          </div>
      </div>
    </div>
  )
}
