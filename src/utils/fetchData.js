// import axios from 'axios'
import { fetch } from 'dva'

export default async () => {
  return new Promise((resolve, reject) => {
    fetch('/receptionist', { method: 'GET' }).then(
      (res) => {
        res.json().then(
          (ret) => {
            const artwork = ret.data[0].data
            const history = ret.data[1].data
            const wordcloud = ret.data[2].data
            const quoteSpeaker = ret.data[5]
            const quoteContent = ret.data[4]
            const artworkArtist = ret.data[3]
            resolve([artwork, history, wordcloud, artworkArtist, quoteSpeaker, quoteContent])
          }
        )
      }
    )
  }
  )
}
