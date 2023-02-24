import { ComponentMeta, ComponentStory } from '@storybook/react'

import { modalShow } from '../../utils/modalShow'
import { Button } from '../Button'
import { Modal } from './Modal'

export default {
	title: 'Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>

const showAddModal = () => {
	modalShow({
		id: 'modal',
		title: 'Modal title',
		subtitle: 'Modal subtitle',
		content: 'Modal content.',
		actionName: 'Remove',
		cancelName: 'Cancel',
		variant: 'alert',
		action: () => null,
	})
}

const Template: ComponentStory<typeof Modal> = args => (
	<div>
		<Button
			variant="secondary"
			action={() => showAddModal()}
		>
			CLICK
		</Button>

		<Modal {...args} />
	</div>
)

export const Default = Template.bind({})
Default.args = {
	id: 'modal',
	title: 'Modal title',
	subtitle: 'Modal subtitle',
	content: 'Modal content.',
	actionName: 'Remove',
	cancelName: 'Cancel',
	variant: 'alert',
	'data-testid': 'modal',
}
