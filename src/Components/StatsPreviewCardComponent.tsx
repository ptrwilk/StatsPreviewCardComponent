import { Box, Typography, List, ListItem } from "@mui/material";
import styles from "./styles.module.css";
import items from "../data.json";

const StatsPreviewCardComponent = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["card"]}>
        <Typography variant="h1" className={styles["title"]}>
          Get <span className={styles["highlight"]}>insights</span> that help
          your business grow.
        </Typography>
        <Box className={styles["section"]}>
          <Typography variant="body1" className={styles["text"]}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Typography>
          <List className={styles["items"]}>
            {items.map(({ amount, name }, key) => (
              <ListItem
                key={key}
                sx={{ p: 0, width: "auto" }}
                className={styles["item"]}
              >
                <Typography variant="h2" className={styles["amount"]}>
                  {amount}
                </Typography>
                <Typography variant="body1" className={styles["name"]}>
                  {name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box className={styles["img"]}>
        <Box className={styles["overlay"]} />
      </Box>
    </Box>
  );
};

export default StatsPreviewCardComponent;
