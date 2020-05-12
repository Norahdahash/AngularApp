import { Component, OnInit } from '@angular/core';
import { TranslateService } from  '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translate:  TranslateService) {
    translate.setDefaultLang('ar');
   translate.use('ar');
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
  ngOnInit(): void {
  }

}
