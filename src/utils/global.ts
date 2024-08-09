import { IHead } from '../Table/Table';
import { IData } from './const';

export const sortTableHeader = (
  head: IHead,
  nextList: IData[],
  nextHeader: IHead[],
  setListTable: React.Dispatch<React.SetStateAction<IData[]>>,
  setHeaderTable: React.Dispatch<React.SetStateAction<IHead[]>>
) => {
  if (head.name === 'Name') {
    if (!head.sort) {
      const sortName = nextList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setListTable(sortName);
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = true;
          }
          return hh;
        })
      );
      return;
    } else {
      const sortName = nextList.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = false;
          }
          return hh;
        })
      );
      setListTable(sortName);
      return;
    }
  }
  if (head.name === 'Favorite Food') {
    if (!head.sort) {
      const sortName = nextList.sort((a, b) => {
        if (a.favoriteFood < b.favoriteFood) {
          return -1;
        }
        if (a.favoriteFood > b.favoriteFood) {
          return 1;
        }
        return 0;
      });
      setListTable(sortName);
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = true;
          }
          return hh;
        })
      );
      return;
    } else {
      const sortName = nextList.sort((a, b) => {
        if (a.favoriteFood > b.favoriteFood) {
          return -1;
        }
        if (a.favoriteFood < b.favoriteFood) {
          return 1;
        }
        return 0;
      });
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = false;
          }
          return hh;
        })
      );
      setListTable(sortName);
      return;
    }
  }
  if (head.name === 'Favorite Movie') {
    if (!head.sort) {
      const sortName = nextList.sort((a, b) => {
        if (a.favoriteMovie < b.favoriteMovie) {
          return -1;
        }
        if (a.favoriteMovie > b.favoriteMovie) {
          return 1;
        }
        return 0;
      });
      setListTable(sortName);
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = true;
          }
          return hh;
        })
      );
      return;
    } else {
      const sortName = nextList.sort((a, b) => {
        if (a.favoriteMovie > b.favoriteMovie) {
          return -1;
        }
        if (a.favoriteMovie < b.favoriteMovie) {
          return 1;
        }
        return 0;
      });
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = false;
          }
          return hh;
        })
      );
      setListTable(sortName);
      return;
    }
  }
  if (head.name === 'Status') {
    if (!head.sort) {
      const sortName = nextList.sort((a, b) => {
        if (a.status < b.status) {
          return -1;
        }
        if (a.status > b.status) {
          return 1;
        }
        return 0;
      });
      setListTable(sortName);
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = true;
          }
          return hh;
        })
      );
      return;
    } else {
      const sortName = nextList.sort((a, b) => {
        if (a.status > b.status) {
          return -1;
        }
        if (a.status < b.status) {
          return 1;
        }
        return 0;
      });
      setHeaderTable(
        nextHeader.map((hh) => {
          if (hh.name === head.name) {
            hh.sort = false;
          }
          return hh;
        })
      );
      setListTable(sortName);
      return;
    }
  }
};
