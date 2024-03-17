
import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';


const createArticle = (idName, name)=>{
	var el = document.createElement('article');
	el.setAttribute('id', idName);
	el.classList.add(name);
	document.body.appendChild(el)

	return el;
}

const LayerPortal = ({children, name, idName}) => {
	const [createLayer, setCreateLayer] = useState(null);
	
	useEffect(()=>{
		const articleEl = document.querySelectorAll('#' + idName);
		let article = null;
		let createElBool = false;
		
		if(!articleEl.length) {
			article = createArticle(idName, name);
			createElBool = true;
		}
		
		setCreateLayer(article);
		return(()=>{
			if(createElBool) {
				article.parentNode.removeChild(article);
			}
		})
	}, [idName])

	if(createLayer === null) return null;
	return createPortal(children, createLayer);
}

export default LayerPortal;
