import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Sphagetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Spaghetti_carbonara_-_Trishhhh.jpg/359px-Spaghetti_carbonara_-_Trishhhh.jpg',
      ingredients: ['Pasta', 'Tomato Sauce', 'Salad']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipes => {
      return recipes.id == recipeId;
    })};
  }
}
