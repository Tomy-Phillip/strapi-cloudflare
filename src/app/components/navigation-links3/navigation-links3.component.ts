import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links3',
  templateUrl: 'navigation-links3.component.html',
  styleUrls: ['navigation-links3.component.css'],
})
export class NavigationLinks3 {
  @Input()
  text: string = 'About'
  @Input()
  text1: string = 'Features'
  @Input()
  text4: string = 'Blog'
  @Input()
  text3: string = 'Team'
  @Input()
  text2: string = 'Pricing'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
