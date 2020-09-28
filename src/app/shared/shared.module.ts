import { NgModule } from '@angular/core';

import { ItemBorderColorDirective } from './directives/item-border-color.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  declarations: [
    ItemBorderColorDirective,
    FormatDatePipe,
    ActionsComponent
  ],
  exports: [
    ItemBorderColorDirective,
    FormatDatePipe,
    ActionsComponent
  ],
  imports: [],
  providers: [],
  // bootstrap: [AppComponent]
})
export class SharedModule { }
