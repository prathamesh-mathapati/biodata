require('dotenv').config()
const knex=require('knex')({
    client:process.env.client,
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
});


knex.schema.createTable('user',table=>{
    table.increments('id'),
    table.string('name'),
    table.string('email'),
    table.string('password')
}).then(()=>{
    console.log('creat table');
}).catch((err)=>{
    console.log('table is allredy create');
})

knex.schema.createTable('state',table=>{
    table.increments('id'),
    table.string('state')
}).then(()=>{
    console.log('creat table name state');
}).catch((err)=>{
    console.log('table is allredy create state');
})

knex.schema.createTable('child',table=>{
    table.string('Name'),
    table.string('sex'),
    table.string('date_of_birth'),
    table.string('Father_name'),
    table.string('Mother_name'),
    table.string('State').notNullable(),
    table.string('District').notNullable()
}).then(()=>{
    console.log('creat table name state');
}).catch((err)=>{
    console.log('table is allredy create');
})

knex.schema.createTable('disrict',table=>{
    table.increments('id'),
    table.string('disricts')
}).then(()=>{
    console.log('creat table name disrict');
}).catch((err)=>{
    console.log('table is allredy create ');
})
module.exports=knex
