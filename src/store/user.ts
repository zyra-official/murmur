import { create } from "zustand";

interface UserState {
  username: string;
  _id: string;
  setUsername: (username: string) => void;
  setUser: (user: { _id: string; username: string }) => void;
}

export const useUser = create<UserState>((set) => ({
  username: "",
  _id: "",
  setUsername: (username: string) => set(() => ({ username })),
  setUser: ({ _id, username }: { _id: string; username: string }) =>
    set(() => ({ _id, username })),
}));
