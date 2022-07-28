import {
  Box,
  Flex,
  Button,
  Stack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <Box>
        <Link to="/">
          <Image src={Logo} alt="logo" h={8} />
        </Link>
      </Box>
      <Flex alignItems={"center"}>
        <Stack direction={"row"} spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌑" : "☀️"}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
