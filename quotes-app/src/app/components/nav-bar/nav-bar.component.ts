import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToggleInsertSectionService } from 'src/app/resources/services/toggle-insert-section.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private toggleService: ToggleInsertSectionService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleService.changeVariable();
  }
}
