// eslint-disable-next-line import/prefer-default-export
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        products: () => {
            return prisma.product.findMany();
        },
        productById: async (parent: any, { id }: any) => {
            return prisma.product.findUnique({ where: { id } });
        },
        productsByIds: async (parent: any, { ids }: any) => {
            return prisma.product.findMany({ where: { id: { in: ids } } });
        },
    },
    Mutation: {
        addProduct: (_: any, args: any) => {
            return prisma.product.create({ data: args });
        },
    },
};
