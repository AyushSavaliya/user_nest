import { Injectable } from "@nestjs/common";

@Injectable()
export class userService{
    
    getUSer(){
        return 'hello user good morning'
    }
}