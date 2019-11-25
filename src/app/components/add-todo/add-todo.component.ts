import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  addTodoForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddTodoComponent>) { }

  ngOnInit() {
    this.addTodoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  addTodo() {
    this.dialogRef.close(this.addTodoForm.value);
  }
}
