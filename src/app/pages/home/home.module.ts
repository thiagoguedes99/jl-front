import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ng g m pages/home --routing

// import { ComponentsModule } from 'src/app/components/components.module';
import { ComponentsModule } from './../../components/components.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: []
})
export class HomeModule { }
