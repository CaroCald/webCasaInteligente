
import {Controller, Get, Req, Res } from '@nestjs/common';
const fs = require('fs');
@Controller('casa')

export class CasaController {

    @Get()
    mostrar(@Res()res){
        let contenido=fs.readFileSync(__dirname+'/casa.json', 'utf8');
        return res.send(contenido);
    }
}