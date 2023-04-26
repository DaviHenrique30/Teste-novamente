import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Post from 'App/Models/Post'

export default class CommentsController {

    public async store({request, response, params }: HttpContextContract) {

        const body = request.body()
        const postId = params.postId

        await Post.findOrFail(postId)

        body.postId = postId

        const comment = await Comment.create(body)

        response.status(201)

        return{
            message: "Comentario feito com sucesso!",
            data: comment,
        }

    }
}
