import { Component, OnInit, Input } from '@angular/core';
import { RoutesService } from "../../services/routes-service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private routeService: RoutesService) { }

  result;

  ngOnInit(): void {
    this.result = this.routeService.results;
  }

}
