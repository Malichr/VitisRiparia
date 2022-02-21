import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = '';
  dataNameStr = '';
  inData: Observable<any> | null = null;
  email: any;
  qrInfo: string;

  constructor(private route: ActivatedRoute, private service: FbBaseService<any>, private location: Location,
    private afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }

    this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.email = user.email;
      }
    });

    this.qrInfo = '/details/' + this.dataNameStr + '/' + this.id;
  }

  getItem(): void {
    this.inData = this.service.getById(this.dataNameStr, this.id);
  }

  close(): void {
    this.location.back();
  }
}
