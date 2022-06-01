import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css'],
})
export class Page {
  rawdtb8: string = ' '
  rawv9u7: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'exported project',
      },
    ])
  }
}
