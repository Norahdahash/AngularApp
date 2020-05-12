import { Injectable } from '@angular/core';



//it allows the object to receives other objects that it depends on.
@Injectable()
export class EmailRepository {

  //to use the await I should `async` keyword to my function
  async random() {
    const response = await fetch("https://randomuser.me/api/");
    //wait for a Promise
    // wait until the promise returns a result
    const data = await response.json();// convert it to json file
    const email = data.results[0];


    return email;
  }
}
