import * as moment from 'moment';

export function formatDate(date: Date) {
    let newDate = moment(date).format('DD/MM/YYYY');
    return newDate;
  }