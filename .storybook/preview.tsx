import React from 'react'
import { ThemeProvider } from 'styled-components'

import { StorybookWrapper } from '../src/components/StorybookWrapper'
import { GlobalStyles } from '../src/styles/GlobalStyles'
import { darkTheme, lightTheme } from '../src/styles/theme'

const withTheme = (StoryFn, context) => {
	const theme = context.parameters.theme || context.globals.theme
	const storyTheme = theme === 'dark' ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={storyTheme}>
			<GlobalStyles />

			<StorybookWrapper>
				<StoryFn />
			</StorybookWrapper>
		</ThemeProvider>
	)
}

export const globalTypes = {
	theme: {
		name: 'THEME',
		description: 'Change theme',
		defaultValue: 'dark',
		toolbar: {
			icon: 'circlehollow',
			items: [
				{ value: 'dark', icon: 'circle', title: 'Dark' },
				{ value: 'light', icon: 'circlehollow', title: 'Light' },
			],
			showName: true,
		},
	},
}

export const decorators = [withTheme]
