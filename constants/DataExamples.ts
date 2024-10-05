// C
export interface Exercise {
  id: number;
  name: string;
  setCount: number;
  repCount: string;
  restTime: number;
  image: string;
}
export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Bench Press',
    setCount: 4,
    repCount: '8-12',
    restTime: 60,
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    id: 2,
    name: 'Incline Dumbell Fly',
    setCount: 4,
    repCount: '12-15',
    restTime: 60,
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    id: 3,
    name: 'Barbell Bench Press',
    setCount: 5,
    repCount: '12-15',
    restTime: 60,
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    id: 4,
    name: 'Pushups',
    setCount: 3,
    repCount: '15',
    restTime: 60,
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
];

export type User = {
  name: string;
  avatar: string;
  workoutDays: any;
};

export const user: User = {
  name: 'John',
  avatar:
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  workoutDays: [1, 3, 5],
};

export type TabItem = {
  text: string;
  iconName?: string;
  index: number;
};

export const tabItems: TabItem[] = [
  { index: 1, text: 'Workout', iconName: 'dumbbell' },
  { index: 2, text: 'Meal', iconName: 'utensils' },
];

export type Workout = {
  id: string;
  title: string;
  exerciseCount: number;
  imageUrl: string;
  category: string;
};

export const workouts: Workout[] = [
  {
    id: '1',
    title: 'Advanced Back Workout',
    exerciseCount: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Back',
  },
  {
    id: '2',
    title: 'Begineer Chest Workout',
    exerciseCount: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Chest',
  },
  {
    id: '3',
    title: 'Advanced ABS Workout',
    exerciseCount: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ABS',
  },
  {
    id: '4',
    title: 'Advanced Leg Workout',
    exerciseCount: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Leg',
  },
];

export const badges = [
  { id: 1, name: 'Chest' },
  { id: 2, name: 'Biceps' },
  { id: 3, name: 'Triceps' },
  { id: 4, name: 'Shoulders' },
  { id: 5, name: 'Back' },
  { id: 6, name: 'Leg' },
  { id: 7, name: 'ABS' },
  { id: 8, name: 'Wrists' },
];

export type ExerciseHistory = {
  date: string; // "2024-10-05" gibi bir formatta tarih
  completedExercises: Exercise[]; // O gün tamamlanan egzersizler
};

export const userExerciseHistory: ExerciseHistory[] = [
  {
    date: '2024-10-03',
    completedExercises: [
      {
        id: 1,
        name: 'Bench Press',
        setCount: 4,
        repCount: '8-12',
        restTime: 60,
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
      },
    ],
  },
  {
    date: '2024-10-05',
    completedExercises: [
      {
        id: 2,
        name: 'Incline Dumbell Fly',
        setCount: 4,
        repCount: '12-15',
        restTime: 60,
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
      },
      {
        id: 3,
        name: 'Barbell Bench Press',
        setCount: 5,
        repCount: '12-15',
        restTime: 60,
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
      },
    ],
  },
];
