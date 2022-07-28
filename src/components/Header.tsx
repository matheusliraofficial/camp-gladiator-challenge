import { Box, Flex, Button, Stack, Image, useColorMode } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <Box>
        <Image src={Logo} alt="logo" h={8} />
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
