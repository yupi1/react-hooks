import React from 'react';

import { GalleryContainer, Item, Image } from './Styled';

const Gallery = props => {
	const { collectionImage, itemsRef } = props;

	return (
		<GalleryContainer>
			{collectionImage.map((item, index) => {
				return (
					<Item
						ref={itemsRef[index]}
						key={index}
						column={item[0]}
						row={item[1]}
					>
						<Image
							className="lazy-image"
							alt="unsplash"
							data-img-src={`https://source.unsplash.com/random?sig=${index}/800x600`}
						/>
					</Item>
				);
			})}
		</GalleryContainer>
	);
};

export default Gallery;
