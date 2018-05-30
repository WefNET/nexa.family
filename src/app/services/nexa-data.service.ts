import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NexaDataService {
  constructor(private http: HttpClient) { }

  recipesId = "1LMTxeUbsoQfucPcextHj7fNEYFXcmWU7wyrzB_UTDug"
  recipesSpreadsheetBase = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/od6/public/values?min-row=5&alt=json'; 
  recipesSpreadsheetDesserts = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/2/public/values?min-row=2&alt=json';
  recipesSpreadsheetBreads = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/3/public/values?min-row=2&alt=json';
  recipesSpreadsheetSnacks = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/4/public/values?min-row=2&alt=json';
  recipesSpreadsheetIngredients = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/5/public/values?min-row=2&alt=json';
  recipesSpreadsheetBeverages = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/6/public/values?min-row=2&alt=json';

  getMainMeals() {
    return this.http.get(this.recipesSpreadsheetBase);
  }

  getDessert()
  {
    return this.http.get(this.recipesSpreadsheetDesserts);
  }

  getBreads()
  {
    return this.http.get(this.recipesSpreadsheetBreads);
  }

  getSnacks()
  {
    return this.http.get(this.recipesSpreadsheetSnacks);
  }

  getIngredients() {
    return this.http.get(this.recipesSpreadsheetIngredients);
  }

  getBeverages() {
    return this.http.get(this.recipesSpreadsheetBeverages);
  }
}


