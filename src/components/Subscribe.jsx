import styles from "./subscribe.module.css";
import { Box, Button, Field, Input, defineStyle } from "@chakra-ui/react";

const Demo = () => {
  return (
    <Field.Root>
      <Box pos="relative" w="full">
        <Input
          className="peer"
          placeholder=""
          style={{ border: "1px solid gray" }}
        />
        <Field.Label css={floatingStyles}>Email Address</Field.Label>
        <Button id={styles.btn}>Submit</Button>
      </Box>
    </Field.Root>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "white",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "black",
    top: "-3",
    insetStart: "2",
  },
});

const Subscribe = () => {
  return (
    <>
      <div id={styles.parent}>
        <div>
          <p>Be the first to know about our best deals!</p> <br />
          <a href="">Privacy Policy</a>
        </div>
        <div>
          <Demo />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
