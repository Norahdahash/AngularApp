import { Component, OnInit } from '@angular/core';
import { EmailRepository } from '../repository/email';

interface Email {
  email: string;
}

@Component({
  selector: 'app-emailg',
  templateUrl: './emailg.component.html',
  styleUrls: ['./emailg.component.css']
})
export class EmailgComponent implements OnInit {

  title = "Generate an email";

  email: Email;
  null = null;
  // I initialize the EmailRepository class
  constructor(private emailReponse: EmailRepository) { }

  ngOnInit(): void {
    // this.fetchEmail();
  }
  // I load the emails
  private async fetchEmail() {
    this.email = await this.emailReponse.random();

  }

  //here it loads other emails when the user repress the button
  async changeEmail() {
    this.email = null;
    this.fetchEmail();
  }


}

