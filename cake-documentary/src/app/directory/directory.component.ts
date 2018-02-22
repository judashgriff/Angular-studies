import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { DataService } from '../data.service';
declare const firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {
  cakes = [];
  newId = this.cakes.length

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   (data) => this.cakes = data as any
    // );
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.cakes.push(snapshot.val());
    });
  }

  fbPostData(name, type, color){
    firebase.database().ref('/').push({id: this.cakes.length, name: name, type: type, color: color});
  }

  fbModifyData(){
    console.log('Modify is clicked');
    
  }

  fbRemoveData(cakeId){
    const dataSet = firebase.database().ref('/').once('value').then(function(snapshot) {
      return snapshot.val();
    }).then((data) => {
      const path = Object.keys(data)[cakeId];
      firebase.database().ref('/' + path).remove().then(() => {
        this.cakes = [];
        this.fbGetData();
      });
    })
  }

}
