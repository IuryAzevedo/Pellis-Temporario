import prismaClient from "../../prisma"

interface UpdateUserRequest {
    name: string
    email: string
}

class UpdateUserService {
    async execute({ name, email }: UpdateUserRequest) {
        const updateProfile = await prismaClient.user.updateMany({
            where: {
                email: email
            },
            data: {
                name: name,
                email: email
            }
        })
        return updateProfile;
    }
}


export { UpdateUserService }