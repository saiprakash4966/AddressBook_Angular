import { state } from "@angular/animations";

export class AddressBookModel {
    
    fullName:string;
    address:string;
    state:string;
    city:string;
    zip:string;
    phone:string;

    constructor(fullName:string,address:string,state:string,city:string,zip:string,phone:string) 
         {
        this.fullName=fullName;
        this.address=address;
        this.state=state;
        this.city=city;
        this.zip=zip;
        this.phone=phone;
    }


}