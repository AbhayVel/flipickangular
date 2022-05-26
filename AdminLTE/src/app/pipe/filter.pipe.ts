import { Pipe, PipeTransform } from '@angular/core';
import { UserTemp } from '../components/pipeexample/usertemp';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(users: UserTemp[], searchTerm: string): UserTemp[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
