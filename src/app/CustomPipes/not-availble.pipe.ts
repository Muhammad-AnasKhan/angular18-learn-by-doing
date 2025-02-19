import { Pipe, PipeTransform } from '@angular/core';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';

@Pipe({
  name: 'notAvailble',
  standalone: true
})
export class NotAvailblePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // if (value !== '' && value !== null && value !== undefined ) {
    if (value ) {
      return value
    }
    else {
      return 'NA';
    }
  }

}
