<template >
  <div
	  v-if = "item"
	  class = "item-details-modal"
	  @click.self = "$emit('close')"
  >
    <div class = "item-details-modal__content">
      <img
	      :alt = "item.name"
	      :src = "item.image"
	      class = "item-details-modal__image"
      >
      <div class = "item-details-modal__details">
        <h2 class = "item-details-modal__title">{{
		        item.name
                                                }}</h2 >
        <p class = "item-details-modal__description">{{
		        item.description
                                                     }}</p >
        <button
	        class = "item-details-modal__delete-button"
	        @click = "$emit('delete', item.id)"
        >
          Delete
        </button >
      </div >
      <button
	      class = "item-details-modal__close-button"
	      @click = "$emit('close')"
      >
        ✕
      </button >
    </div >
  </div >
</template >

<script
	lang = "ts"
	setup
>
import type { Item } from '@/types/Item'

defineProps<{
	item : Item | null
}> ()

defineEmits ( [
	              'close' ,
	              'delete' ,
              ] )
</script >

<style lang = "scss">
.item-details-modal {
	position         : fixed;
	z-index          : 100;
	top              : 0;
	left             : 0;
	display          : flex;
	align-items      : center;
	justify-content  : center;
	width            : 100%;
	height           : 100%;
	background-color : rgba(0, 0, 0, 0.5);

	&__content {
		position              : relative;
		display               : grid;
		width                 : 90%;
		max-width             : 600px;
		padding               : 20px;
		border-radius         : 12px;
		background-color      : white;
		grid-template-columns : 1fr 1fr;
		gap                   : 20px;
	}

	&__image {
		max-width  : 100%;
		max-height : 300px;
		object-fit : contain;
	}

	&__details {
		display         : flex;
		flex-direction  : column;
		justify-content : center;
	}

	&__title {
		font-size     : 1.5rem;
		margin-bottom : 10px;
	}

	&__description {
		margin-bottom : 20px;
	}

	&__delete-button {
		padding          : 10px 20px;
		cursor           : pointer;
		transition       : background-color 0.2s;
		color            : white;
		border           : none;
		border-radius    : 5px;
		background-color : #FF4D4D;

		&:hover {
			background-color : #FF6B6B;
		}
	}

	&__close-button {
		font-size  : 1.5rem;
		position   : absolute;
		top        : 10px;
		right      : 10px;
		cursor     : pointer;
		transition : opacity 0.2s;
		opacity    : 0.6;
		border     : none;
		background : none;

		&:hover {
			opacity : 1;
		}
	}
}
</style >