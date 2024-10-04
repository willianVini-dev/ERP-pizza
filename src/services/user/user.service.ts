import prisma from "../../DB/index"
import {hash} from "bcryptjs"
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

		data.password = await hash(data.password, 8)
		return prisma.user.create({ data,select:{id:true} })

	} catch (err: unknown) {
		throw new Error
	}

}

export { createService }