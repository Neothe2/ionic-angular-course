import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipes.page';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Chicken Tikka Masala',
      imageUrl:
        'https://th.bing.com/th/id/OIP.ypYqqX44HoRHAaaltLSxgQAAAA?w=204&h=306&c=7&r=0&o=5&pid=1.7',
      ingredients: ['Chicken', 'Masala', 'Salt'],
    },
    {
      id: 2,
      title: 'Paneer Tikka Masala',
      imageUrl:
        'https://th.bing.com/th/id/OIP.ZplRPK-V7EBz0IVjD5llQgHaE6?w=297&h=197&c=7&r=0&o=5&pid=1.7',
      ingredients: ['Paneer', 'Masala', 'Salt'],
    },
    {
      id: 3,
      title: 'Chicken Tikka Masala',
      imageUrl:
        'https://th.bing.com/th/id/OIP.ypYqqX44HoRHAaaltLSxgQAAAA?w=204&h=306&c=7&r=0&o=5&pid=1.7',
      ingredients: ['Chicken', 'Masala', 'Salt'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return { ...this.recipes.find((recipe) => recipe.id === id) };
  }
}
