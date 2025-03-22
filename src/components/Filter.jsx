import { connect } from "react-redux";
import styles from "../components/Filter.module.css";
import { setFilter } from "../redux/actions";

function Filter({ setFilter, filter }) {
  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.inputStyle}
        type="text"
        placeholder="Введите имя пользователя..."
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = { setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
