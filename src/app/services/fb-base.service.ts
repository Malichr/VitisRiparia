import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName).valueChanges() as Observable<T[]>;
  }

  getComment(id: string): Observable<T[]> {
    return this.afs.collection('comment', ref => ref.where('productId', '==', id)).valueChanges() as Observable<T[]>;
  }

  getCart(email: string): Observable<T[]> {
    return this.afs.collection('cart', ref => ref.where('userEmail', '==', email)).valueChanges() as Observable<T[]>;
  }

  getOrders(email: string, id: string): Observable<T[]> {
    return this.afs.collection('order', ref => ref.where('userEmail', '==', email)
                                                  .where('id', '==', id)).valueChanges() as Observable<T[]>;
  }

  getOrder(): Observable<T[]> {
    return this.afs.collection('order', ref => ref.orderBy('userEmail')).valueChanges() as Observable<T[]>;
  }

  getProducts(collectionName: string, productId: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => ref.where('id', '==', productId)).valueChanges() as Observable<T[]>;
  }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  // tslint:disable-next-line: typedef
  weakAdd(collectionName: string, data: T) {
    return this.afs.collection(collectionName).add(data).then(
      result => { /*console.log(result);*/ }, err => { /*console.log(err);*/ }).finally(() => { /*console.log('finally');*/ });
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: T): Promise<void> {
    return this.afs.collection(collectionName).doc(id).update(data).then(
      result => { /*console.log(result);*/ }, err => { /*console.log(err);*/ }).finally(() => { /*console.log('finally');*/ });
  }

  delete(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }

  deleteCart(collectionName: string, email: string, id: string){
    this.afs.collection(collectionName, ref => ref.where('userEmail', '==', email)).get().subscribe(res =>{
      res.forEach(element =>{
        this.afs.collection(collectionName).doc(id).delete();
      });
    });
  }
}
