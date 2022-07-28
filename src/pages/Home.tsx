import { useState, useEffect } from "react";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { useWorkoutsService, IWorkout } from "../services/useWorkoutsService";

import { Card } from "../components/Card";
import { Link } from "react-router-dom";

export const Home = () => {
  const workoutsService = useWorkoutsService();
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    xs: "repeat(1, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  useEffect(() => {
    workoutsService?.getWorkouts().then((res) => {
      setWorkouts(res);
    });
  }, []);

  return (
    <Grid templateColumns={templateColumns} gap={6} p={10}>
      {workouts.map(({ id, ...rest }) => (
        <GridItem key={id}>
          <Link to={`/workout/${id}`}>
            <Card {...rest} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
