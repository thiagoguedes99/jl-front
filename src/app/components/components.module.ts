import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CarouselModule } from 'angular4-carousel';

import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

// import { ImagePipe } from './image.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    CarouselModule
  ],
  declarations: [
    // ImagePipe
    CardComponent,
    TabsComponent,
    CarouselComponent,
    ToolbarComponent,
    ToolbarComponent
  ],
  exports: [
    // ImagePipe
    AngularMaterialModule,
    CardComponent,
    TabsComponent,
    CarouselComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
