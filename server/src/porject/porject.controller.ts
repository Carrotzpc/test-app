import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PorjectService } from "./porject.service";
import { PorjectControllerBase } from "./base/porject.controller.base";

@swagger.ApiTags("porjects")
@common.Controller("porjects")
export class PorjectController extends PorjectControllerBase {
  constructor(
    protected readonly service: PorjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
