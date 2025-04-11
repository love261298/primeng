import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { FormRoutingModule } from './form-routing.module';
import { AutoComplateComponent } from './auto-complate/auto-complate.component';
import { ImportModule } from '../../common/import.module';
import { CountryService } from '../../services/country.service';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { PasswordComponent } from './password/password.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RatingComponent } from './rating/rating.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { SliderComponent } from './slider/slider.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { TriStateCheckBoxComponent } from './tri-state-check-box/tri-state-check-box.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { IconFieldComponent } from './icon-field/icon-field.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputOtpComponent } from './input-otp/input-otp.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputTextComponent } from './input-text/input-text.component';
import { KeyFilterComponent } from './key-filter/key-filter.component';
import { KnobComponent } from './knob/knob.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';



@NgModule({
  declarations: [
    CalendarComponent,
    AutoComplateComponent,
    CascadeSelectComponent,
    CheckBoxComponent,
    ChipsComponent,
    ColorPickerComponent,
    DropdownComponent,
    EditorComponent,
    PasswordComponent,
    RadioButtonComponent,
    RatingComponent,
    SelectButtonComponent,
    SliderComponent,
    TreeSelectComponent,
    TriStateCheckBoxComponent,
    ToggleButtonComponent,
    FloatLabelComponent,
    IconFieldComponent,
    InputGroupComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputNumberComponent,
    InputOtpComponent,
    KnobComponent,
    KeyFilterComponent,
    ListBoxComponent,
    MultiSelectComponent
  ],
  imports: [
    ImportModule,
    FormRoutingModule,
  ],
  providers: [CountryService]
})
export class FormModule { }
