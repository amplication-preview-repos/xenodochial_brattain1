import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DispatcherResolverBase } from "./base/dispatcher.resolver.base";
import { Dispatcher } from "./base/Dispatcher";
import { DispatcherService } from "./dispatcher.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Dispatcher)
export class DispatcherResolver extends DispatcherResolverBase {
  constructor(
    protected readonly service: DispatcherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
