import { ko } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';

import { Button } from './components/ui/button';
import { Calendar } from './components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';

const DatePicker = ({ date, setDate }: { date: DateRange; setDate: (date: DateRange) => void }) => {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Button variant="secondary">날짜 선택</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0">
        <Calendar
          className="bg-w01"
          classNames={{
            day_selected: 'hover:bg-green-100',
            day_range_start: 'day-range-start aria-selected:bg-green-100 rounded-none rounded-l-md',
            day_range_middle: 'aria-selected:bg-green-100 rounded-none',
            day_range_end: 'day-range-end aria-selected:bg-green-100 rounded-none rounded-r-md',
            dropdown_icon: 'cursor-pointer',
            nav_icon: 'cursor-pointer',
          }}
          mode="range"
          locale={ko}
          selected={date}
          onSelect={(selected) => {
            if (selected?.from && selected?.to === undefined) {
              setDate({ from: selected.from, to: selected.from });
            } else {
              setDate(selected || { from: undefined, to: undefined });
            }
          }}
          defaultMonth={date?.from}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
