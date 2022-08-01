import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userdata:any = []
  id:number = 0

  constructor(private userService: UserService,private activatedroute:ActivatedRoute) {
    const tid = this.activatedroute.snapshot.paramMap.get('id');
    this.id = Number(tid);
    this.userService.getUser(this.id).subscribe(data => {this.userdata = data;console.log(data)});
   }

  ngOnInit(): void {
  }

}
