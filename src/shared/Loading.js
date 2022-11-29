import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {

    return (

        <div className={styles.container}>

            <div className={styles.loading}>

                <div className={styles.loading_items}>

                    <div className={styles.loading_circle}></div>
                    <div className={styles.loading_shadow}></div>

                </div>

                <div className={styles.loading_items}>

                    <div className={styles.loading_circle}></div>
                    <div className={styles.loading_shadow}></div>

                </div>

                <div className={styles.loading_items}>

                    <div className={styles.loading_circle}></div>
                    <div className={styles.loading_shadow}></div>

                </div>

            </div>

        </div>
    )
}


export default Loading;