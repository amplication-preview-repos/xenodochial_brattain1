import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DispatcherServiceBase } from "./base/dispatcher.service.base";

@Injectable()
export class DispatcherService extends DispatcherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
