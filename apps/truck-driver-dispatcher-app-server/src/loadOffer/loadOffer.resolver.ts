import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LoadOfferResolverBase } from "./base/loadOffer.resolver.base";
import { LoadOffer } from "./base/LoadOffer";
import { LoadOfferService } from "./loadOffer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LoadOffer)
export class LoadOfferResolver extends LoadOfferResolverBase {
  constructor(
    protected readonly service: LoadOfferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
