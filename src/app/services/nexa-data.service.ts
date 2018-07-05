import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NexaDataService {
  constructor(private http: HttpClient) { }

  recipesId = "1LMTxeUbsoQfucPcextHj7fNEYFXcmWU7wyrzB_UTDug";
  rosterId = "1ueJlI49SLW2HXe9xQ4nxlhPLi-Mx8W86eaHabEWEFYI";
  recipesSpreadsheetBase = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/od6/public/values?min-row=5&alt=json'; 
  recipesSpreadsheetDesserts = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/2/public/values?min-row=2&alt=json';
  recipesSpreadsheetBreads = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/3/public/values?min-row=2&alt=json';
  recipesSpreadsheetSnacks = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/4/public/values?min-row=2&alt=json';
  recipesSpreadsheetIngredients = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/5/public/values?min-row=2&alt=json';
  recipesSpreadsheetBeverages = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/6/public/values?min-row=2&alt=json';

  rosterSpreadsheet = 'https://spreadsheets.google.com/feeds/cells/' + this.rosterId + '/od6/public/values?min-row=2&alt=json'; 

  private v4API = "https://sheets.googleapis.com/v4/spreadsheets";
    private aeSheetId = "17lVxou_3sP7Ytx4OlmQsaCJwomEwHv-iErCX-JgQuG8";
    private q1 = "ranges=Citizens!A2:D";
    private q2 = "ranges=Canals!A2:I";
    private q3 = "ranges=Bridges!A2:E";
    private q4 = "ranges=Landmarks!A2:D";
    private yourMotherSmokesCrack = "AIzaSyDi4nKWGegwmPuesj8GLa3kRaiFw0I-v2g";

    private _v4SheetsAPIAECitizensData: string = `${this.v4API}/${this.aeSheetId}/values:batchGet?${this.q1}&key=${this.yourMotherSmokesCrack}`;

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

  getRoster() {
    return this.http.get(this.rosterSpreadsheet);
  }

  getAECitizens() {
    return this.http.get(this._v4SheetsAPIAECitizensData);
  }
}


