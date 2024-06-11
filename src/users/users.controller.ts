import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') //users
export class UsersController {
  /**
   * GET /users
   * GET /users/:id
   * POST /users
   * PATCH /users/:id
   * DELETE /users/:id
   */

  @Get() // /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'INGINEER' | 'ADMIN') {
    return [];
  }
  // the correct order !! Waterfall
  //   @Get('interns') // /users
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') // GET /users/;id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //POST /users  and add json body
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //Delete  /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
