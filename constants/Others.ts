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
