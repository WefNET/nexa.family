import { Component, OnInit } from '@angular/core';
import { NexaDataService } from './../services/nexa-data.service';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: any;
  recipeData: RecipeCell[] = [];
  masterRecipes: Recipe[] = [];

  constructor(private dataService: NexaDataService) {
    this.dataService.getMainMeals()
      .subscribe((data: any) => {
        this.recipes = data;
        // console.log("Recipes data:", this.recipes.feed.entry);

        this.recipes.feed.entry.forEach(cell => {
          let rd = new RecipeCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.recipeData.push(rd);
        });

        // console.log("Recipe cells", this.recipeData);

        for (let x = 0; x < this.recipeData.length / 7; x++) {
          let groupedRows = this.recipeData.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {
            // console.log("Group", x, groupedRows);

            let r: Recipe = this.transformGroupedCells(groupedRows);

            this.masterRecipes.push(r);
          }
        }
      })
  }

  ngOnInit() {

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
