import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  wineList$: Observable<any[]> | null = null;
  champagneList$: Observable<any[]> | null = null;
  searchTerm: string;


  errorObject = null;

  constructor(private service: FbBaseService<any>, private router: Router) { }

  ngOnInit(): void {
    this.wineList$ = this.service.get('wine');
    this.champagneList$ = this.service.get('champagne');
  }

  onGetWine(event: any): void {
    this.router.navigateByUrl('/details/wine/' + event.id);
  }

  onGetChampagne(event: any): void {
      this.router.navigateByUrl('/details/champagne/' + event.id);
  }
}
