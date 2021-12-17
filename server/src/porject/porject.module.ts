import { Module } from "@nestjs/common";
import { PorjectModuleBase } from "./base/porject.module.base";
import { PorjectService } from "./porject.service";
import { PorjectController } from "./porject.controller";
import { PorjectResolver } from "./porject.resolver";

@Module({
  imports: [PorjectModuleBase],
  controllers: [PorjectController],
  providers: [PorjectService, PorjectResolver],
  exports: [PorjectService],
})
export class PorjectModule {}
