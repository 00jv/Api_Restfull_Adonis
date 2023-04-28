import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'

export default class CommentsController {
  public async store({ params, request, response }: HttpContextContract) {
    const body = request.body()
    const { momentID } = params

    console.log(momentID)

    if (momentID === undefined) {
      throw new Error('Id undefined')
    }

    await Moment.findOrFail(momentID)

    body.momentID = momentID

    const comment = await Comment.create(body)

    response.status(201)

    return {
      msg: 'Comentario criado',
      data: comment,
    }
  }
}
