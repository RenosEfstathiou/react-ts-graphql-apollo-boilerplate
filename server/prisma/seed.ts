import { products } from "./products";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
    await client.product.createMany({ data: products });
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => client.$disconnect());
