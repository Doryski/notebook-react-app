import React from 'react'
import { Check, Close, Trash, Undo } from '@styled-icons/evil'
import { ICON_SIZE } from './utils'

export default {
	leave: {
		action: 'LEAVE',
		content:
			'Are you sure you want to leave? All changes will be canceled.',
		leftBtn: <Check size={ICON_SIZE} />,
		rightBtn: <Undo size={ICON_SIZE} />,
	},
	delete: {
		action: 'DELETE',
		content:
			'Are you sure you want to delete this note? All data will be lost.',
		leftBtn: <Trash size={ICON_SIZE} />,
		rightBtn: <Close size={ICON_SIZE} />,
	},
	update: {
		action: 'UPDATE',
		content:
			'Are you sure you want to update this note? All previous data will be replaced by new.',
		leftBtn: <Check size={ICON_SIZE} />,
		rightBtn: <Close size={ICON_SIZE} />,
	},
}
