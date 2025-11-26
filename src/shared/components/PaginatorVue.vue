<template>
    <div class="paginator">
        <div class="paginator__item" v-for="current in length" :key="current" v-on:click="$emit('onChange', current)">
            {{ current }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        length
    }
}
</script>
<style>
    .paginator{
        display: flex;
        gap: 4px;
        margin: 16px;
    }
    .paginator__item{
        background: hsl(234, 55%, 80%); 
        color: hsl(234, 55%, 20%); 
        width: 36px; 
        height: 36px; 
        border-radius: 12px; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        cursor: pointer;
    }
    .paginator__item:hover{
        background: hsl(234, 55%, 70%);
    }
</style>