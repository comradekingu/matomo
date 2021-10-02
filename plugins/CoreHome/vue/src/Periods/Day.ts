import translate from '../translate';
import Periods from './Periods';
import { parseDate, format, todayIsInRange } from './utilities';

export default class DayPeriod {
  constructor(private dateInPeriod: Date) {}

  static parse(strDate: string): DayPeriod {
    return new DayPeriod(parseDate(strDate));
  }

  static getDisplayText(): string {
    return translate('Intl_PeriodDay');
  }

  getPrettyString(): string {
    return format(this.dateInPeriod);
  }

  getDateRange(): Date[] {
    return [new Date(this.dateInPeriod.getTime()), new Date(this.dateInPeriod.getTime())];
  }

  containsToday(): boolean {
    return todayIsInRange(this.getDateRange());
  }
}

Periods.addCustomPeriod('day', DayPeriod);
