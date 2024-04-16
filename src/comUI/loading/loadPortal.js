
import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';


const createArticle = (name)=>{
	var el = document.createElement('article');
	el.setAttribute('id', 'loading');
	el.classList.add(name);
	document.body.appendChild(el)

	return el;
}

const LoadPortal = ({children, name}) => {
	const [createLoading, setCreateLoading] = useState(null);
	
	useEffect(()=>{
		const loadingWrap = document.querySelectorAll('#loading');
		let article = null;
		let createElBool = false;
		
		if(!loadingWrap.length) {
			article = createArticle(name);
			createElBool = true;
		}
		
		setCreateLoading(article);
		return(()=>{
			if(createElBool) {
				article.parentNode.removeChild(article);
			}
		})
	}, [name])

	if(createLoading === null) return null;
	return createPortal(children, createLoading);
}

export default LoadPortal;
