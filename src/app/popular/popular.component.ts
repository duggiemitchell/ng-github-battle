import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  selectedLanguage = this.languages[0];
  onSelect(lang: string): void {
    this.selectedLanguage = lang;
  }
  constructor() {}

  ngOnInit() {}
}
