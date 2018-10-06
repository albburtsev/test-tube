import { css } from 'linaria'

export const app = css`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const header = css`
	text-transform: uppercase;
	font-family: Georgia, 'Times New Roman', Times, serif;
	font-size: 40px;
`

// @todo: what's wrong with TS compiler?
// TS6133: 'css' is declared but its value is never read.
export const _never = css
