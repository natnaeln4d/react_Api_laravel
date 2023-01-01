const ArticleReducer = (state,action) => {
    switch(action.type){
          case 'GET':
              return action.post.data
          case 'COMMENT' :
            return[
                ...state.slice(0,action.index),
                   
                    {
                        id: action.post.id,
                        use_id: action.post.use_id,
                        title: action.post.title,
                        body: action.post.body,
                        catagory_id: action.post.catagory_id,
                        catagory: action.post.catagory,
                        comments: [
                            ...action.post.comments,
                                    {
                                        use_id: action.user,
                                        article_id: action.post.id,
                                        body: action.comment
                                    }
                               ],
                        likes: action.post.likes,
                        user: action.post.user,
                    },
                ...state.slice(action.index+1,(state.length))  
                ] 

          case 'LIKE' :
            return[
                ...state.slice(0,action.index),
                   
                    {
                        id: action.post.id,
                        use_id: action.post.use_id,
                        title: action.post.title,
                        body: action.post.body,
                        catagory_id: action.post.catagory_id,
                        catagory: action.post.catagory,
                        comments: action.post.comments,
                               likes: [
                                        {
                                            use_id: action.user,
                                            article_id: action.post.id,
                                            is_liked: true
                                        }
                                    ],
                        user: action.post.user,
                    },
                ...state.slice(action.index+1,(state.length))  
                ] 
          case 'DISLIKE' :
            return[
                ...state.slice(0,action.index),
                   
                    {
                        id: action.post.id,
                        use_id: action.post.use_id,
                        title: action.post.title,
                        body: action.post.body,
                        catagory_id: action.post.catagory_id,
                        catagory: action.post.catagory,
                        comments: action.post.comments,
                               likes: [
                                        {
                                            use_id: action.user,
                                            article_id: action.post.id,
                                            is_liked: !action.post.likes.is_liked
                                        }
                                    ],
                        user: action.post.user,
                    },
                ...state.slice(action.index+1,(state.length))  
                ] 
      }
}

export default ArticleReducer;