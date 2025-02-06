<template >
  <div
	  class = "inventory-item"
	  @click = "$emit('select', item)"
  >
    <img
	    :alt = "item.name"
	    :src = "item.image"
	    class = "inventory-item__image"
    >
  </div >
</template >

<script
	lang = "ts"
	setup
>
import type { Item } from '@/types/Item'

defineProps<{
	item : Item
}> ()

defineEmits ( [ 'select' ] )
</script >

<style lang = "scss">
.inventory-item {
	display          : flex;
	align-items      : center;
	justify-content  : center;
	cursor           : pointer;
	transition       : transform 0.2s;
	border           : 2px solid #999999;
	border-radius    : 8px;
	background-color : #E0E0E0;

	&:hover {
		transform : scale(1.05);
	}

	&__image {
		max-width  : 80%;
		max-height : 80%;
		object-fit : contain;
	}
}
</style >