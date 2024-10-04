import prisma from "../../DB"
import { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken"

interface AuthRequest {
  email: string;
  password: string;
}

const authService = async ({ email, password }: AuthRequest) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } })
    if (!user)
      throw new Error

    const passwordMatch = await compare(password, user.password)
    if (passwordMatch) {

      const token = sign(
        { name: user.name, email: user.email },
        process.env.SECRET_KEY,
        {
          subject: user.id,
          expiresIn: '30d'
        }
      )

      return {
        name: user.name,
        email: user.email,
        token
      }
    }

    return false

  } catch (err) {
    throw new Error
  }
}

export { authService }