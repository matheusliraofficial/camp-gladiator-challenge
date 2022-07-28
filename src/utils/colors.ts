import { IWorkout } from "../services/useWorkoutsService";

export const getLevelTagColor = (tag: IWorkout["levelTag"]) => {
  const colorByTag = {
    beginner: "blue",
    intermediate: "yellow",
    advanced: "red",
  };

  return colorByTag[tag];
};

export const getImpactTagColor = (tag: IWorkout["impactTag"]) =>
  tag === "high" ? "orange" : "green";
