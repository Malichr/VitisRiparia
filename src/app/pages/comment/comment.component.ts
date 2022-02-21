import { Comment } from '../../shared/models/comment.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  id = '';
  email: string | null | undefined;
  comments: Observable<Comment[]> | undefined;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    userEmail: new FormControl(''),
    productId: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(private service: FbBaseService<any>, private afAuth: AngularFireAuth, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
    }

    this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.email = user.email;
      }
    });

    this.comments = this.service.getComment(this.id);
  }

  addComment(): void {
    if(this.form.valid){
      const newComment: Comment  ={
        id: '',
        userEmail: this.email,
        productId: this.id,
        comment: this.form.value.comment
      };
      this.service.add('comment', newComment).then((id: any) => { /*console.log(id);*/ });
    }
  }
}
