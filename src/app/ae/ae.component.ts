import { Component, OnInit } from '@angular/core';
import { NexaDataService } from './../services/nexa-data.service';

@Component({
  selector: 'app-ae',
  templateUrl: './ae.component.html',
  styleUrls: ['./ae.component.css']
})
export class AeComponent implements OnInit {
  citizens: Citizen[] = [];

  constructor(private dataService: NexaDataService) {
  }

  ngOnInit() {
    this.getCitizens();
  }

  getCitizens() {
    this.dataService.getAECitizens()
      .subscribe((data) => {
        var citizensData = data["valueRanges"][0].values;

        citizensData.forEach(citizen => {
          let c: Citizen = new Citizen();

          c.Name = citizen[0];
          c.Started = citizen[1] != null || citizen[1] != "" ? this.castDate(citizen[1]) : null;
          c.LastSeen = citizen[2] != null || citizen[2] != "" ? this.castDate(citizen[2]) : new Date("01/01/1970");
          c.Role = citizen[3] != null || citizen[3] != "" ? citizen[3] : null;

          this.citizens.push(c);
        });



        // this.citizens.sort(function (a, b) {
        //   // Turn your strings into dates, and then subtract them
        //   // to get a value that is either negative, positive, or zero.

        //   var c = a.LastSeen;
        //   var d = b.LastSeen;
        //   if (d < c) {
        //     return -1;
        //   } else if (d > c) {
        //     return 1;
        //   }
        //   return 0;
        // });

        console.log("Citizens", this.citizens);
      })
  }

  castDate(dateString: string): Date {
    if (dateString.length <= 1) return new Date("01/01/1970");

    try {
      var date = new Date(dateString)

      return date;
    }
    catch {
      return null;
    }
  }

}

export class Citizen {
  Name: string;
  Started: Date;
  LastSeen: Date;
  Role: string;
}
