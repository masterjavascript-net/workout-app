import moment from 'moment';
import { create } from 'zustand';

type GeneralAppStore = {
  currentTheme: 'dark' | 'light' | 'system';
  changeTheme: (theme: string) => void;

  curenntLanguage: 'en' | 'az' | 'system';
  changeLanguage: (language: string) => void;

  selectedWorkoutDay: number;
  setSelectedWorkoutDay: (day: number) => void;
  resetWorkoutDay: () => void;
};

export const useGeneralAppStore = create<GeneralAppStore>((set) => ({
  currentTheme: 'system',
  changeTheme: (theme) => {
    set({ currentTheme: theme as 'dark' | 'light' | 'system' });
  },

  curenntLanguage: 'en',
  changeLanguage: (language) => {
    set({ curenntLanguage: language as 'en' | 'az' | 'system' });
  },

  selectedWorkoutDay: moment().date(),
  setSelectedWorkoutDay: (day) => {
    set({ selectedWorkoutDay: day });
  },
  resetWorkoutDay: () => set({ selectedWorkoutDay: moment().date() }),
}));
