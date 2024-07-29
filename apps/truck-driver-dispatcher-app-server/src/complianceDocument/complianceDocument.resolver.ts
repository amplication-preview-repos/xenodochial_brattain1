import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComplianceDocumentResolverBase } from "./base/complianceDocument.resolver.base";
import { ComplianceDocument } from "./base/ComplianceDocument";
import { ComplianceDocumentService } from "./complianceDocument.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComplianceDocument)
export class ComplianceDocumentResolver extends ComplianceDocumentResolverBase {
  constructor(
    protected readonly service: ComplianceDocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
