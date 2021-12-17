import { PrismaService } from "nestjs-prisma";
import { Prisma, Porject } from "@prisma/client";

export class PorjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PorjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PorjectFindManyArgs>
  ): Promise<number> {
    return this.prisma.porject.count(args);
  }

  async findMany<T extends Prisma.PorjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PorjectFindManyArgs>
  ): Promise<Porject[]> {
    return this.prisma.porject.findMany(args);
  }
  async findOne<T extends Prisma.PorjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PorjectFindUniqueArgs>
  ): Promise<Porject | null> {
    return this.prisma.porject.findUnique(args);
  }
  async create<T extends Prisma.PorjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PorjectCreateArgs>
  ): Promise<Porject> {
    return this.prisma.porject.create<T>(args);
  }
  async update<T extends Prisma.PorjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PorjectUpdateArgs>
  ): Promise<Porject> {
    return this.prisma.porject.update<T>(args);
  }
  async delete<T extends Prisma.PorjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PorjectDeleteArgs>
  ): Promise<Porject> {
    return this.prisma.porject.delete(args);
  }
}
