import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

import { getImpactTagColor, getLevelTagColor } from "../utils/colors";
import { IWorkout } from "../services/useWorkoutsService";

type CardProps = Omit<IWorkout, "id">;

export const Card = ({
  thumbnail,
  levelTag,
  title,
  description,
  duration,
  impactTag,
}: CardProps) => (
  <Flex w="full" alignItems="center" justifyContent="center">
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
      <Image
        src={thumbnail}
        alt={`Picture of ${title}`}
        roundedTop="lg"
        h={250}
        w="100%"
        objectFit="cover"
        objectPosition="top"
      />
      <Box p="6">
        <Flex alignItems="baseline" gap="5">
          <Badge
            rounded="full"
            px="2"
            fontSize="0.8em"
            colorScheme={getLevelTagColor(levelTag)}
          >
            {levelTag}
          </Badge>
          <Badge
            rounded="full"
            px="2"
            fontSize="0.8em"
            colorScheme={getImpactTagColor(impactTag)}
          >
            {impactTag}
          </Badge>
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="gray">
            {duration}min
          </Badge>
        </Flex>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
            {title}
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="sm" color={useColorModeValue("gray.800", "white")}>
            {description}
          </Box>
        </Flex>
      </Box>
    </Box>
  </Flex>
);
