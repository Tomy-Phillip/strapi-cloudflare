import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
})
export class Team {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Team - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Team - exported project',
      },
    ])
  }
}
