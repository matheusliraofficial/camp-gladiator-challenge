import { FC, createContext, useContext } from 'react';
import axios from "axios";

interface IWorkout {
    description: string;
    thumbnail: string;
    levelTag: 'beginner' | 'intermediate' | 'advanced';
    media: string;
    title: string;
    impactTag: 'low' | 'high';
    id: string;
    trainerId: string;
    duration: number;
}

interface IWorkoutsService {
    getWorkouts: Promise<IWorkout[]>
}

const WorkoutsServiceContext = createContext<IWorkoutsService | undefined>(undefined);


export const WorkoutsService: FC = ({ children }: any) => {

    const workoutsService = {
        getWorkouts: axios.get<IWorkout[]>('/workouts').then(({ data }) => data)
    }

    return (
        <WorkoutsServiceContext.Provider value={workoutsService}>
            {children}
        </WorkoutsServiceContext.Provider>
    )

}
    
export const useWorkoutsService = () => useContext(WorkoutsServiceContext);