import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class DataEntryComponent implements OnInit {


  documentForm: FormGroup
  router = inject(Router)

  constructor() {
    this.documentForm = new FormGroup({
      documentType: new FormControl('', Validators.required),
      documentNumber: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(14),
          Validators.pattern(/^\d{1,3}(\.\d{3})*$/)

        ]
      )
    })
  }

  ngOnInit() {

  }

  formatDocumentNumber() {
    let value = this.documentForm.get('documentNumber')?.value.replace(/\D/g, '')

    if (value) {
      const formattedValue = new Intl.NumberFormat('es-ES').format(Number(value))
      this.documentForm.patchValue({
        documentNumber: formattedValue
      });
    }
  }


  onSubmit(): void {
    if (this.documentForm.valid) {
      const documentNumber = this.documentForm.get('documentNumber')?.value.replace(/\D/g, '')
      this.router.navigate([`/information-sumary/${documentNumber}`]);
    } else {
      console.log('Formulario no válido')
    }
  }

}
