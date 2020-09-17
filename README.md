# nodeChat
basic backend to experiment with sequelize, postgres, socket.io, node/express


HTTP Endpoints
/login
/makeRoom
/listRooms/searchString
/joinRoom


Socket Endpoints
/chat /enterRoom


Database
user
  name password

chat
  userId string createdAt

## Steps

1. make http endpoint (login)
2. make socket endpoint (chat)
3. make database using postgres/sequelize
   1. users table
   2. chat table - room table probably


// create database command
Sequelize Commands
1. create rc (run command files)
2. sequelize init
3. createdb todos-dev
4. sequelize model:create --name Todo --attributes title:string
5. sequelize model:create --name TodoItem --attributes content:string,complete:boolean
6. sequelize db:migrate
7. sequelize-cli seed:generate --name todo
8. sequelize db:seed:all



// Stop all node processes
kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')

1. Todos
   1. seed data -done
   2. make login endpoint - done
   3. react side login - done
   5. messages returned with nested users don't have their token returned.
2. Authentication
   1. get payload from token and assert token is from actual user
   2. handle when user signs in from multiple clients