import { Pipe, PipeTransform } from '@angular/core';
import { UserTemp } from '../components/pipeexample/usertemp';

@Pipe({
  name: 'filterimpure',
  pure: false
})
export class FilterimpurePipe implements PipeTransform {

  transform(users: UserTemp[], searchTerm: string): UserTemp[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
