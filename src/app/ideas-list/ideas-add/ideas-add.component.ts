import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { ideas } from '../../ideas.model';

@Component({
  selector: 'app-ideas-add',
  templateUrl: './ideas-add.component.html',
  styleUrls: ['./ideas-add.component.css']
})
export class IdeasAddComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('ideaInput') ideaInputRef: ElementRef;
@Output() ideasAdded= new EventEmitter<ideas>();
//it will get the value by using @viewChild 
//then I pass the name of the local references
//then I emit a new event where 
//I pass this data to the parent component which is the idea-list component

  constructor() { }

  ngOnInit(): void {
  }
onAdd(){
  const name=this.nameInputRef.nativeElement.value;
  const idea=this.ideaInputRef.nativeElement.value;
  const newIdea= new ideas(name, idea); 
  this.ideasAdded.emit(newIdea);
}
onClear(){
 this.nameInputRef.nativeElement.value="";
this.ideaInputRef.nativeElement.value="";
}
}
