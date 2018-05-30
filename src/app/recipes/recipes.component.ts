import { Component, OnInit } from '@angular/core';
import { NexaDataService } from './../services/nexa-data.service';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  blockedDocument: boolean = false;

  recipes: any;
  recipeData: RecipeCell[] = [];
  mainmealRecipes: Recipe[] = [];

  dessertRecipesData: any;
  dessertRecipeCells: RecipeCell[] = [];
  dessertRecipes: Recipe[] = [];

  breadRecipesData: any;
  breadRecipeCells: RecipeCell[] = [];
  breadRecipes: Recipe[] = [];

  snackRecipesData: any;
  snackRecipeCells: RecipeCell[] = [];
  snackRecipes: Recipe[] = [];

  ingRecipesData: any;
  ingRecipeCells: RecipeCell[] = [];
  ingRecipes: Recipe[] = [];

  beverageRecipesData: any;
  beverageRecipeCells: RecipeCell[] = [];
  beverageRecipes: Recipe[] = [];

  constructor(private dataService: NexaDataService) {
  }

  ngOnInit() {
    this.getMainMeals();
  }

  getMainMeals() {
    this.dataService.getMainMeals()
      .subscribe((data: any) => {
        this.recipes = data;

        this.recipes.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.recipeData.push(rd);
        });

        for (let x = 0; x < this.recipeData.length / 7; x++) {
          let groupedRows = this.recipeData.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {

            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.mainmealRecipes.push(r);
          }
        }
      });
  }

  getDesserts() {
    this.blockedDocument = true;
    this.dataService.getDessert()
      .subscribe((data: any) => {
        this.dessertRecipesData = data;

        this.dessertRecipesData.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.dessertRecipeCells.push(rd);
        });

        for (let x = 0; x < this.dessertRecipeCells.length / 7; x++) {
          let groupedRows = this.dessertRecipeCells.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {

            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.dessertRecipes.push(r);
          }
        }

        this.blockedDocument = false;
      });
  }

  getBreads() {
    this.blockedDocument = true;
    this.dataService.getBreads()
      .subscribe((data: any) => {
        this.breadRecipesData = data;

        this.breadRecipesData.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.breadRecipeCells.push(rd);
        });

        for (let x = 0; x < this.breadRecipeCells.length / 7; x++) {
          let groupedRows = this.breadRecipeCells.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {

            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.breadRecipes.push(r);
          }
        }

        this.blockedDocument = false;
      });
  }

  getSnacks() {
    this.blockedDocument = true;
    this.dataService.getSnacks()
      .subscribe((data: any) => {
        this.snackRecipesData = data;

        this.snackRecipesData.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.snackRecipeCells.push(rd);
        });

        for (let x = 0; x < this.snackRecipeCells.length / 7; x++) {
          let groupedRows = this.snackRecipeCells.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {

            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.snackRecipes.push(r);
          }
        }

        this.blockedDocument = false;
      });
  }

  getIngredients() {
    this.blockedDocument = true;
    this.dataService.getIngredients()
      .subscribe((data: any) => {
        this.ingRecipesData = data;

        this.ingRecipesData.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.ingRecipeCells.push(rd);
        });

        for (let x = 0; x < this.ingRecipeCells.length / 7; x++) {
          let groupedRows = this.ingRecipeCells.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {
            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.ingRecipes.push(r);
          }
        }

        this.blockedDocument = false;
      });
  }

  getBeverages() {
    this.blockedDocument = true;
    this.dataService.getBeverages()
      .subscribe((data: any) => {
        this.beverageRecipesData = data;

        this.beverageRecipesData.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.beverageRecipeCells.push(rd);
        });

        for (let x = 0; x < this.beverageRecipeCells.length / 7; x++) {
          let groupedRows = this.beverageRecipeCells.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {

            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.beverageRecipes.push(r);
          }
        }

        this.blockedDocument = false;
      });
  }

  handleTabChange(evt: Event) {
    // console.log("Tab Event", evt);

    if (evt["index"] == 1)
    {
      if (this.dessertRecipes.length <= 0)
      {
        this.getDesserts();
      }
    }

    if (evt["index"] == 2)
    {
      if (this.breadRecipes.length <= 0)
      {
        this.getBreads();
      }
    }

    if (evt["index"] == 3)
    {
      if (this.snackRecipes.length <= 0)
      {
        this.getSnacks();
      }
    }

    if (evt["index"] == 4)
    {
      if (this.ingRecipeCells.length <= 0)
      {
        this.getIngredients();
      }
    }

    if (evt["index"] == 5)
    {
      if (this.beverageRecipes.length <= 0)
      {
        this.getBeverages();
      }
    }
  }

  transformGroupedCells(group: RecipeCell[]): Recipe {
    let r: Recipe = new Recipe();

    let col1 = group.find(x => x.Col == 1);
    if (col1) r.Date = col1.Content;

    let col2 = group.find(x => x.Col == 2);
    if (col2) {
      r.Difficulty = col2.Content;
    }

    let col3 = group.find(x => x.Col == 3);
    if (col3) r.Name = col3.Content;

    let col4 = group.find(x => x.Col == 4);
    if (col4) r.OvenType = col4.Content;

    let col5 = group.find(x => x.Col == 5);
    if (col5) r.Container = col5.Content;

    let col6 = group.find(x => x.Col == 6);
    if (col6) r.Tool = col6.Content;

    let col7 = group.find(x => x.Col == 7);
    if (col7) r.MandatoryIngredients = col7.Content;

    let col8 = group.find(x => x.Col == 8);
    if (col8) r.OptionalIngredients = col8.Content;

    return r;
  }

}

export class RecipeCell {
  Row: number;
  Col: number;
  Content: string;
}

export class Recipe {
  Date: string;
  Difficulty: string;
  Name: string;
  OvenType: string;
  Container: string;
  Tool: string;
  MandatoryIngredients: string;
  OptionalIngredients: string;
} 