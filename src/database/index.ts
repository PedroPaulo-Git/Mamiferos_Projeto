import { PrismaClient, Mamiferos } from '@prisma/client';


    
    const database = new PrismaClient({

        log:["error", "info", "query","warn"]
    });
   

 
export {database};