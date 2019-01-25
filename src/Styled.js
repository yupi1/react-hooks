import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	min-width: 450px;
	min-height: 200px;
	text-align: center;
	color: 'white';
	padding: 10px;
	background-color: ${props => props.background};
	margin-bottom: 50px;
`;

const Button = styled.button`
	width: 120px;
	margin-bottom: 30px;
	border: none;
	border-radius: 6px;
	background-color: #4caf50;
	padding: 10px 5px;
	color: white;
`;

const GalleryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 7px;
	grid-auto-rows: 200px;
	grid-auto-flow: dense;
`;

const Item = styled.div`
	overflow: hidden;
	display: grid;
	grid-column: ${props => `span ${props.column}`};
	grid-row: ${props => `span ${props.row}`};
`;

const Image = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	&.lazy-image {
		opacity: 0.2;
		will-change: opacity;
		transition: all 2s;
		&.loaded {
			opacity: 1;
		}
	}
`;

export { Container, Button, GalleryContainer, Item, Image };
