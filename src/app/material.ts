import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatSelectModule, MatTabsModule, MatTableModule,
    MatListModule, MatChipsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatSelectModule, MatTabsModule, MatTableModule,
    MatListModule, MatChipsModule],
})
export class MaterialModule {}
