import {Component, OnInit} from '@angular/core';
import {ReposService} from '../repos.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  repos = [];
  selectedLanguage = this.languages[0];
  onSelect(lang: string): void {
    this.reposService
      .getPopularRepos(lang)
      .subscribe((repos) => (this.repos = repos.items));
    this.selectedLanguage = lang;
  }
  constructor(private reposService: ReposService) {}

  ngOnInit(): void {
    this.onSelect(this.selectedLanguage);
  }
}
