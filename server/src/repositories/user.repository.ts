import { Prisma, PrismaClient } from "../generated/prisma/client";

const publicUserSelect = {
  id: true,
  email: true,
  name: true,
  role: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

export type UserRoleName = "student" | "admin" | "staff" | "superStaff";

export interface CreateUserData {
  id: number;
  email: string;
  password: string;
  name: string;
  role: UserRoleName;
}

export interface ListUsersOptions {
  role?: UserRoleName;
  isActive?: boolean;
  skip?: number;
  take?: number;
}

type PrismaUserRole = Prisma.UserCreateInput["role"];

function toPrismaRole(role: UserRoleName): PrismaUserRole {
  const roles: Record<UserRoleName, PrismaUserRole> = {
    student: "STUDENT",
    admin: "ADMIN",
    staff: "STAFF",
    superStaff: "SUPER_STAFF",
  };

  return roles[role];
}

function toUserWhereInput(options: ListUsersOptions): Prisma.UserWhereInput {
  return {
    role: options.role ? toPrismaRole(options.role) : undefined,
    isActive: options.isActive,
  };
}

export class UserRepository {
  constructor(private readonly db: PrismaClient) {}

  findById(id: number) {
    return this.db.user.findUnique({
      where: { id },
      select: publicUserSelect,
    });
  }

  findByEmail(email: string) {
    return this.db.user.findUnique({
      where: { email },
      select: publicUserSelect,
    });
  }

  findMany(options: ListUsersOptions = {}) {
    return this.db.user.findMany({
      where: toUserWhereInput(options),
      skip: options.skip,
      take: options.take,
      orderBy: { createdAt: "desc" },
      select: publicUserSelect,
    });
  }

  count(options: ListUsersOptions = {}) {
    return this.db.user.count({
      where: toUserWhereInput(options),
    });
  }

  create(data: CreateUserData) {
    return this.db.user.create({
      data: {
        ...data,
        role: toPrismaRole(data.role),
      },
      select: publicUserSelect,
    });
  }

  update(id: number, data: Prisma.UserUpdateInput) {
    return this.db.user.update({
      where: { id },
      data,
      select: publicUserSelect,
    });
  }

  setActiveStatus(id: number, isActive: boolean) {
    return this.db.user.update({
      where: { id },
      data: { isActive },
      select: publicUserSelect,
    });
  }
}