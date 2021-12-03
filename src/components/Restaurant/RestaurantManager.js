import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RestaurantManager.module.css'


export default function Restaurant({data}) {
          //<img src={data.image} alt=""/>

  return (
    <Link to={data.id } style={{ textDecoration: 'none' }} >
      <div className={styles.box}>
        <div key={data.id}>
          <div alt={data.image} style={{
            backgroundColor: "lightblue",
            backgroundImage: "url(" + data.image + ")",
            textAlign: "right",
            width: "225px",
            height: "225px"
          }}>
            <button style={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              border: "solid 2px black",
              borderRadius: "20px",
              width: "30px",
              height: "30px",
              margin: "6px"
            }}>
              X
            </button>
          </div>
          <div className={styles.title}>
            {data.name}
          </div>

          <div className={styles.restInfo}>
            <div>
              New Orders: X
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
