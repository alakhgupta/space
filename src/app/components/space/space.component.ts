import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  responseSpace: any;
  launchSpace: any = [];
  filterDataArray: any = [];

  constructor(private router: Router, private spacex: SpacexService) { }

  ngOnInit(): void {

    this.spacex.getConfig().subscribe(data => {

      this.responseSpace = data;
      console.log(this.responseSpace);

      this.responseSpace.forEach(element => {

        this.launchSpace.push(element);

      });

    })

  }

  filterData(x: any) {

    console.log(x);
    this.launchSpace = [];
    this.responseSpace.forEach(element => {

      if (element.launch_year == x) {

        this.launchSpace.push(element);

        this.router.navigate(['/space/'+element.launch_year]);

        console.log(this.launchSpace);
      }

    });

  }

}
