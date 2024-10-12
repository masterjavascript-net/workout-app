export type TabItem = {
  text: string;
  iconName?: string;
  index: number;
};

export const tabItems: TabItem[] = [
  { index: 1, text: 'Workout', iconName: 'dumbbell' },
  { index: 2, text: 'Meal', iconName: 'utensils' },
];

//
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

// ------------------------------ All Types related User
export type User = {
  id: string;
  name: string;
  profileImage?: string;
  createdWorkouts: WorkoutPlan[];
  selectedWorkoutPlans: WorkoutPlan[];
  workoutSchedule: WorkoutSchedule[]; // Günlere atanmış birden fazla workout planları
  workoutDays: string[]; // Haftada hangi günler antrenman yapılacak
  workoutHistory: WorkoutHistory[]; // Tamamlanmış antrenmanların geçmişi
  bodyProgressImages: string[]; // Vücut gelişim resimleri
};

type WorkoutSchedule = {
  day: string;
  workoutPlans: WorkoutPlan[]; // Birden fazla workout planı
  selectedWorkoutPlan?: WorkoutPlan; // Seçilen workout planı o gün için
};

export type WorkoutPlan = {
  id: string;
  name: string;
  exercises: Exercise[];
  backgroundImage?: string;
  category: string;
};

type Exercise = {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  reps: number;
  weight?: number; // Optional, as not all exercises have weight (e.g., bodyweight exercises)
};

type WorkoutHistory = {
  date: string;
  workoutPlanId: string;
  completedExercises: CompletedExercise[];
};
type CompletedExercise = {
  exerciseId: string;
  sets: number;
  reps: number;
  weight: number;
};

// ----------------------- Fake User Data
export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Bench Press',
    muscleGroup: 'Chest',
    sets: 4,
    reps: 8,
    weight: 80,
  },
  {
    id: '2',
    name: 'Bicep Curl',
    muscleGroup: 'Biceps',
    sets: 3,
    reps: 12,
    weight: 30,
  },
  {
    id: '3',
    name: 'Squat',
    muscleGroup: 'Legs',
    sets: 4,
    reps: 10,
    weight: 100,
  },
  {
    id: '4',
    name: 'Deadlift',
    muscleGroup: 'Back',
    sets: 3,
    reps: 8,
    weight: 120,
  },
  {
    id: '5',
    name: 'Shoulder Press',
    muscleGroup: 'Shoulders',
    sets: 4,
    reps: 10,
    weight: 50,
  },
];

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'wp1',
    name: 'Heavy Weight Chest & Biceps',
    exercises: [exercises[0], exercises[1]], // Bench Press, Bicep Curl
    backgroundImage:
      'https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Chest & Biceps',
  },
  {
    id: 'wp2',
    name: 'Leg Day',
    exercises: [exercises[2]], // Squat
    backgroundImage:
      'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Legs',
  },
  {
    id: 'wp3',
    name: 'Back & Shoulders',
    exercises: [exercises[3], exercises[4]], // Deadlift, Shoulder Press
    backgroundImage:
      'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Back & Shoulders',
  },
  {
    id: 'wp4',
    name: 'Light Weight High Reps Chest & Biceps',
    exercises: [exercises[0], exercises[1]], // Bench Press, Bicep Curl
    backgroundImage:
      'https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Chest & Biceps',
  },
];

export const user: User = {
  id: 'user1',
  name: 'Eljan',
  profileImage:
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  createdWorkouts: [workoutPlans[0], workoutPlans[1]], // Kendi oluşturduğu workout planları
  selectedWorkoutPlans: [workoutPlans[2], workoutPlans[3]], // Seçtiği hazır workout planları
  workoutSchedule: [
    {
      day: 'Monday',
      workoutPlans: [workoutPlans[0], workoutPlans[1]], // Monday için 2 plan
    },
    {
      day: 'Friday',
      workoutPlans: [workoutPlans[2]], // Friday için Leg Day
    },
  ],
  workoutDays: ['Monday', 'Wednesday', 'Friday'],
  workoutHistory: [
    {
      date: '2024-10-01',
      workoutPlanId: 'wp1',
      completedExercises: [
        { exerciseId: '1', sets: 4, reps: 8, weight: 80 }, // Bench Press
        { exerciseId: '2', sets: 3, reps: 12, weight: 30 }, // Bicep Curl
      ],
    },
    {
      date: '2024-10-03',
      workoutPlanId: 'wp3',
      completedExercises: [
        { exerciseId: '3', sets: 4, reps: 10, weight: 100 }, // Squat
      ],
    },
  ],
  bodyProgressImages: ['progress_oct_2024.jpg', 'progress_nov_2024.jpg'], // Vücut gelişim fotoğrafları
};
