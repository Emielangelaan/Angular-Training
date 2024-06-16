import { Component, Input, SimpleChanges } from '@angular/core';
import { Station } from '../models/station';
import { CommonModule } from '@angular/common';
import { VertrektijdInfo } from '../models/vertrektijd-info';
import { NsService } from '../services/ns.service';

@Component({
  selector: 'app-vertrektijden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertrektijden.component.html',
  styleUrl: './vertrektijden.component.css'
})
export class VertrektijdenComponent {
  currentCode: string | undefined = '';
  info: VertrektijdInfo[] = [];

  @Input()
  Station: Station | null = null; 

  constructor(private service: NsService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.currentCode = this.Station?.Code;
    if (this.currentCode != undefined) {
        this.service.getVertrektijdInfo(this.currentCode).subscribe((data: any) => this.info = data);
    }
  }
}
