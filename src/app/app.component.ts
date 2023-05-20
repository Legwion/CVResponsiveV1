import { Component, OnInit } from '@angular/core';
  import { ResponsiveService } from './services/responsive.service'; 
import { Responsive2Service } from './services/responsive2.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'CV';
  isPC: boolean = true;

  constructor(private resolutionService: Responsive2Service) {}

  ngOnInit() {
    this.resolutionService.isPC().subscribe((isPC: boolean) => {
      this.isPC = isPC;
    });
  }
}