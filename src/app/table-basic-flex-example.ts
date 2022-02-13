import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', status: 'accepted' },
  { id: 2, name: 'Helium', status: 'accepted' },
  { id: 3, name: 'Lithium', status: 'accepted' },
  { id: 4, name: 'Beryllium', status: 'accepted' },
  { id: 5, name: 'Boron', status: 'accepted' },
  { id: 6, name: 'Carbon', status: 'accepted' },
  { id: 7, name: 'Nitrogen', status: 'accepted' },
  { id: 8, name: 'Oxygen', status: 'declined' },
  { id: 9, name: 'Fluorine', status: 'declined' },
  { id: 10, name: 'Neon', status: 'declined' },
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'table-basic-flex-example',
  styleUrls: ['table-basic-flex-example.css'],
  templateUrl: 'table-basic-flex-example.html',
})
export class TableBasicFlexExample {
  displayedColumns: string[] = ['position', 'name', 'status'];
  dataSource = ELEMENT_DATA;
  filterActive = false;
  filterActive2 = false;

  /*filterAccepted() {
    this.dataSource = ELEMENT_DATA.filter((item) => {
      if (item.status === 'accepted') {
        return item;
      }
    });

    //console.log('item.status', this.dataSource);
  }*/

  filterAccepted() {
    this.filterActive = !this.filterActive;
    if (this.filterActive) {
      this.dataSource = ELEMENT_DATA.filter((item) => {
        if (item.status === 'accepted') {
          return item;
        }
      });
    } else {
      this.dataSource = ELEMENT_DATA;
    }
    return this.dataSource;
  }

  /*filterDeclined() {
    this.dataSource = ELEMENT_DATA.filter((item) => {
      if (item.status === 'declined') {
        return item;
      }
    });
  }*/
  filterDeclined() {
    this.filterActive2 = !this.filterActive2;
    if (this.filterActive2) {
      this.dataSource = ELEMENT_DATA.filter((item) => {
        if (item.status === 'declined') {
          return item;
        }
      });
    } else {
      this.dataSource = ELEMENT_DATA;
    }
    return this.dataSource;
  }
}
