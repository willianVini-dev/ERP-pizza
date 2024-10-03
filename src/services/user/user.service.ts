import prisma from "../../DB/index"

interface UserCreate {
	name: string;
	email: string;
	password: string;
}

const createService = async ({ ...data }: UserCreate): Promise<any> => {

	try {
		const userExists = await prisma.user.findFirst({ where: { email: data.email } })
		if (userExists)
			throw new Error("User alread exists")

		await prisma.user.create({ data })

	} catch (err: unknown) {
		throw new Error
	}

}

export { createService }