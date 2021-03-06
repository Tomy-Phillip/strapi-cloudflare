import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card41',
  templateUrl: 'testimonial-card41.component.html',
  styleUrls: ['testimonial-card41.component.css'],
})
export class TestimonialCard41 {
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.'
  @Input()
  role: string = 'Software Engineer'
  @Input()
  rootClassName: string = ''
  @Input()
  picture_src: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200'
  @Input()
  picture_alt: string = 'John Doe'
  @Input()
  name: string = 'John Doe'

  constructor() {}
}
