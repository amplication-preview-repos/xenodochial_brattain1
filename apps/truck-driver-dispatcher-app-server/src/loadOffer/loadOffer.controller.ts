import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LoadOfferService } from "./loadOffer.service";
import { LoadOfferControllerBase } from "./base/loadOffer.controller.base";

@swagger.ApiTags("loadOffers")
@common.Controller("loadOffers")
export class LoadOfferController extends LoadOfferControllerBase {
  constructor(
    protected readonly service: LoadOfferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
