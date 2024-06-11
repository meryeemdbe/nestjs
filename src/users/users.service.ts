import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Mery Test',
      email: 'mery@mail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@mail.com',
      role: 'INGINEER',
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@mail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'INGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role == role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.filter(user => user.id === id)
  }
  create(user: {name:string, email:string, role: 'INTERN' | 'INGINEER' | 'ADMIN' }) {
    // userByHighestId = [...this.users]
  }
}
