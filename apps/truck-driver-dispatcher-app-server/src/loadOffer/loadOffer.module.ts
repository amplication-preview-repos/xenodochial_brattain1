import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LoadOfferModuleBase } from "./base/loadOffer.module.base";
import { LoadOfferService } from "./loadOffer.service";
import { LoadOfferController } from "./loadOffer.controller";
import { LoadOfferResolver } from "./loadOffer.resolver";

@Module({
  imports: [LoadOfferModuleBase, forwardRef(() => AuthModule)],
  controllers: [LoadOfferController],
  providers: [LoadOfferService, LoadOfferResolver],
  exports: [LoadOfferService],
})
export class LoadOfferModule {}
