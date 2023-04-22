import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "@/styles/Home.module.scss";

const Nav = ({ pageLength, setCurrentPage }) => {
  const setPageNumber = (type) => {
    switch (type) {
      case "up":
        setCurrentPage((prev) => {
          if (prev === pageLength) return prev;
          return prev + 1;
        });
        break;

      case "down":
        setCurrentPage((prev) => {
          if (prev === 1) return prev;
          return prev - 1;
        });
        break;
    }
  };
  return (
    <>
      <div className={styles.navBody}>
        <div className={styles.navButtonBox}>
          <div
            className={styles.navButton}
            onClick={() => {
              setPageNumber("down");
            }}
          >
            <NavigateBeforeIcon />
          </div>
          <div
            className={styles.navButton}
            onClick={() => {
              setPageNumber("up");
            }}
          >
            <NavigateNextIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
