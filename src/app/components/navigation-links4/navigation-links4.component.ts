import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links4',
  templateUrl: 'navigation-links4.component.html',
  styleUrls: ['navigation-links4.component.css'],
})
export class NavigationLinks4 {
  @Input()
  text: string = 'About'
  @Input()
  text1: string = 'Features'
  @Input()
  text4: string = 'Blog'
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Pricing'
  @Input()
  text3: string = 'Team'

  constructor() {}
}
