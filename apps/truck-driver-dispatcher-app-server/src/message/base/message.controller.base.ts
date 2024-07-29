/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MessageService } from "../message.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MessageCreateInput } from "./MessageCreateInput";
import { Message } from "./Message";
import { MessageFindManyArgs } from "./MessageFindManyArgs";
import { MessageWhereUniqueInput } from "./MessageWhereUniqueInput";
import { MessageUpdateInput } from "./MessageUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MessageControllerBase {
  constructor(
    protected readonly service: MessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Message })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMessage(
    @common.Body() data: MessageCreateInput
  ): Promise<Message> {
    return await this.service.createMessage({
      data: {
        ...data,

        dispatcher: data.dispatcher
          ? {
              connect: data.dispatcher,
            }
          : undefined,

        driver: data.driver
          ? {
              connect: data.driver,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,

        dispatcher: {
          select: {
            id: true,
          },
        },

        driver: {
          select: {
            id: true,
          },
        },

        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Message] })
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async messages(@common.Req() request: Request): Promise<Message[]> {
    const args = plainToClass(MessageFindManyArgs, request.query);
    return this.service.messages({
      ...args,
      select: {
        content: true,
        createdAt: true,

        dispatcher: {
          select: {
            id: true,
          },
        },

        driver: {
          select: {
            id: true,
          },
        },

        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async message(
    @common.Param() params: MessageWhereUniqueInput
  ): Promise<Message | null> {
    const result = await this.service.message({
      where: params,
      select: {
        content: true,
        createdAt: true,

        dispatcher: {
          select: {
            id: true,
          },
        },

        driver: {
          select: {
            id: true,
          },
        },

        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMessage(
    @common.Param() params: MessageWhereUniqueInput,
    @common.Body() data: MessageUpdateInput
  ): Promise<Message | null> {
    try {
      return await this.service.updateMessage({
        where: params,
        data: {
          ...data,

          dispatcher: data.dispatcher
            ? {
                connect: data.dispatcher,
              }
            : undefined,

          driver: data.driver
            ? {
                connect: data.driver,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,

          dispatcher: {
            select: {
              id: true,
            },
          },

          driver: {
            select: {
              id: true,
            },
          },

          id: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMessage(
    @common.Param() params: MessageWhereUniqueInput
  ): Promise<Message | null> {
    try {
      return await this.service.deleteMessage({
        where: params,
        select: {
          content: true,
          createdAt: true,

          dispatcher: {
            select: {
              id: true,
            },
          },

          driver: {
            select: {
              id: true,
            },
          },

          id: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
