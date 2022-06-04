
class Employee {
    id = 1;
    Name = 'QUick';
    officeAddress = null;
    constructor(a) { 
        this.officeAddress = a;
    }

    setOfficeAddress(a) {
        this.officeAddress = a;
    }
    show() {
        console.log(`${this.Name} ${this.officeAddress.home}`);
    }

}

class Address {
    home = 'Kharadi';
    line1='';
    line2='';
};


let a = new Address(); //association 
let e = new Employee(a);
e.officeAddress = a;
e.setOfficeAddress(a);
let e2 = new Employee(a);
e2.officeAddress = a;
e.show();
e2.show();
e = null; //composition 

e2.show()