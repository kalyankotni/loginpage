import { Component, OnInit } from '@angular/core';
import { Cases } from '../data.model';
import { Todo } from '../todo';
import { ApiService } from '../api.service';


export interface PeriodicElement {
  name: string;
  id: number;
  image: string;
  title: string;
  description: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', title: 'bolt', description: 'The Iris flower data set or Fisherall from the same pasture, and picked on the', image: '../../assets/download (1).jpg'},
  { id: 2, name: 'Helium', title: 'odde', description: 'The Iris flower data set or Fisherall from the same pasture, and picked on the', image:'../../assets/download (2).jpg' },
  { id: 3, name: 'Lithium', title: 'broun', description: 'The Iris flower data set or Fisherall from the same pasture, and picked on the', image:'../../assets/download.jpg' },
];

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'title','description'];
  dataSource = ELEMENT_DATA;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    
  }
  deleteUser(dataSource){
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != dataSource.id;
    });
    alert('delete data source')
  }

}
