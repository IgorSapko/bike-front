import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/react';
import styles from './Loader.module.css'

const beatCss = css`
	display: block;
	margin: calc(100vh * 0.4) auto;
`;

const Loader = ({ onLoad }) => (
	<div className={styles.loaderWrapper}>
		<BeatLoader size={40} color="#4a56e2" loading={onLoad} css={beatCss} />
	</div>
);

export default Loader;
