import { Component, OnInit } from '@angular/core';
import {ideas} from '../ideas.model';
@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css']
})
export class IdeasListComponent implements OnInit {
ideas: ideas[]=[
 
];
  constructor() { }

  ngOnInit(): void {
  }
  onIdeaAdded(ideas: ideas){
this.ideas.push(ideas);

}
}