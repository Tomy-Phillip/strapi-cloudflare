import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { NavigationLinks2 } from './navigation-links2/navigation-links2.component'
import { NavigationLinks4 } from './navigation-links4/navigation-links4.component'
import { NavigationLinks3 } from './navigation-links3/navigation-links3.component'
import { NavigationLinks5 } from './navigation-links5/navigation-links5.component'
import { TestimonialCard2 } from './testimonial-card2/testimonial-card2.component'
import { TestimonialCard4 } from './testimonial-card4/testimonial-card4.component'
import { TestimonialCard21 } from './testimonial-card21/testimonial-card21.component'
import { TestimonialCard41 } from './testimonial-card41/testimonial-card41.component'
import { TestimonialCard1 } from './testimonial-card1/testimonial-card1.component'

@NgModule({
  declarations: [
    NavigationLinks,
    NavigationLinks1,
    NavigationLinks2,
    NavigationLinks4,
    NavigationLinks3,
    NavigationLinks5,
    TestimonialCard2,
    TestimonialCard4,
    TestimonialCard21,
    TestimonialCard41,
    TestimonialCard1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationLinks,
    NavigationLinks1,
    NavigationLinks2,
    NavigationLinks4,
    NavigationLinks3,
    NavigationLinks5,
    TestimonialCard2,
    TestimonialCard4,
    TestimonialCard21,
    TestimonialCard41,
    TestimonialCard1,
  ],
})
export class ComponentsModule {}
