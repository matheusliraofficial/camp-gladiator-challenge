import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge, useColorModeValue, Box, Flex, Button } from "@chakra-ui/react";
import { useWorkoutsService, IWorkout } from "../services/useWorkoutsService";
import { getImpactTagColor, getLevelTagColor } from "../utils/colors";

export const Workout = () => {
  const { id } = useParams();
  const workoutsService = useWorkoutsService();
  const [workout, setWorkout] = useState<IWorkout | null>(null);

  useEffect(() => {
    if (id) {
      workoutsService?.getWorkout(id).then((res) => {
        setWorkout(res);
      });
    }
  }, [id]);

  return workout ? (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="520px"
      m="auto"
      mt={10}
    >
      <video width="100%" height="200" controls>
        <source src={workout.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box p="6">
        <Flex alignItems="baseline" gap="5">
          <Badge
            rounded="full"
            px="2"
            fontSize="0.8em"
            colorScheme={getLevelTagColor(workout.levelTag)}
          >
            {workout.levelTag}
          </Badge>
          <Badge
            rounded="full"
            px="2"
            fontSize="0.8em"
            colorScheme={getImpactTagColor(workout.impactTag)}
          >
            {workout.impactTag}
          </Badge>
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="gray">
            {workout.duration}min
          </Badge>
        </Flex>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
            {workout.title}
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="sm" color={useColorModeValue("gray.800", "white")}>
            {workout.description}
          </Box>
        </Flex>
      </Box>
      <Link to="/">
        <Button
          px={4}
          fontSize={"sm"}
          rounded={"full"}
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.300",
          }}
          _focus={{
            bg: "blue.300",
          }}
        >
          Go back
        </Button>
      </Link>
    </Box>
  ) : (
    <div>Loading...</div>
  );
};
