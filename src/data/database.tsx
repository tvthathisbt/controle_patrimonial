import { CategoriesType, ItemDatabaseType} from '../types/DatabaseTypes';

// ITEMS
export const ItemsDatabase: ItemDatabaseType[] = [
  {
    id: '1',
    title: 'Notebook Dell i3',
    model: 'Inspiron 5555',
    quantity: 3,
    department: 'Compras',
    category: 'Notebook',
    description: '',
  },
  {
    id: '2',
    title: 'Notebook HP i5',
    model: 'HP G6',
    quantity: 1,
    department: 'Compras',
    category: 'Notebook',
    description: '',
  },
  {
    id: '3',
    title: 'Notebook Lenovo i3',
    model: 'Ideapad 330s',
    quantity: 2,
    department: 'Jurídico',
    category: 'Notebook',
    description: '',
  },
  {
    id: '4',
    title: 'Lenovo Thinkcentre i3',
    model: 'Thinkcentre 1111',
    quantity: 3,
    department: 'Rh',
    category: 'Desktop',
    description: '',
  },
  {
    id: '5',
    title: 'HP Laserjet m1212',
    model: 'Laserjet m1212',
    quantity: 1,
    department: 'Produção',
    category: 'Impressora',
    description: '',
  },
  {
    id: '6',
    title: 'HP Laserjet m147',
    model: 'Laserjet m147',
    quantity: 1,
    department: 'Produção',
    category: 'Impressora',
    description: '',
  },
  {
    id: '7',
    title: 'Nobreak',
    model: 'UPS',
    quantity: 1,
    department: 'Ti',
    category: 'Outros',
    description: '',
  },
  {
    id: '8',
    title: 'Nobreak',
    model: 'UPS',
    quantity: 1,
    department: 'Ti',
    category: 'Outros',
    description: '',
  },
];

// CATEGORIES
export const CategoriesDatabase: CategoriesType[] = [
  {
    title: 'Master',
    color: '#b0d66f'
  },
  {
    title: 'Central Tecnica',
    color: '#db8ad3'
  },
  {
    title: 'Switcher',
    color: '#a2dcef',
  },
  {
    title: 'Studio',
    color: '#d8ab7d',
  },
  {
    title: 'TI',
    color: '#d8ab7d',
  },
  {
    title: 'Tales',
    color: '#d8ab7d',
  },
  {
    title: 'Kal',
    color: '#d8ab7d',
  },
  {
    title: 'Mineiro',
    color: '#d8ab7d',
  },
  {
    title: 'Postos Retransmissores',
    color: '#d8ab7d',
  }
];
