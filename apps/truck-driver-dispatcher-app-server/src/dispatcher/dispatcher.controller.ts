import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DispatcherService } from "./dispatcher.service";
import { DispatcherControllerBase } from "./base/dispatcher.controller.base";

@swagger.ApiTags("dispatchers")
@common.Controller("dispatchers")
export class DispatcherController extends DispatcherControllerBase {
  constructor(
    protected readonly service: DispatcherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
