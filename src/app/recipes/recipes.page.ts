import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  
  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipesService.getAllRecipes());
  }

  goTo(recipeId: string){
    this.router.navigate(['/recipe-detail',{id: recipeId}])
  }
  
}
