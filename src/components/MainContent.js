import Image from "next/image";
import styles from "./MainContent.module.css";
import star from "../../public/images/star.png";
import Vector from "../../public/images/Vector.png";
import { textArr } from "@/utils";

export default function MainContent() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.topText}>
        Want to Turn Social Media Into a Profitable Career?
      </div>
      <div className={styles.dropShadowText}>
        Discover your way to success with Fametonic:
      </div>
      {textArr.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: 15,
          }}
        >
          <Image src={star} style={{ height: 22, width: 22 }} alt="star" />
          <p className={styles.textBundle}>{item}</p>
        </div>
      ))}

      <div className={styles.reverse}>
        <div>
          <button className={styles.neonbtn}>
            <p className={styles.buttonText}>GET STARTED</p>
            <Image src={Vector} style={{ height: 11, width: 6 }} alt=">" />
          </button>
          <p className={styles.buttonTxt}>
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div>
          <p className={styles.bottomText}>
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className={styles.bottomText}>
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
