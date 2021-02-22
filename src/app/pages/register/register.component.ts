import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Program } from 'src/app/stores/program/program.model';
import { ProgramService } from 'src/app/stores/program/program.service';
import { RegisterService } from 'src/app/stores/register/register.service';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private onlyTextRegex = '[a-zA-ZñÑ]*';
  private phoneRegex = '\\d{0,10}';

  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  public form: FormGroup;
  public programs$: Observable<Array<Program>>;

  constructor(
    private programService: ProgramService,
    private registerService: RegisterService,
    private snackBar: MatSnackBar
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(this.onlyTextRegex)]),
      family_name: new FormControl('', [Validators.required, Validators.pattern(this.onlyTextRegex)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.pattern(this.phoneRegex)]),
      program: new FormControl(''),
      comment: new FormControl(''),
    });
    this.programs$ = this.programService.getPrograms$();
  }

  ngOnInit(): void {
    this.programService.getPrograms();
  }

  createRegister(formDirective: FormGroupDirective) {
    if (this.form.valid) {
      this.registerService.createRegister(this.form.value);
      this.snackBar.open('Guardo exitosamente', undefined, {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
      formDirective.resetForm();
      this.form.reset('');
    }
  }

}
