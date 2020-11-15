import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


import { StampCardComponent } from "@shared/components/stamp-card/stamp-card.component";
import { ButtonsComponent } from '@shared/components/buttons/buttons.component';
import { TextAreaComponent } from '@shared/components/text-area/text-area.component';

import { ClickOutsideDirective } from '@app/shared/directives/click-outside/click-outside.directive';
import { ScrollDirective } from "@app/shared/directives/scroll/scroll.directive";

const modules = [CommonModule, DragDropModule, FormsModule];
const components = [StampCardComponent, ButtonsComponent, TextAreaComponent];
const directives = [ScrollDirective, ClickOutsideDirective];

@NgModule({
  declarations: [...components, ...directives],
  imports: [...modules],
  exports: [...modules, ...components, ...directives]
})
export class SharedModule {}
