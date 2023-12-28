import { api } from "../../api";
import { ALERT } from "../types/alertTypes";
import { ARTICLE_TYPES } from '../types/articleTypes'

export const getArticles = () => async (dispatch) => {
   try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await api.get('/api/articles')

      if (res.data) {
         dispatch({ type: ARTICLE_TYPES.GET_ARTICLES, payload: res.data.articles })
      }

      dispatch({ type: ALERT, payload: { loading: false } })
   } catch (err) {
      dispatch({ type: ALERT, payload: { loading: false } })
   }
};