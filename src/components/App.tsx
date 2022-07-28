import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Workout } from "../pages/Workout";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Header } from "./Header";

export const App = () => (
  <>
    <Box bg={useColorModeValue("red.100", "white")} px={4}>
      <Header />
    </Box>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout/:id" element={<Workout />} />
    </Routes>
  </>
);
