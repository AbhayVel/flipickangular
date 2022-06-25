export class AMEmployee
{
      id?: number;
      icon?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: number;
      address?: string;
      dob: Date = new Date();
      jod?: string;
      completion?: number;
      countryId?: number = 0;
      city?: string;
      zip?: number;
      gender?:string;
      term?: boolean
}

export class PagingAccess {
      key?: number;
      value?: string;   
    }