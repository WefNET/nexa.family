import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NexaDataService {
  constructor(private http: HttpClient) { }

  recipesId = "1LMTxeUbsoQfucPcextHj7fNEYFXcmWU7wyrzB_UTDug"
  recipesSpreadsheetBase = 'https://spreadsheets.google.com/feeds/cells/' + this.recipesId + '/od6/public/values?min-row=5&alt=json'; 

  getMainMeals() {
    return this.http.get(this.recipesSpreadsheetBase);
  }
}


