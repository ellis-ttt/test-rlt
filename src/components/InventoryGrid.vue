<template >
  <div class = "inventory-grid">
    <InventoryItem
	    v-for = "item in inventoryStore.items"
	    :key = "item.id"
	    :item = "item"
	    :style = "{ gridColumn: item.x + 1, gridRow: item.y + 1 }"
	    @select = "selectItem"
    />

    <ItemDetailsModal
	    :item = "selectedItem"
	    @close = "selectedItem = null"
	    @delete = "deleteItem"
    />
  </div >
</template >

<script
	lang = "ts"
	setup
>
import { ref }               from 'vue'
import { useInventoryStore } from '@/stores/inventory.store.ts'
import type { Item }         from '@/types/item.interface'
import InventoryItem         from './InventoryItem.vue'
import ItemDetailsModal      from './ItemDetailsModal.vue'

const inventoryStore = useInventoryStore ()
const selectedItem = ref<Item | null> ( null )

function selectItem ( item : Item ) {
	selectedItem.value
		= item
}

function deleteItem ( id : string ) {
	inventoryStore.removeItem ( id )
	selectedItem.value
		= null
}
</script >

<style lang = "scss">
.inventory-grid {
	display               : grid;
	padding               : 20px;
	background-color      : #F4F4F4;
	grid-template-columns : repeat(5, 1fr);
	gap                   : 10px;
}
</style >