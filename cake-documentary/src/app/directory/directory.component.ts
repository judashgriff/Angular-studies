import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  cake: string;

  constructor(private route: ActivatedRoute) {
    this.cake = route.snapshot.params['cake'];
  }

  ngOnInit() {
  }

}
