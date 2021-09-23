
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service'; 
import{ IUser} from '../services/IUser';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
     
     public users$! : Observable<IUser[]>;
  constructor( private userservice:UserService) { }

  ngOnInit(){
    this.userservice.getUsers().subscribe(res=>{
      this.users$=res;
    })
    
  }

}
