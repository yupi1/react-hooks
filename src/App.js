import React, { useState, createRef, useEffect, Fragment } from 'react';
import './App.css';

import { Container, Button } from './Styled';
import { useRandomColor } from './useRandomColor';
import { imageCollection } from './utils';
import Gallery from './Gallery';

const ColoredBanner = () => {
	const colors = ['red', 'blue', 'yellow', 'green'];
	const [color, changeColor] = useRandomColor(colors, 'red');
	const [collectionImage, addToCollection] = useState(imageCollection(30));

	const itemsRef = collectionImage.reduce((itemRef, _, index) => {
		itemRef[index] = createRef();
		return itemRef;
	}, {});

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(image => {
				if (image.isIntersecting) {
					const lazyImage = image.target.firstChild;
					lazyImage.src = lazyImage.dataset.imgSrc;
					lazyImage.onload = () => lazyImage.classList.add('loaded');
				}
			});
		});

		Object.values(itemsRef).forEach(item => {
			observer.observe(item.current);
		});
	});

	return (
		<Fragment>
			<Container background={color}>
				<h2 style={{ flexBasis: '30%' }}>Click button below</h2>
				<Button onClick={changeColor}>Change color</Button>
				<Button
					onClick={() =>
						addToCollection([...collectionImage, ...imageCollection(10)])
					}
				>
					Add Photo
				</Button>
			</Container>

			<Gallery itemsRef={itemsRef} collectionImage={collectionImage} />
		</Fragment>
	);
};

export default ColoredBanner;
