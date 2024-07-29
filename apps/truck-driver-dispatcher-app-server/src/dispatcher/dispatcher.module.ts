import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DispatcherModuleBase } from "./base/dispatcher.module.base";
import { DispatcherService } from "./dispatcher.service";
import { DispatcherController } from "./dispatcher.controller";
import { DispatcherResolver } from "./dispatcher.resolver";

@Module({
  imports: [DispatcherModuleBase, forwardRef(() => AuthModule)],
  controllers: [DispatcherController],
  providers: [DispatcherService, DispatcherResolver],
  exports: [DispatcherService],
})
export class DispatcherModule {}
