import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  currentRecipe: Recipe;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.currentRecipe = this.recipeService.getRecipe(id);
  }

}
