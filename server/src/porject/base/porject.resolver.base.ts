import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeletePorjectArgs } from "./DeletePorjectArgs";
import { PorjectFindManyArgs } from "./PorjectFindManyArgs";
import { PorjectFindUniqueArgs } from "./PorjectFindUniqueArgs";
import { Porject } from "./Porject";
import { PorjectService } from "../porject.service";

@graphql.Resolver(() => Porject)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PorjectResolverBase {
  constructor(
    protected readonly service: PorjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Porject",
    action: "read",
    possession: "any",
  })
  async _porjectsMeta(
    @graphql.Args() args: PorjectFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Porject])
  @nestAccessControl.UseRoles({
    resource: "Porject",
    action: "read",
    possession: "any",
  })
  async porjects(
    @graphql.Args() args: PorjectFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Porject[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Porject",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Porject, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Porject",
    action: "read",
    possession: "own",
  })
  async porject(
    @graphql.Args() args: PorjectFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Porject | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Porject",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Porject)
  @nestAccessControl.UseRoles({
    resource: "Porject",
    action: "delete",
    possession: "any",
  })
  async deletePorject(
    @graphql.Args() args: DeletePorjectArgs
  ): Promise<Porject | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
