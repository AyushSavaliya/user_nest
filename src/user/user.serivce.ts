import { Injectable, NotFoundException } from "@nestjs/common";
import { UserInterface } from "./interface/user";

@Injectable()
export class userService{
    public users:UserInterface[] = [];
    getUSer():UserInterface[]{
        return this.users;
    }
   
    async addUser(user:UserInterface):Promise<UserInterface>{
        this.users.push(user);
        return Promise.resolve(user);
    }


    //  getUserById(email:string):UserInterface{
    //     return this.users.filter(i => i.email===email)[0];
    // }

    async getUserById(email: string): Promise<UserInterface[]> {
        const userData = this.users.filter((i) => i.email === email);
        console.log(userData);
        if (userData && Array.isArray(userData) && userData.length > 0) {
          return Promise.resolve(userData);
        }
        throw new NotFoundException('User not found..');
      }
    

    // deleteUser(email:string):UserInterface[]{
    //     const deleteuser = this.users.filter((i) => i.email === email)
    //     this.users = deleteuser;
    //     return deleteuser;
    // }

    async deleteUser(email: string): Promise<UserInterface[]> {
        const userData = this.users.filter((i) => i.email === email);
        if (userData && Array.isArray(userData) && userData.length > 0) {
          const remainingUsers = this.users.filter((i) => i.email !== email);
          this.users = remainingUsers;
          return Promise.resolve(remainingUsers);
        }
        throw new NotFoundException('User not found..');
      }
}