import { defineStore }  from 'pinia'
import { ref }          from 'vue'
import type { Item }    from '@/types/item.interface'
import { v4 as uuidv4 } from 'uuid'

export const useInventoryStore = defineStore (
	'inventory' ,
	() => {
		const items = ref<Item[]> ( [
			                            {
				                            id          : uuidv4 () ,
				                            name        : 'Sword of Destiny' ,
				                            image       : '/src/assets/items/sword.png' ,
				                            description : 'A legendary sword with mystical powers' ,
				                            x           : 0 ,
				                            y           : 0 ,
			                            } ,
			                            {
				                            id          : uuidv4 () ,
				                            name        : 'Shield of Protection' ,
				                            image       : '/src/assets/items/shield.png' ,
				                            description : 'A sturdy shield that has protected many warriors' ,
				                            x           : 1 ,
				                            y           : 0 ,
			                            } ,
			                            {
				                            id          : uuidv4 () ,
				                            name        : 'Health Potion' ,
				                            image       : '/src/assets/items/potion.png' ,
				                            description : 'Restores 50 health points' ,
				                            x           : 2 ,
				                            y           : 0 ,
			                            } ,
		                            ] )

		function addItem ( item : Omit<Item , 'id'> ) {
			items.value.push ( {
				                   ... item ,
				                   id : uuidv4 () ,
			                   } )
		}

		function removeItem ( id : string ) {
			items.value
				= items.value.filter ( item => item.id
				                               !== id )
		}

		function updateItemPosition (
			id : string ,
			x : number ,
			y : number ,
		) {
			const item = items.value.find ( i => i.id
			                                     === id )
			if ( item ) {
				item.x
					= x
				item.y
					= y
			}
		}

		return {
			items ,
			addItem ,
			removeItem ,
			updateItemPosition ,
		}
	} ,
	{
		persist : true ,
	} ,
)