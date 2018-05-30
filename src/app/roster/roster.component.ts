import { Component, OnInit } from '@angular/core';
import { NexaDataService } from './../services/nexa-data.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  playerData: any;
  playerCells: DataCell[] = [];
  players: Player[] = [];

  constructor(private dataService: NexaDataService) {
  }

  ngOnInit() {
    this.getRoster();
  }

  getRoster() {
    this.dataService.getRoster()
      .subscribe((data: any) => {
        this.playerData = data;

        this.playerData.feed.entry.forEach(cell => {
          let rd = new DataCell();

          rd.Row = cell.gs$cell.row;
          rd.Col = cell.gs$cell.col;
          rd.Content = cell.content.$t;

          this.playerCells.push(rd);
        });

        // console.log("Player cells:", this.playerCells);

        for (let x = 2; x < this.playerCells.length; x++) {
          let groupedRows = this.playerCells.filter(cells => cells.Row == x)

          if (groupedRows.length > 0) {

            let r: Player = this.transformGroupedCells(groupedRows);

            this.players.push(r);
          }
        }

        console.log("Players", this.players);
      });
  }

  transformGroupedCells(group: DataCell[]): Player {
    let r: Player = new Player();

    let col1 = group.find(x => x.Col == 1);
    if (col1) r.Main = col1.Content;

    let col2 = group.find(x => x.Col == 2);
    if (col2) {
      r.Alts = col2.Content;
    }

    let col3 = group.find(x => x.Col == 3);
    if (col3) r.Title = col3.Content;

    let col4 = group.find(x => x.Col == 4);
    if (col4) r.Status = col4.Content;

    return r;
  }

}

export class DataCell {
  Row: number;
  Col: number;
  Content: string;
}

export class Player {
  Main: string;
  Alts: string;
  Title: string;
  Status: string;
}

