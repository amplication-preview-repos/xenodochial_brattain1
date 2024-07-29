import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplianceDocumentModuleBase } from "./base/complianceDocument.module.base";
import { ComplianceDocumentService } from "./complianceDocument.service";
import { ComplianceDocumentController } from "./complianceDocument.controller";
import { ComplianceDocumentResolver } from "./complianceDocument.resolver";

@Module({
  imports: [ComplianceDocumentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplianceDocumentController],
  providers: [ComplianceDocumentService, ComplianceDocumentResolver],
  exports: [ComplianceDocumentService],
})
export class ComplianceDocumentModule {}
