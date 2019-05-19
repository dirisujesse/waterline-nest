import { Request, Response } from 'express';

export function logger(req: Request, res: Response, nxt) {
    console.log(req.url, req.path, req.query, req.body, req.params);
    nxt();
}