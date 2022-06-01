import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links1',
  templateUrl: 'navigation-links1.component.html',
  styleUrls: ['navigation-links1.component.css'],
})
export class NavigationLinks1 {
  @Input()
  text4: string = 'Blog'
  @Input()
  text: string = 'About'
  @Input()
  text1: string = 'Features'
  @Input()
  text2: string = 'Pricing'
  @Input()
  rootClassName: string = ''
  @Input()
  text3: string = 'Team'

  constructor() {}
}
