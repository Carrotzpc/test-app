import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PorjectServiceBase } from "./base/porject.service.base";

@Injectable()
export class PorjectService extends PorjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
