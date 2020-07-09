import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private submissionForm: AngularFirestoreCollection<any>;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
  }
  ourForm: FormGroup;
  ngOnInit(): void {
    this.submissionForm = this.firestore.collection('submissions');
    this.ourForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
   submitData(value: any) {
     console.log(value);
     this.submissionForm.add(value).then(res => {
       console.log('Data added');
     }).catch(err => console.log(err)
    );
   }
}
