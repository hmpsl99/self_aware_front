import { defineStore } from "pinia";
import router  from "../router/index"

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const res = await fetch("https://localhost:8000/login");

      const user = await res.json();
      this.user = user;
    },
    async signUp(phone_number, password) {
      const res = await fetch("https://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone_number, password }),
      });
      const user = await res.json()
      this.user = user;
    },
    async signIn(phone_number, password) {
      const res = await fetch("https://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone_number, password }),
      });
      const user = await res.json();
      this.user = user;
    },
    async signOut() {
        const res = await fetch("https://localhost:8000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'token ' + this.user.token
        },
      });
      if (res.ok) {
        this.user = null
        router.push('/login')
      }
    }
  },
});