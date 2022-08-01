import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  userlist: any[] = [];
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  constructor(private adminservice:AdminService) {
    this.adminservice.getApplicantDetails().subscribe(data => { this.userlist = data })
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {
  }

}
