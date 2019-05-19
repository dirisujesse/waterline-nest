import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// only class based mdwares are excludable
@Injectable()
export class IdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, nxt) {
        const id = req.path.split('/');
        if (id.length > 1 && !id[1]) {
            res.status(400).send('Bad Request');
        } else {
            nxt();
        }
    }
}