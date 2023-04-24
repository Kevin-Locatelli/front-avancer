import { defineStore } from 'pinia'

export const useMemoryStore = defineStore('memory', {
  state: () => ({
    categories: [],
    currentCategory: null,
    themes: [],
    currentTheme: null,
  }),
  actions: {
    loadCategories() {
      // Charger les catégories depuis une source de données, par exemple une API
      // Mettre à jour l'état des catégories dans le store
    },
    loadThemes() {
      // Charger les thèmes pour la catégorie actuelle depuis une source de données
      // Mettre à jour l'état des thèmes dans le store
    },
    loadTheme() {
      // Charger le thème actuel depuis une source de données
      // Mettre à jour l'état du thème dans le store
    },
  },
})

