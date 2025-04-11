import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AutoComplateComponent } from './auto-complate/auto-complate.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { IconFieldComponent } from './icon-field/icon-field.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputOtpComponent } from './input-otp/input-otp.component';
import { KnobComponent } from './knob/knob.component';
import { KeyFilterComponent } from './key-filter/key-filter.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PasswordComponent } from './password/password.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RatingComponent } from './rating/rating.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { SliderComponent } from './slider/slider.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { TriStateCheckBoxComponent } from './tri-state-check-box/tri-state-check-box.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

const routes: Routes = [
  { path: 'auto-complete', component: AutoComplateComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'cascade-select', component: CascadeSelectComponent },
  { path: 'check-box', component: CheckBoxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'float-label', component: FloatLabelComponent },
  { path: 'icon-field', component: IconFieldComponent },
  { path: 'input-group', component: InputGroupComponent },
  { path: 'input-mask', component: InputMaskComponent },
  { path: 'input-switch', component: InputSwitchComponent },
  { path: 'input-text', component: InputTextComponent },
  { path: 'input-text-area', component: InputTextAreaComponent },
  { path: 'input-number', component: InputNumberComponent },
  { path: 'input-otp', component: InputOtpComponent },
  { path: 'knob', component: KnobComponent },
  { path: 'key-filter', component: KeyFilterComponent },
  { path: 'list-box', component: ListBoxComponent },
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'select-button', component: SelectButtonComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'tree-select', component: TreeSelectComponent },
  { path: 'tri-state-check-box', component: TriStateCheckBoxComponent },
  { path: 'toggle-button', component: ToggleButtonComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormRoutingModule { }
