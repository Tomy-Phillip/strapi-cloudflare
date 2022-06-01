import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links5',
  templateUrl: 'navigation-links5.component.html',
  styleUrls: ['navigation-links5.component.css'],
})
export class NavigationLinks5 {
  @Input()
  rootClassName: string = ''
  @Input()
  text3: string = 'Team'
  @Input()
  text1: string = 'Features'
  @Input()
  text: string = 'About'
  @Input()
  text2: string = 'Pricing'
  @Input()
  text4: string = 'Blog'

  constructor() {}
}
