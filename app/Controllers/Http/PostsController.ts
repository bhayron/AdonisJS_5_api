import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async create({ request }: HttpContextContract) {
    const { title } = request.only(['title'])
    //console.log(title)

    const post = await Post.create({
      title,
    })
    return post
  }

  public async index() {
    const all = await Post.all()
    return all
  }
}
