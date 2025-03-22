import styles from "../components/UserItem.module.css";
 

export default function UserItem({ user }) {
  return (
   <div>
    <h4 className={styles.text}> {user.name}</h4>
   </div>
  );
}
 
