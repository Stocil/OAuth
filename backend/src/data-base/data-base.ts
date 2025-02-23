import { User } from 'types/users';

const testUsers: Array<[number, User]> = [
  [
    0,
    {
      login: 'test',
      email: 'test@mail.ru',
      password: '123456',
      id: 0,
    },
  ],
  [
    1,
    {
      login: 'test1',
      email: 'test1@mail.ru',
      password: '123456',
      id: 1,
    },
  ],
  [
    2,
    {
      login: 'test2',
      email: 'tes2@mail.ru',
      password: '123456',
      id: 2,
    },
  ],
];

export const usersBd: Map<number, User> = new Map([...testUsers]);

export let id = usersBd.size;
export const increaseId = () => id++;
