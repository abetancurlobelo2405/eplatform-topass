import { useSession } from "next-auth/react";
import Link from "next/link";
import Feed from "../components/Feed";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <div className={styles.App}>
        <div className={styles.feed}>
          <Feed />
        </div>
      </div>
    </>
  );
}
