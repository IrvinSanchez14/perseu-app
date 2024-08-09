export type StatusType = 'Inactive' | 'Active';

export interface IData {
  name: string;
  favoriteFood: string;
  favoriteMovie: string;
  status: StatusType;
  direction?: boolean;
}

const HEADER_TABLE = [
  {
    name: 'Name',
    sort: false,
  },
  {
    name: 'Favorite Food',
    sort: false,
  },
  {
    name: 'Favorite Movie',
    sort: false,
  },
  {
    name: 'Status',
    sort: false,
  },
];

const DATA_TABLE: IData[] = [
  {
    name: 'Rocky',
    favoriteFood: 'Sushi',
    favoriteMovie: 'Back to The Future',
    status: 'Inactive',
  },
  {
    name: 'Matt',
    favoriteFood: 'Brisket Tacos',
    favoriteMovie: 'The Princess Bride',
    status: 'Active',
  },
  {
    name: 'Donny',
    favoriteFood: 'Singapore chow mei fun',
    favoriteMovie: 'The Princess Bride',
    status: 'Inactive',
  },
  {
    name: 'Miroslav',
    favoriteFood: 'Sushi',
    favoriteMovie: 'American Psycho',
    status: 'Active',
  },
];

export { HEADER_TABLE, DATA_TABLE };
