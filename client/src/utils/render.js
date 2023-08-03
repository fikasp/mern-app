import * as React from 'react'

const RenderWhen = ({ limit, isTrue, children }) => {
	const list = []

	if (isTrue !== true) {
		return null
	}

	React.Children.map(children, (child) => {
		const { isTrue: isChildTrue } = child?.props || {}

		if (isChildTrue === true && list.length < limit) {
			list.push(child)
		}
	})

	return <>{list}</>
}

RenderWhen.defaultProps = {
	limit: 1,
	isTrue: true,
}

RenderWhen.If = ({ children }) => children

export default RenderWhen
