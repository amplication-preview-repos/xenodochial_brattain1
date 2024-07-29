import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoadOfferServiceBase } from "./base/loadOffer.service.base";

@Injectable()
export class LoadOfferService extends LoadOfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
