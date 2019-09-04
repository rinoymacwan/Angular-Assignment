

export class Employee {
  /**
   *
   */

  constructor(id?: number,
              firstName?: string,
              lastName?: string,
              email?: string,
              contactNumber?: number,
              address?: string,
              username?: string,
              password?: string,
              gender?: string,
              qualification?: string,
              experience?: string,
              codingLangauges?: string[]) {
                this.id = id;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.contactNumber = contactNumber;
                this.address = address;
                this.username = username;
                this.password = password;
                this. gender = gender;
                this.qualification = qualification;
                this.experience = experience;
                this.codingLangauges = codingLangauges;
  }
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: number;
  address: string;
  username: string;
  password: string;
  gender: string;
  qualification: string;
  experience: string;
  codingLangauges: string[];
}
