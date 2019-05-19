import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

@Injectable()
export class BodyValidator implements PipeTransform {
    constructor(private schema = {}) { }
    transform(val: any, meta: ArgumentMetadata) {
        if (false) {
            throw new BadRequestException('Req Body Is Ill Formed');
        }
        return val;
    }
}
