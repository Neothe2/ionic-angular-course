import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];
  constructor(public router: Router, public recipeService: RecipeService) {
    this.recipes = recipeService.getAllRecipes();
  }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }

  detail(id: number) {
    this.router.navigate([`/recipes/${id}/`]);
  }
}

//an interface called recipe which has id, title, imageUrl and ingredients
export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  ingredients: string[];
}
