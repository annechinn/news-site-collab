 import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './Article.css';
import {getArticle} from '../../api/back-end';

const bodyText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Cum sociis natoque penatibus et magnis dis. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Sit amet risus nullam eget felis eget nunc lobortis. Augue eget arcu dictum varius duis at. Ut enim blandit volutpat maecenas volutpat blandit. Tempus imperdiet nulla malesuada pellentesque elit eget. At tempor commodo ullamcorper a lacus vestibulum. In hac habitasse platea dictumst quisque sagittis purus sit amet. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mi proin sed libero enim sed faucibus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Vehicula ipsum a arcu cursus vitae. Lectus arcu bibendum at varius vel pharetra vel turpis. Faucibus turpis in eu mi bibendum neque egestas.
  Vitae justo eget magna fermentum iaculis eu. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Bibendum enim facilisis gravida neque convallis a cras semper. Enim praesent elementum facilisis leo. Nulla malesuada pellentesque elit eget gravida cum sociis. Imperdiet sed euismod nisi porta lorem. Sed risus ultricies tristique nulla aliquet enim. Donec ultrices tincidunt arcu non. Aliquam ultrices sagittis orci a scelerisque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Quisque sagittis purus sit amet volutpat consequat. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
  Urna molestie at elementum eu. Iaculis nunc sed augue lacus viverra vitae congue. Ante in nibh mauris cursus mattis molestie a. Sem integer vitae justo eget. Velit sed ullamcorper morbi tincidunt ornare. Orci a scelerisque purus semper eget duis at tellus at. Ut consequat semper viverra nam libero justo laoreet sit. Lacus sed turpis tincidunt id. Aenean et tortor at risus viverra adipiscing at in tellus. Ut faucibus pulvinar elementum integer. Turpis tincidunt id aliquet risus feugiat. Ultricies mi quis hendrerit dolor magna eget est lorem. Libero id faucibus nisl tincidunt eget nullam non. Eget nulla facilisi etiam dignissim diam.
  `;

function Article() {
  console.log(bodyText);
  const [article, setArticle] = useState(null);

  const { articleId } = useParams();

  useEffect(() => {

      setArticle(null);

      (async () => {
        setArticle(await getArticle(articleId));
      })();

  }, [articleId]);

   if (article) {
    return (
      <article className="full">
        <img src={article.jumboImageURL || article.imageURL} alt="" />
        <h3>{article.title}</h3>
        {bodyText.split('\n').map((line, i) => (
        <p key={i}>
            {line}
        </p>))}
     </article>
  
      );
   }
   else {
     return (
       <>
       </>
     )
   }
  
}

export default Article;
