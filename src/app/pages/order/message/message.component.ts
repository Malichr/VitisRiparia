import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {paidFor: boolean}, public dialogRef: MatDialogRef<MessageComponent>,
  private router: Router) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/home');
  }
}
