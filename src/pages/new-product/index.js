import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const NewProduct = () => {
  // create a sum of two numbers
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>New product</span>
          <Link className={styles.backBtn} href="/">
            Back
          </Link>
        </div>
        <section className={styles.productData}>
          <div className={styles.headerBox}>
            <input
              className={styles.productName}
              placeholder="Camiseta tipo polo en color para hombre"
              type="text"
            ></input>
          </div>
          <div className={styles.headerBox}>
            <textarea
              className={styles.productDescription}
              placeholder="Caracteristicas y descripción de tu producto"
              type="text"
            ></textarea>
          </div>

          <div className={styles.middleBox}>
            <div className={styles.radioSelectors}>
              <label>
                Usado
                <input type="radio" name="use" value="used" />
              </label>
              <label>
                Nuevo
                <input type="radio" name="use" value="used" />
              </label>
            </div>

            <div className={styles.radioSelectors}>
              <label>
                Garantia
                <input type="radio" name="warranty" value="warranty" />
              </label>
              <label>
                Sin garantia
                <input type="radio" name="warranty" value="no-warranty" />
              </label>
            </div>

            <div>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className={styles.mediaGrid}>
              <div className={styles.productMedia}>IMAGEN</div>
              <div className={styles.productMedia}>IMAGEN</div>
              <div className={styles.productMedia}>IMAGEN</div>
              <div className={styles.productMedia}>IMAGEN</div>
            </div>
          </div>
        </section>
        <div className={styles.bottomBox}>
          <div className={styles.uploaderContainer}>
            <button>Publicar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
