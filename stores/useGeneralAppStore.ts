import moment from 'moment';
import { create } from 'zustand';

type GeneralAppStore = {
  currentTheme: 'dark' | 'light' | 'system';
  changeTheme: (theme: string) => void;

  curenntLanguage: 'en' | 'az' | 'system';
  changeLanguage: (language: string) => void;

  currentWorkoutDay: number;
  setCurrentWorkoutDay: (day: number) => void;
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

  currentWorkoutDay: moment().date(),
  setCurrentWorkoutDay: (day) => {
    set({ currentWorkoutDay: day });
  },
}));
