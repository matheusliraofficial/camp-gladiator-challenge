import { useState, useEffect } from 'react';
import { Box, useColorModeValue } from "@chakra-ui/react";

import { useWorkoutsService, IWorkout } from "../services/useWorkoutsService";
import { Header } from "./Header";
import { Workout } from "./Workout";

const App = () => {
  const workoutsService = useWorkoutsService();
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    workoutsService?.getWorkouts().then(res => {
      setWorkouts(res);
    })
  }, []);

  const renderWorkouts = workouts.map(({ id, ...rest }) => <Workout key={id} {...rest} />)

  return (
    <>
      <Box bg={useColorModeValue("red.100", "white")} px={4}>
        <Header />
      </Box>
      {renderWorkouts}
    </>
  );
};

export default App;
