import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './pages/post.schema'
import { externalLink, richText, simpleRichText } from './objects/rich-text.schema'
import { homepage } from './pages/home.schema'
import { blogType } from './pages/blog.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, richText, simpleRichText, externalLink, homepage, blogType],
}
