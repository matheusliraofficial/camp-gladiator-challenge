import { FC, createContext, useContext, ReactNode } from "react";
import axios from "axios";

export interface IWorkout {
  description: string;
  thumbnail: string;
  levelTag: "beginner" | "intermediate" | "advanced";
  media: string;
  title: string;
  impactTag: "low" | "high";
  id: string;
  trainerId: string;
  duration: number;
}

export interface IWorkoutsService {
  getWorkouts: () => Promise<IWorkout[]>;
  getWorkout: (id: string) => Promise<IWorkout>;
}

const WorkoutsServiceContext = createContext<IWorkoutsService | undefined>(
  undefined
);

export const WorkoutsService: FC<{ children: ReactNode }> = ({ children }) => {
  const workoutsService = {
    getWorkouts: () =>
      axios.get<IWorkout[]>("/workouts").then(({ data }) => data),
    getWorkout: (id: string) =>
      axios
        .get<IWorkout[]>("/workouts")
        .then(
          ({ data }) => data.filter(({ id: workoutId }) => workoutId === id)[0]
        ),
  };

  return (
    <WorkoutsServiceContext.Provider value={workoutsService}>
      {children}
    </WorkoutsServiceContext.Provider>
  );
};

export const useWorkoutsService = () => useContext(WorkoutsServiceContext);
