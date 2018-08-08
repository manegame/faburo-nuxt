import Prismic from 'prismic-javascript'
import { API_ROOT } from './root'

export default {
  getPages() {
    return new Promise((resolve, reject) => {
      Prismic.getApi(API_ROOT)
        .then( api => {
          return api.query(
            Prismic.Predicates.at('document.type', 'page'),
            { orderings: '[my.page.date desc]' }
          )
        })
        .then(
          response => {
            resolve(response.results)
          },
          response => {
            reject(response)
          }
        )
    })
  } //,
}